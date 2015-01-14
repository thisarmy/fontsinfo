$ = require 'jquery'
_ = require 'underscore'

require '../css/style.less'

fonts = require '../fonts.json'
features = require '../features.json'

gatherFontFeatures = (font) ->
  counts = {}

  for variant in font.variants
    for feature in variant.features
      feature = feature.toLowerCase()
      continue if feature == 'kern'
      continue if feature == 'liga'
      continue unless features[feature]
      counts[feature] ?= 0
      counts[feature] += 1

  counts

combineVariant = (weight, style) ->
  w = (weight+'')[0]
  s = style[0]
  "#{s}#{w}"

gatherCheckedFeatures = ->
  checkedFeatures = []
  $checked = $('.feature input[type=checkbox]:checked')
  $checked.each ->
    checkedFeatures.push $(this).attr('name')
  checkedFeatures

gatherVariantFeatures = (variant) ->
  variantFeatures = []
  for feature in variant.features
    feature = feature.toLowerCase()
    continue if feature == 'kern'
    continue if feature == 'liga'
    continue unless features[feature]
    variantFeatures.push feature
  variantFeatures

getFeatureLink = (feature) ->
  letter = feature[0]
  if letter >= 'a' and letter <= 'e'
    href = 'http://www.microsoft.com/typography/otspec/features_ae.htm'
  else if letter >= 'f' and letter <= 'j'
    href = 'http://www.microsoft.com/typography/otspec/features_fj.htm'
  else if letter >= 'k' and letter <= 'o'
    href = 'http://www.microsoft.com/typography/otspec/features_ko.htm'
  else if letter >= 'p' and letter <= 't'
    href = 'http://www.microsoft.com/typography/otspec/features_pt.htm'
  else if letter >= 'u' and letter <= 'z'
    href = 'http://www.microsoft.com/typography/otspec/features_uz.htm'
  else
    href = 'http://www.microsoft.com/typography/otspec/featurelist.htm'

  href = "#{href}##{feature}"

  href

loaded = (font, variant) ->
  previousFeatures = gatherCheckedFeatures()
  variantFeatures = gatherVariantFeatures(variant)

  $features = $ '.feature-selector .features'
  $features.html ''

  for feature in variantFeatures
    $feature = $ '<label class="feature"></label>'

    $checkbox = $ '<input type="checkbox">'
    $checkbox.attr 'name', feature
    $checkbox.attr('checked', 'checked') if feature in previousFeatures
    $feature.append $checkbox

    $feature.append ' '

    $text = $ '<span class="text"></span>'
    $text.text features[feature]
    $feature.append $text

    $features.append $feature

  $('.preview').css
    'font-family': font.name
    'font-weight': variant.weight
    'font-style': variant.style

  $('.font-name').text font.name
  $('.font-weight').text variant.weight
  $('.font-style').text variant.style

  syncFeatures()

loadVariant = (fontname, weight, style, skip) ->
  font = _.find fonts, (f) ->
    f.name == fontname
  variant = _.find font.variants, (v) ->
    v.weight == weight and v.style == style

  # only add it once
  slug = fontname.toLowerCase().replace /\ /g, '-'
  id = "#{slug}-#{weight}-#{style}"
  if $("##{id}").length
    # continue as usual
    loaded(font, variant) unless skip
    return

  # add the necessary css to load the font
  url = "woffs/"+variant.filename
  css = """
  @font-face {
    font-family: '#{fontname}';
    font-style: #{style};
    font-weight: #{weight};
    src: url(#{url}) format('woff2');
  }
  """
  $style = $ '<style></style>'
  $style.attr 'id', id
  $style.html css
  $('head').append $style

  loaded(font, variant) unless skip

syncFeatures = ->
  selectedFeatures = gatherCheckedFeatures()
  quoted = _.map selectedFeatures, (feature) -> '"'+feature+'" 1'
  settings = quoted.join ', '

  $('.preview').css
    '-ms-font-feature-settings': settings
    '-webkit-font-feature-settings': settings
    '-moz-font-feature-settings': settings
    'font-feature-settings': settings

start = ->
  # start loading the fonts the interface will use and the default one too, but
  # don't setrigger the interface "load event" yet.
  loadVariant 'Source Sans Pro', 200, 'normal', true
  loadVariant 'Source Sans Pro', 400, 'normal', true
  loadVariant 'Source Sans Pro', 400, 'italic', true
  loadVariant 'Source Sans Pro', 700, 'normal', true

  $fonts = $ '.fonts'
  for font in fonts
    $font = $ '<div class="font"></div>'
    slug = font.name.replace /\ /g, '+'
    href = 'https://www.google.com/fonts/specimen/'+slug
    $fontname = $ '<a class="fontname" target="_blank"></a>'
    $fontname.attr 'id', font.name.toLowerCase().replace /\ /g, '-'
    $fontname.attr 'href', href
    $fontname.text font.name
    $font.append $fontname

    $features = $ '<div class="features"></div>'
    for feature, count of gatherFontFeatures(font)
      $featurename = $ '<a class="featurename" target="_blank"></a>'
      if count == font.variants.length
        $featurename.addClass 'complete'
      else
        $featurename.addClass 'partial'
      $featurename.attr 'href', getFeatureLink(feature)
      $featurename.text feature
      $features.append $featurename
      $features.append ' '
    $font.append $features

    $variants = $ '<div class="variants"></div>'
    for variant in font.variants
      $variantname = $ '<button class="variantname"></button>'
      combined = combineVariant(variant.weight, variant.style)
      $variantname.attr 'data-font', font.name
      $variantname.attr 'data-weight', variant.weight
      $variantname.attr 'data-style', variant.style
      $variantname.text combined
      $variants.append $variantname
      $variants.append ' '
    $font.append $variants

    $fonts.append $font

  $fonts.on 'click', '.variantname', ->
    $el = $(this)
    fontname = $el.data('font')
    weight = $el.data('weight')
    style = $el.data('style')

    loadVariant fontname, weight, style

  $('.features').on 'click', 'input[type=checkbox]', ->
    syncFeatures()

  # set the default
  loadVariant "Source Sans Pro", 200, "normal"

  # try and give the font a moment to load before trying to scroll to the
  # selected one
  _.delay ->
    el = $('#source-sans-pro').get(0)
    el.scrollIntoView()
  , 1000

$(document).ready start
