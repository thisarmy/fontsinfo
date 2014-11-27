#!/usr/bin/env python

import os
import sys
import json
import shutil
import operator
import subprocess

Popen = subprocess.Popen
PIPE = subprocess.PIPE

FONTS_PATH = "../public/fonts"

def generate_font_paths(root):
    licenses = os.listdir(root)
    for license in licenses:
        if license not in ['apache', 'ofl', 'ufl']:
            continue

        license_path = os.path.join(root, license)
        if not os.path.isdir(license_path):
            continue

        fontnames = os.listdir(license_path)
        for fontname in fontnames:
            font_path = os.path.join(license_path, fontname)
            meta_path = os.path.join(font_path, "METADATA.json")
            if not os.path.exists(meta_path):
                continue
            yield font_path

def combine_variant(weight, style):
  return style[0]+str(weight)[0]

def write_json(fonts):
    jsonString = json.dumps(fonts, indent=2)

    with open('fonts.json', 'w') as f:
        # get rid of horrible whitespace at end of every line
        import re
        regex = re.compile('\ $', re.MULTILINE)
        f.write(regex.sub('', jsonString))

def write_html(fonts):
    html = """
    <style>
    html {
      padding: 0;
    }
    body {
      font-family: sans-serif;
      color: #333;
      background-color: #fff;
      padding: 50px;
    }

    .font {
      display: block;
    }

    .font + .font {
      margin-top: 20px;
    }

    a {
      color: #000;
    }

    .fontname {
      font-weight: bold;
    }

    .variantname,
    .featurename {
      display: inline-block;
    }

    .variantname + .variantname,
    .featurename + .featurename {
      margin-left: 4px;
    }

    </style>
    """
    html += '<div class="fonts">'
    for font in fonts:
      html += '<div class="font">'

      slug = font['name'].replace(' ', '+')
      href = 'https://www.google.com/fonts/specimen/'+slug

      html += '<a href="'+href+'" class="fontname" target="_blank">'+\
        font['name']+'</a>'

      html += '<div class="variants">'
      for variant in font['variants']:
        variantname = combine_variant(variant['weight'], variant['style'])
        html += '<div class="variantname">'+variantname+'</div>'
      html += '</div>'

      features = unique_features(font)

      html += '<div class="features">'
      for featurename in features:
        # ignore kerning because we use that as a minimum requirement, so they
        # all have it. We're interested in more interesting features only.
        if featurename == 'kern':
          continue

        # they split the features into multiple pages by letter range..
        # also: lol @ .htm files
        letter = str(featurename[0])
        if letter >= 'a' and letter <= 'e':
          href = 'http://www.microsoft.com/typography/otspec/features_ae.htm'
        elif letter >= 'f' and letter <= 'j':
          href = 'http://www.microsoft.com/typography/otspec/features_fj.htm'
        elif letter >= 'k' and letter <= 'o':
          href = 'http://www.microsoft.com/typography/otspec/features_ko.htm'
        elif letter >= 'p' and letter <= 't':
          href = 'http://www.microsoft.com/typography/otspec/features_pt.htm'
        elif letter >= 'u' and letter <= 'z':
          href = 'http://www.microsoft.com/typography/otspec/features_uz.htm'
        else:
          href = 'http://www.microsoft.com/typography/otspec/featurelist.htm'

        href = href + '#' + featurename

        html += '<a href="'+href+'" class="featurename" target="_blank">'+\
          featurename+'</a>'
      html += '</div>'

      html += '</div>'
    html += '</div>'

    with open('fonts.html', 'w') as f:
        f.write(html)

def unique_features(font):
  features = []
  for variant in font['variants']:
    for feature in variant['features']:
      if feature not in features:
        features.append(feature)
  return features

def import_fonts(root, whitelist=None):
    if not os.path.exists(FONTS_PATH):
        os.makedirs(FONTS_PATH)

    if whitelist:
      whitelist_set = set(whitelist)

    all_css = []
    found = set([])
    fonts = []
    for font_path in generate_font_paths(root):
        basename = os.path.basename(font_path)

        # read and parse the metadata json file
        meta_path = os.path.join(font_path, "METADATA.json")
        with open(meta_path) as f:
            json_string = f.read()
        info = json.loads(json_string)

        # only whitelisted fonts if that's set
        if whitelist and info['name'] not in whitelist_set:
            continue

        found.add(info['name'])

        #print info['name']

        font = dict(
            name=info['name'],
            category=info['category'],
            variants=[]
        )
        variants = info['fonts']
        variants.sort(key=operator.itemgetter('style'), reverse=True)
        variants.sort(key=operator.itemgetter('weight'))
        for variant in variants:
            ttf_path = os.path.join(font_path, variant['filename'])

            p = Popen(["otfinfo", "-f", ttf_path], stdout=PIPE)
            out, err = p.communicate()

            lines = out.splitlines()
            features = []
            for line in lines:
              features.append(line[:4])

            # we're interested in the filename without extension
            name, ext = os.path.splitext(variant['filename'])

            # just use the ttf file's size
            filesize = os.path.getsize(ttf_path)
            #print " ", name, '/', filesize

            font['variants'].append(dict(
                weight=variant['weight'],
                style=variant['style'],
                filesize=filesize,
                features=features
            ))

        # only include fonts with features
        # must have kerning and at least one other feature
        unique = unique_features(font)
        if len(unique) > 1 and 'kern' in unique:
          print font['name']+' '+str(unique)
          fonts.append(font)

    fonts.sort(key=operator.itemgetter('name'))

    write_json(fonts)
    #write_html(fonts)

def load_whitelist(whitelist_path):
    whitelist = []
    with open(whitelist_path) as f:
        lines = f.readlines()
    for line in lines:
        line = line.strip()
        if not line:
            continue
        if '#' in line:
            continue
        whitelist.append(line)
    return whitelist

if __name__ == "__main__":
    fonts_path = sys.argv[1]
    if len(sys.argv) == 3:
        whitelist_path = sys.argv[2]
        whitelist = load_whitelist(whitelist_path)
        import_fonts(fonts_path, whitelist)
    else:
        import_fonts(fonts_path)
