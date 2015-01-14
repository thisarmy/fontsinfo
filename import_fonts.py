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
        # if any of the woff files for the variants in this font doesn't exist,
        # then we just skip this font for now
        skipped = False

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

            # calculate the woff filename and path
            name, ext = os.path.splitext(variant['filename'])
            woff_filename = name+'.woff'
            woff_path = os.path.join(font_path, woff_filename)

            # skip if the woff file doesn't exist (for now)
            if not os.path.exists(woff_path):
              print "skipping due to missing WOFF files:", info['name']
              skipped = True
              break

            # gather the supported opentype features
            p = Popen(["otfinfo", "-f", ttf_path], stdout=PIPE)
            out, err = p.communicate()
            lines = out.splitlines()
            features = []
            for line in lines:
              features.append(line[:4])

            # use the woff file's size as that's what most people would be
            # downloading nowadays
            filesize = os.path.getsize(woff_path)
            #print " ", name, '/', filesize

            font['variants'].append(dict(
                filename=woff_filename,
                weight=variant['weight'],
                style=variant['style'],
                filesize=filesize,
                features=features
            ))

            # copy the woff file in place so we can serve it up for the demo
            shutil.copyfile(woff_path, "woffs/"+woff_filename)

        if skipped:
          continue

        # only include fonts with features
        # must have kerning and at least one other feature
        # (or if no kerning, then at least one feature. silly opensans)
        unique = unique_features(font)
        #if len(unique) > 1 and 'kern' in unique:
        if 'kern' in unique:
          if len(unique) > 1:
            #print font['name']+' '+str(unique)
            fonts.append(font)
        elif len(unique) > 0:
          #print font['name']+' '+str(unique)
          fonts.append(font)

    fonts.sort(key=operator.itemgetter('name'))

    write_json(fonts)

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
