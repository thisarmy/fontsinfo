webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $, combineVariant, features, fonts, gatherCheckedFeatures, gatherFontFeatures, gatherVariantFeatures, getFeatureLink, loadVariant, loaded, start, syncFeatures, _,
	  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

	$ = __webpack_require__(1);

	_ = __webpack_require__(2);

	__webpack_require__(5);

	fonts = __webpack_require__(3);

	features = __webpack_require__(4);

	gatherFontFeatures = function(font) {
	  var counts, feature, variant, _i, _j, _len, _len1, _ref, _ref1;
	  counts = {};
	  _ref = font.variants;
	  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	    variant = _ref[_i];
	    _ref1 = variant.features;
	    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	      feature = _ref1[_j];
	      feature = feature.toLowerCase();
	      if (feature === 'kern') {
	        continue;
	      }
	      if (feature === 'liga') {
	        continue;
	      }
	      if (!features[feature]) {
	        continue;
	      }
	      if (counts[feature] == null) {
	        counts[feature] = 0;
	      }
	      counts[feature] += 1;
	    }
	  }
	  return counts;
	};

	combineVariant = function(weight, style) {
	  var s, w;
	  w = (weight + '')[0];
	  s = style[0];
	  return "" + s + w;
	};

	gatherCheckedFeatures = function() {
	  var $checked, checkedFeatures;
	  checkedFeatures = [];
	  $checked = $('.feature input[type=checkbox]:checked');
	  $checked.each(function() {
	    return checkedFeatures.push($(this).attr('name'));
	  });
	  return checkedFeatures;
	};

	gatherVariantFeatures = function(variant) {
	  var feature, variantFeatures, _i, _len, _ref;
	  variantFeatures = [];
	  _ref = variant.features;
	  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	    feature = _ref[_i];
	    feature = feature.toLowerCase();
	    if (feature === 'kern') {
	      continue;
	    }
	    if (feature === 'liga') {
	      continue;
	    }
	    if (!features[feature]) {
	      continue;
	    }
	    variantFeatures.push(feature);
	  }
	  return variantFeatures;
	};

	getFeatureLink = function(feature) {
	  var href, letter;
	  letter = feature[0];
	  if (letter >= 'a' && letter <= 'e') {
	    href = 'http://www.microsoft.com/typography/otspec/features_ae.htm';
	  } else if (letter >= 'f' && letter <= 'j') {
	    href = 'http://www.microsoft.com/typography/otspec/features_fj.htm';
	  } else if (letter >= 'k' && letter <= 'o') {
	    href = 'http://www.microsoft.com/typography/otspec/features_ko.htm';
	  } else if (letter >= 'p' && letter <= 't') {
	    href = 'http://www.microsoft.com/typography/otspec/features_pt.htm';
	  } else if (letter >= 'u' && letter <= 'z') {
	    href = 'http://www.microsoft.com/typography/otspec/features_uz.htm';
	  } else {
	    href = 'http://www.microsoft.com/typography/otspec/featurelist.htm';
	  }
	  href = "" + href + "#" + feature;
	  return href;
	};

	loaded = function(font, variant) {
	  var $checkbox, $feature, $features, $text, feature, previousFeatures, variantFeatures, _i, _len;
	  previousFeatures = gatherCheckedFeatures();
	  variantFeatures = gatherVariantFeatures(variant);
	  $features = $('.feature-selector .features');
	  $features.html('');
	  for (_i = 0, _len = variantFeatures.length; _i < _len; _i++) {
	    feature = variantFeatures[_i];
	    $feature = $('<label class="feature"></label>');
	    $checkbox = $('<input type="checkbox">');
	    $checkbox.attr('name', feature);
	    if (__indexOf.call(previousFeatures, feature) >= 0) {
	      $checkbox.attr('checked', 'checked');
	    }
	    $feature.append($checkbox);
	    $feature.append(' ');
	    $text = $('<span class="text"></span>');
	    $text.text(features[feature]);
	    $feature.append($text);
	    $features.append($feature);
	  }
	  $('.preview').css({
	    'font-family': font.name,
	    'font-weight': variant.weight,
	    'font-style': variant.style
	  });
	  $('.font-name').text(font.name);
	  $('.font-weight').text(variant.weight);
	  $('.font-style').text(variant.style);
	  return syncFeatures();
	};

	loadVariant = function(fontname, weight, style, skip) {
	  var $style, css, font, id, slug, url, variant;
	  font = _.find(fonts, function(f) {
	    return f.name === fontname;
	  });
	  variant = _.find(font.variants, function(v) {
	    return v.weight === weight && v.style === style;
	  });
	  slug = fontname.toLowerCase().replace(/\ /g, '-');
	  id = "" + slug + "-" + weight + "-" + style;
	  if ($("#" + id).length) {
	    if (!skip) {
	      loaded(font, variant);
	    }
	    return;
	  }
	  url = "woffs/" + variant.filename;
	  css = "@font-face {\n  font-family: '" + fontname + "';\n  font-style: " + style + ";\n  font-weight: " + weight + ";\n  src: url(" + url + ") format('woff2');\n}";
	  $style = $('<style></style>');
	  $style.attr('id', id);
	  $style.html(css);
	  $('head').append($style);
	  if (!skip) {
	    return loaded(font, variant);
	  }
	};

	syncFeatures = function() {
	  var quoted, selectedFeatures, settings;
	  selectedFeatures = gatherCheckedFeatures();
	  quoted = _.map(selectedFeatures, function(feature) {
	    return '"' + feature + '" 1';
	  });
	  settings = quoted.join(', ');
	  return $('.preview').css({
	    '-ms-font-feature-settings': settings,
	    '-webkit-font-feature-settings': settings,
	    '-moz-font-feature-settings': settings,
	    'font-feature-settings': settings
	  });
	};

	start = function() {
	  var $featurename, $features, $font, $fontname, $fonts, $variantname, $variants, combined, count, feature, font, href, slug, variant, _i, _j, _len, _len1, _ref, _ref1;
	  loadVariant('Source Sans Pro', 200, 'normal', true);
	  loadVariant('Source Sans Pro', 400, 'normal', true);
	  loadVariant('Source Sans Pro', 400, 'italic', true);
	  loadVariant('Source Sans Pro', 700, 'normal', true);
	  $fonts = $('.fonts');
	  for (_i = 0, _len = fonts.length; _i < _len; _i++) {
	    font = fonts[_i];
	    $font = $('<div class="font"></div>');
	    slug = font.name.replace(/\ /g, '+');
	    href = 'https://www.google.com/fonts/specimen/' + slug;
	    $fontname = $('<a class="fontname" target="_blank"></a>');
	    $fontname.attr('id', font.name.toLowerCase().replace(/\ /g, '-'));
	    $fontname.attr('href', href);
	    $fontname.text(font.name);
	    $font.append($fontname);
	    $features = $('<div class="features"></div>');
	    _ref = gatherFontFeatures(font);
	    for (feature in _ref) {
	      count = _ref[feature];
	      $featurename = $('<a class="featurename" target="_blank"></a>');
	      if (count === font.variants.length) {
	        $featurename.addClass('complete');
	      } else {
	        $featurename.addClass('partial');
	      }
	      $featurename.attr('href', getFeatureLink(feature));
	      $featurename.text(feature);
	      $features.append($featurename);
	      $features.append(' ');
	    }
	    $font.append($features);
	    $variants = $('<div class="variants"></div>');
	    _ref1 = font.variants;
	    for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
	      variant = _ref1[_j];
	      $variantname = $('<button class="variantname"></button>');
	      combined = combineVariant(variant.weight, variant.style);
	      $variantname.attr('data-font', font.name);
	      $variantname.attr('data-weight', variant.weight);
	      $variantname.attr('data-style', variant.style);
	      $variantname.text(combined);
	      $variants.append($variantname);
	      $variants.append(' ');
	    }
	    $font.append($variants);
	    $fonts.append($font);
	  }
	  $fonts.on('click', '.variantname', function() {
	    var $el, fontname, style, weight;
	    $el = $(this);
	    fontname = $el.data('font');
	    weight = $el.data('weight');
	    style = $el.data('style');
	    return loadVariant(fontname, weight, style);
	  });
	  $('.features').on('click', 'input[type=checkbox]', function() {
	    return syncFeatures();
	  });
	  loadVariant("Source Sans Pro", 200, "normal");
	  return _.delay(function() {
	    var el;
	    el = $('#source-sans-pro').get(0);
	    return el.scrollIntoView();
	  }, 1000);
	};

	$(document).ready(start);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 29204,
					"style": "normal",
					"features": [
						"calt",
						"case",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "AbrilFatface-Regular.woff"
				}
			],
			"name": "Abril Fatface"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 36808,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Aclonica.woff"
				}
			],
			"name": "Aclonica"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 92328,
					"style": "normal",
					"features": [
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Alegreya-Regular.woff"
				},
				{
					"filesize": 91656,
					"style": "italic",
					"features": [
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Alegreya-Italic.woff"
				},
				{
					"filesize": 80728,
					"style": "normal",
					"features": [
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "Alegreya-Bold.woff"
				},
				{
					"filesize": 79236,
					"style": "italic",
					"features": [
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "Alegreya-BoldItalic.woff"
				},
				{
					"filesize": 78696,
					"style": "normal",
					"features": [
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filename": "Alegreya-Black.woff"
				},
				{
					"filesize": 79868,
					"style": "italic",
					"features": [
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filename": "Alegreya-BlackItalic.woff"
				}
			],
			"name": "Alegreya"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 34152,
					"style": "normal",
					"features": [
						"kern",
						"titl"
					],
					"weight": 400,
					"filename": "Allan-Regular.woff"
				},
				{
					"filesize": 59524,
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "Allan-Bold.woff"
				}
			],
			"name": "Allan"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 235292,
					"style": "normal",
					"features": [
						"calt",
						"fina",
						"init",
						"kern",
						"liga",
						"mark",
						"medi",
						"rlig",
						"rtlm",
						"ss01",
						"ss02"
					],
					"weight": 400,
					"filename": "Amiri-Regular.woff"
				},
				{
					"filesize": 246760,
					"style": "italic",
					"features": [
						"calt",
						"fina",
						"init",
						"kern",
						"liga",
						"locl",
						"mark",
						"medi",
						"rlig",
						"rtlm",
						"ss01",
						"ss02"
					],
					"weight": 400,
					"filename": "Amiri-Slanted.woff"
				},
				{
					"filesize": 230288,
					"style": "normal",
					"features": [
						"calt",
						"fina",
						"init",
						"kern",
						"liga",
						"mark",
						"medi",
						"rlig",
						"rtlm",
						"ss01",
						"ss02"
					],
					"weight": 700,
					"filename": "Amiri-Bold.woff"
				},
				{
					"filesize": 241768,
					"style": "italic",
					"features": [
						"calt",
						"fina",
						"init",
						"kern",
						"liga",
						"locl",
						"mark",
						"medi",
						"rlig",
						"rtlm",
						"ss01",
						"ss02"
					],
					"weight": 700,
					"filename": "Amiri-BoldSlanted.woff"
				}
			],
			"name": "Amiri"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 32932,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Andada-Regular.woff"
				},
				{
					"filesize": 34784,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Andada-Italic.woff"
				},
				{
					"filesize": 48952,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "Andada-Bold.woff"
				},
				{
					"filesize": 34832,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "Andada-BoldItalic.woff"
				}
			],
			"name": "Andada"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 520648,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"ccmp",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"smcp"
					],
					"weight": 400,
					"filename": "Andika-R.woff"
				}
			],
			"name": "Andika"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 15048,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Arapey-Regular.woff"
				},
				{
					"filesize": 16660,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Arapey-Italic.woff"
				}
			],
			"name": "Arapey"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 234900,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Arimo-Regular.woff"
				},
				{
					"filesize": 241168,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Arimo-Italic.woff"
				},
				{
					"filesize": 235244,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "Arimo-Bold.woff"
				},
				{
					"filesize": 238176,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "Arimo-BoldItalic.woff"
				}
			],
			"name": "Arimo"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 27116,
					"style": "normal",
					"features": [
						"kern",
						"ss01"
					],
					"weight": 400,
					"filename": "Arvo-Regular.woff"
				},
				{
					"filesize": 28124,
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filename": "Arvo-Italic.woff"
				},
				{
					"filesize": 25248,
					"style": "normal",
					"features": [
						"kern",
						"ss01"
					],
					"weight": 700,
					"filename": "Arvo-Bold.woff"
				},
				{
					"filesize": 27844,
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "Arvo-BoldItalic.woff"
				}
			],
			"name": "Arvo"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 32372,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Audiowide-Regular.woff"
				}
			],
			"name": "Audiowide"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 19172,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Average-Regular.woff"
				}
			],
			"name": "Average"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 19820,
					"style": "normal",
					"features": [
						"calt"
					],
					"weight": 400,
					"filename": "Basic-Regular.woff"
				}
			],
			"name": "Basic"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 29108,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "BerkshireSwash-Regular.woff"
				}
			],
			"name": "Berkshire Swash"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 33440,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "BigelowRules-Regular.woff"
				}
			],
			"name": "Bigelow Rules"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 23592,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "BrunoAce-Regular.woff"
				}
			],
			"name": "Bruno Ace"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 23404,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "BrunoAceSC-Regular.woff"
				}
			],
			"name": "Bruno Ace SC"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 83508,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 400,
					"filename": "Cabin-Regular.woff"
				},
				{
					"filesize": 85824,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 400,
					"filename": "Cabin-Italic.woff"
				},
				{
					"filesize": 78232,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 500,
					"filename": "Cabin-Medium.woff"
				},
				{
					"filesize": 83400,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 500,
					"filename": "Cabin-MediumItalic.woff"
				},
				{
					"filesize": 76528,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 600,
					"filename": "Cabin-SemiBold.woff"
				},
				{
					"filesize": 82116,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 600,
					"filename": "Cabin-SemiBoldItalic.woff"
				},
				{
					"filesize": 75784,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 700,
					"filename": "Cabin-Bold.woff"
				},
				{
					"filesize": 80128,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 700,
					"filename": "Cabin-BoldItalic.woff"
				}
			],
			"name": "Cabin"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 75840,
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 400,
					"filename": "CabinCondensed-Regular.woff"
				},
				{
					"filesize": 73848,
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 500,
					"filename": "CabinCondensed-Medium.woff"
				},
				{
					"filesize": 74820,
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 600,
					"filename": "CabinCondensed-SemiBold.woff"
				},
				{
					"filesize": 73820,
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 700,
					"filename": "CabinCondensed-Bold.woff"
				}
			],
			"name": "Cabin Condensed"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 63484,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"ss01",
						"ss02",
						"sups"
					],
					"weight": 400,
					"filename": "CantoraOne-Regular.woff"
				}
			],
			"name": "Cantora One"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 223676,
					"style": "normal",
					"features": [
						"ccmp",
						"dlig",
						"hist",
						"hlig",
						"liga",
						"mark",
						"onum",
						"pnum",
						"salt",
						"smcp",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"ss06",
						"ss07",
						"ss08",
						"ss09",
						"ss10",
						"ss11",
						"ss12",
						"ss13",
						"ss15",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "Cardo-Regular.woff"
				},
				{
					"filesize": 152440,
					"style": "italic",
					"features": [
						"dlig",
						"hist",
						"hlig",
						"kern",
						"liga",
						"onum",
						"pnum"
					],
					"weight": 400,
					"filename": "Cardo-Italic.woff"
				},
				{
					"filesize": 191564,
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "Cardo-Bold.woff"
				}
			],
			"name": "Cardo"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 21564,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Changa-Regular.woff"
				}
			],
			"name": "Changa"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 13728,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "ChangaOne-Regular.woff"
				},
				{
					"filesize": 15208,
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filename": "ChangaOne-Italic.woff"
				}
			],
			"name": "Changa One"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 20640,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"onum",
						"smcp"
					],
					"weight": 400,
					"filename": "ChauPhilomeneOne-Regular.woff"
				},
				{
					"filesize": 22140,
					"style": "italic",
					"features": [
						"kern",
						"liga",
						"onum",
						"smcp"
					],
					"weight": 400,
					"filename": "ChauPhilomeneOne-Italic.woff"
				}
			],
			"name": "Chau Philomene One"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 78580,
					"style": "normal",
					"features": [
						"SS01",
						"SS02",
						"aalt",
						"c2sc",
						"calt",
						"dlig",
						"dnom",
						"fina",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"ornm",
						"salt",
						"sinf",
						"smcp",
						"subs",
						"sups",
						"titl"
					],
					"weight": 400,
					"filename": "Clara-Regular.woff"
				}
			],
			"name": "Clara"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 34932,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "ClickerScript-Regular.woff"
				}
			],
			"name": "Clicker Script"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 21728,
					"style": "normal",
					"features": [
						"fina",
						"init",
						"liga"
					],
					"weight": 400,
					"filename": "Cookie-Regular.woff"
				}
			],
			"name": "Cookie"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 23904,
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Corben-Regular.woff"
				},
				{
					"filesize": 69684,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"onum",
						"smcp"
					],
					"weight": 700,
					"filename": "Corben-Bold.woff"
				}
			],
			"name": "Corben"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 59336,
					"style": "normal",
					"features": [
						"fina",
						"init",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "DancingScript-Regular.woff"
				},
				{
					"filesize": 60156,
					"style": "normal",
					"features": [
						"fina",
						"init",
						"kern",
						"liga",
						"salt"
					],
					"weight": 700,
					"filename": "DancingScript-Bold.woff"
				}
			],
			"name": "Dancing Script"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 30732,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Devonshire-Regular.woff"
				}
			],
			"name": "Devonshire"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 53228,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 400,
					"filename": "Domine-Regular.woff"
				},
				{
					"filesize": 56436,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 700,
					"filename": "Domine-Bold.woff"
				}
			],
			"name": "Domine"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 34976,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "DonegalOne-Regular.woff"
				}
			],
			"name": "Donegal One"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 31692,
					"style": "normal",
					"features": [
						"calt",
						"liga",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "DoppioOne-Regular.woff"
				}
			],
			"name": "Doppio One"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 62752,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 200,
					"filename": "Dosis-ExtraLight.woff"
				},
				{
					"filesize": 64220,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 300,
					"filename": "Dosis-Light.woff"
				},
				{
					"filesize": 64780,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 400,
					"filename": "Dosis-Regular.woff"
				},
				{
					"filesize": 64660,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 500,
					"filename": "Dosis-Medium.woff"
				},
				{
					"filesize": 64568,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 600,
					"filename": "Dosis-SemiBold.woff"
				},
				{
					"filesize": 65536,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 700,
					"filename": "Dosis-Bold.woff"
				},
				{
					"filesize": 65484,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 800,
					"filename": "Dosis-ExtraBold.woff"
				}
			],
			"name": "Dosis"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 90132,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark"
					],
					"weight": 400,
					"filename": "DroidSansEthiopic-Regular.woff"
				},
				{
					"filesize": 86504,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark"
					],
					"weight": 700,
					"filename": "DroidSansEthiopic-Bold.woff"
				}
			],
			"name": "Droid Sans Ethiopic"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 28236,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Dynalight-Regular.woff"
				}
			],
			"name": "Dynalight"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 45564,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "EagleLake-Regular.woff"
				}
			],
			"name": "Eagle Lake"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 19912,
					"style": "normal",
					"features": [
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "Elsie-Regular.woff"
				},
				{
					"filesize": 22512,
					"style": "normal",
					"features": [
						"aalt",
						"liga",
						"salt"
					],
					"weight": 900,
					"filename": "Elsie-Black.woff"
				}
			],
			"name": "Elsie"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 39200,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Engagement-Regular.woff"
				}
			],
			"name": "Engagement"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 30848,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Englebert-Regular.woff"
				}
			],
			"name": "Englebert"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 42080,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 100,
					"filename": "Exo-Thin.woff"
				},
				{
					"filesize": 47664,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 100,
					"filename": "Exo-ThinItalic.woff"
				},
				{
					"filesize": 43044,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 200,
					"filename": "Exo-ExtraLight.woff"
				},
				{
					"filesize": 52316,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 200,
					"filename": "Exo-ExtraLightItalic.woff"
				},
				{
					"filesize": 47188,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 300,
					"filename": "Exo-Light.woff"
				},
				{
					"filesize": 52532,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 300,
					"filename": "Exo-LightItalic.woff"
				},
				{
					"filesize": 42776,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filename": "Exo-Regular.woff"
				},
				{
					"filesize": 47384,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filename": "Exo-Italic.woff"
				},
				{
					"filesize": 47668,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 500,
					"filename": "Exo-Medium.woff"
				},
				{
					"filesize": 53144,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 500,
					"filename": "Exo-MediumItalic.woff"
				},
				{
					"filesize": 46564,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 600,
					"filename": "Exo-SemiBold.woff"
				},
				{
					"filesize": 52676,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 600,
					"filename": "Exo-SemiBoldItalic.woff"
				},
				{
					"filesize": 47052,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 700,
					"filename": "Exo-Bold.woff"
				},
				{
					"filesize": 52436,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 700,
					"filename": "Exo-BoldItalic.woff"
				},
				{
					"filesize": 45528,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 800,
					"filename": "Exo-ExtraBold.woff"
				},
				{
					"filesize": 51080,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 800,
					"filename": "Exo-ExtraBoldItalic.woff"
				},
				{
					"filesize": 41292,
					"style": "normal",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 900,
					"filename": "Exo-Black.woff"
				},
				{
					"filesize": 45756,
					"style": "italic",
					"features": [
						"\t<un",
						"c2sc",
						"case",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 900,
					"filename": "Exo-BlackItalic.woff"
				}
			],
			"name": "Exo"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 63888,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"pnum",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "FanwoodText-Regular.woff"
				},
				{
					"filesize": 51880,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"pnum",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "FanwoodText-Italic.woff"
				}
			],
			"name": "Fanwood Text"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 25784,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"salt",
						"sups"
					],
					"weight": 400,
					"filename": "Fascinate-Regular.woff"
				}
			],
			"name": "Fascinate"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 29856,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"salt",
						"sups"
					],
					"weight": 400,
					"filename": "FascinateInline-Regular.woff"
				}
			],
			"name": "Fascinate Inline"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 20596,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "FasterOne-Regular.woff"
				}
			],
			"name": "Faster One"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 23252,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "FjallaOne-Regular.woff"
				}
			],
			"name": "Fjalla One"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 43948,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Fondamento-Regular.woff"
				},
				{
					"filesize": 39840,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Fondamento-Italic.woff"
				}
			],
			"name": "Fondamento"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 66896,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "FreckleFace-Regular.woff"
				}
			],
			"name": "Freckle Face"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 21836,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "FredokaOne-Regular.woff"
				}
			],
			"name": "Fredoka One"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 41692,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Fruktur-Regular.woff"
				}
			],
			"name": "Fruktur"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 79072,
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"fina",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"sinf",
						"smcp",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "GFSDidot-Regular.woff"
				}
			],
			"name": "GFS Didot"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 151240,
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"fina",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "GFSNeohellenic.woff"
				},
				{
					"filesize": 116988,
					"style": "italic",
					"features": [
						"fina",
						"hist",
						"kern",
						"liga",
						"salt",
						"sinf",
						"sups"
					],
					"weight": 400,
					"filename": "GFSNeohellenicItalic.woff"
				},
				{
					"filesize": 108196,
					"style": "normal",
					"features": [
						"fina",
						"hist",
						"liga",
						"salt",
						"sinf",
						"sups"
					],
					"weight": 700,
					"filename": "GFSNeohellenicBold.woff"
				},
				{
					"filesize": 113960,
					"style": "italic",
					"features": [
						"fina",
						"hist",
						"kern",
						"liga",
						"salt",
						"sinf",
						"sups"
					],
					"weight": 700,
					"filename": "GFSNeohellenicBoldItalic.woff"
				}
			],
			"name": "GFS Neohellenic"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 24712,
					"style": "normal",
					"features": [
						"calt",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 400,
					"filename": "Gabriela-Regular.woff"
				}
			],
			"name": "Gabriela"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 24796,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"ss01"
					],
					"weight": 400,
					"filename": "Gafata-Regular.woff"
				}
			],
			"name": "Gafata"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 33712,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Galindo-Regular.woff"
				}
			],
			"name": "Galindo"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 101956,
					"style": "normal",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "GenBasR.woff"
				},
				{
					"filesize": 106052,
					"style": "italic",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "GenBasI.woff"
				},
				{
					"filesize": 106952,
					"style": "normal",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "GenBasB.woff"
				},
				{
					"filesize": 103432,
					"style": "italic",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "GenBasBI.woff"
				}
			],
			"name": "Gentium Basic"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 105856,
					"style": "normal",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "GenBkBasR.woff"
				},
				{
					"filesize": 109036,
					"style": "italic",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "GenBkBasI.woff"
				},
				{
					"filesize": 106584,
					"style": "normal",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "GenBkBasB.woff"
				},
				{
					"filesize": 102212,
					"style": "italic",
					"features": [
						"aalt",
						"ccmp",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "GenBkBasBI.woff"
				}
			],
			"name": "Gentium Book Basic"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 42284,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"ss01"
					],
					"weight": 400,
					"filename": "GoudyBookletter1911.woff"
				}
			],
			"name": "Goudy Bookletter 1911"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 30484,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "GrandHotel-Regular.woff"
				}
			],
			"name": "Grand Hotel"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 22272,
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga",
						"onum",
						"ornm",
						"smcp",
						"ss01"
					],
					"weight": 400,
					"filename": "Habibi-Regular.woff"
				}
			],
			"name": "Habibi"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 88452,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Hanalei-Regular.woff"
				}
			],
			"name": "Hanalei"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 38036,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "HanaleiFill-Regular.woff"
				}
			],
			"name": "Hanalei Fill"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 58792,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "HennyPenny-Regular.woff"
				}
			],
			"name": "Henny Penny"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 123344,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFePIrm28P.woff"
				},
				{
					"filesize": 137272,
					"style": "italic",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"swsh"
					],
					"weight": 400,
					"filename": "IMFePIit28P.woff"
				}
			],
			"name": "IM Fell DW Pica"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 111352,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"salt",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFePIsc28P.woff"
				}
			],
			"name": "IM Fell DW Pica SC"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 119924,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeDPrm28P.woff"
				},
				{
					"filesize": 142336,
					"style": "italic",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"swsh"
					],
					"weight": 400,
					"filename": "IMFeDPit28P.woff"
				}
			],
			"name": "IM Fell Double Pica"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 110008,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"salt",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeDPsc28P.woff"
				}
			],
			"name": "IM Fell Double Pica SC"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 117232,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeENrm28P.woff"
				},
				{
					"filesize": 121040,
					"style": "italic",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"swsh"
					],
					"weight": 400,
					"filename": "IMFeENit28P.woff"
				}
			],
			"name": "IM Fell English"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 109120,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"salt",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeENsc28P.woff"
				}
			],
			"name": "IM Fell English SC"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 84480,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeFCrm28P.woff"
				},
				{
					"filesize": 94524,
					"style": "italic",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"swsh"
					],
					"weight": 400,
					"filename": "IMFeFCit28P.woff"
				}
			],
			"name": "IM Fell French Canon"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 77684,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"salt",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeFCsc28P.woff"
				}
			],
			"name": "IM Fell French Canon SC"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 123052,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeGPrm28P.woff"
				},
				{
					"filesize": 140432,
					"style": "italic",
					"features": [
						"aalt",
						"dlig",
						"hist",
						"liga",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"swsh"
					],
					"weight": 400,
					"filename": "IMFeGPit28P.woff"
				}
			],
			"name": "IM Fell Great Primer"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 114452,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"salt",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "IMFeGPsc28P.woff"
				}
			],
			"name": "IM Fell Great Primer SC"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 140544,
					"style": "normal",
					"features": [
						"c2sc",
						"case",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"onum",
						"smcp",
						"tnum"
					],
					"weight": 500,
					"filename": "IstokWeb-Regular.woff"
				},
				{
					"filesize": 93952,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"onum",
						"ss01",
						"tnum"
					],
					"weight": 500,
					"filename": "IstokWeb-BoldItalic.woff"
				},
				{
					"filesize": 93928,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"onum",
						"ss01",
						"tnum"
					],
					"weight": 500,
					"filename": "IstokWeb-Italic.woff"
				},
				{
					"filesize": 97204,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"onum",
						"tnum"
					],
					"weight": 700,
					"filename": "IstokWeb-Bold.woff"
				}
			],
			"name": "Istok Web"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 82524,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "JimNightshade-Regular.woff"
				}
			],
			"name": "Jim Nightshade"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 99764,
					"style": "normal",
					"features": [
						"abvm",
						"blwm",
						"dlig",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Judson-Regular.woff"
				},
				{
					"filesize": 97016,
					"style": "italic",
					"features": [
						"abvm",
						"blwm",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Judson-Italic.woff"
				},
				{
					"filesize": 86624,
					"style": "normal",
					"features": [
						"abvm",
						"blwm",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "Judson-Bold.woff"
				}
			],
			"name": "Judson"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 92336,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "JustAnotherHand.woff"
				}
			],
			"name": "Just Another Hand"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 10312,
					"style": "normal",
					"features": [
						"kern",
						"onum"
					],
					"weight": 400,
					"filename": "Karla-Regular.woff"
				},
				{
					"filesize": 11096,
					"style": "italic",
					"features": [
						"kern",
						"onum"
					],
					"weight": 400,
					"filename": "Karla-Italic.woff"
				},
				{
					"filesize": 10832,
					"style": "normal",
					"features": [
						"kern",
						"onum"
					],
					"weight": 700,
					"filename": "Karla-Bold.woff"
				},
				{
					"filesize": 11972,
					"style": "italic",
					"features": [
						"kern",
						"onum"
					],
					"weight": 700,
					"filename": "Karla-BoldItalic.woff"
				}
			],
			"name": "Karla"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 77736,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"salt",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "KaushanScript-Regular.woff"
				}
			],
			"name": "Kaushan Script"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 35248,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Kavoon-Regular.woff"
				}
			],
			"name": "Kavoon"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 32788,
					"style": "normal",
					"features": [
						"calt"
					],
					"weight": 400,
					"filename": "Kristi.woff"
				}
			],
			"name": "Kristi"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 31432,
					"style": "normal",
					"features": [
						"kern",
						"titl"
					],
					"weight": 400,
					"filename": "Lancelot-Regular.woff"
				}
			],
			"name": "Lancelot"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 107668,
					"style": "normal",
					"features": [
						"ccmp"
					],
					"weight": 400,
					"filename": "LateefRegOT.woff"
				}
			],
			"name": "Lateef"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 48288,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 100,
					"filename": "Lato-Hairline.woff"
				},
				{
					"filesize": 40180,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 100,
					"filename": "Lato-HairlineItalic.woff"
				},
				{
					"filesize": 52652,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 300,
					"filename": "Lato-Light.woff"
				},
				{
					"filesize": 41304,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 300,
					"filename": "Lato-LightItalic.woff"
				},
				{
					"filesize": 50068,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 400,
					"filename": "Lato-Regular.woff"
				},
				{
					"filesize": 51056,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 400,
					"filename": "Lato-Italic.woff"
				},
				{
					"filesize": 50444,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 700,
					"filename": "Lato-Bold.woff"
				},
				{
					"filesize": 51368,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 700,
					"filename": "Lato-BoldItalic.woff"
				},
				{
					"filesize": 48536,
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 900,
					"filename": "Lato-Black.woff"
				},
				{
					"filesize": 48944,
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 900,
					"filename": "Lato-BlackItalic.woff"
				}
			],
			"name": "Lato"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 39732,
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 400,
					"filename": "LeagueScript.woff"
				}
			],
			"name": "League Script"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 48468,
					"style": "normal",
					"features": [
						"calt",
						"dlig",
						"liga",
						"onum",
						"salt",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"ss06",
						"ss07",
						"ss08",
						"swsh",
						"titl"
					],
					"weight": 400,
					"filename": "Lekton-Regular.woff"
				},
				{
					"filesize": 17068,
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filename": "Lekton-Italic.woff"
				},
				{
					"filesize": 48968,
					"style": "normal",
					"features": [
						"calt",
						"dlig",
						"liga",
						"onum",
						"salt",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"ss06",
						"ss07",
						"ss08",
						"swsh",
						"titl"
					],
					"weight": 700,
					"filename": "Lekton-Bold.woff"
				}
			],
			"name": "Lekton"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 60180,
					"style": "normal",
					"features": [
						"dlig",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 400,
					"filename": "LibreBaskerville-Regular.woff"
				},
				{
					"filesize": 74184,
					"style": "italic",
					"features": [
						"dlig",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"ss01",
						"sups"
					],
					"weight": 400,
					"filename": "LibreBaskerville-Italic.woff"
				},
				{
					"filesize": 61200,
					"style": "normal",
					"features": [
						"dlig",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 700,
					"filename": "LibreBaskerville-Bold.woff"
				}
			],
			"name": "Libre Baskerville"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 64068,
					"style": "normal",
					"features": [
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "LibreCaslonText-Regular.woff"
				},
				{
					"filesize": 74316,
					"style": "italic",
					"features": [
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "LibreCaslonText-Italic.woff"
				},
				{
					"filesize": 65864,
					"style": "normal",
					"features": [
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "LibreCaslonText-Bold.woff"
				}
			],
			"name": "Libre Caslon Text"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 54604,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"salt",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "LindenHill-Regular.woff"
				},
				{
					"filesize": 50308,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"salt",
						"ss01",
						"subs",
						"sups",
						"swsh"
					],
					"weight": 400,
					"filename": "LindenHill-Italic.woff"
				}
			],
			"name": "Linden Hill"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 58608,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "Lobster.woff"
				}
			],
			"name": "Lobster"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 89556,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "LobsterTwo-Regular.woff"
				},
				{
					"filesize": 86732,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "LobsterTwo-Italic.woff"
				},
				{
					"filesize": 88016,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 700,
					"filename": "LobsterTwo-Bold.woff"
				},
				{
					"filesize": 85248,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 700,
					"filename": "LobsterTwo-BoldItalic.woff"
				}
			],
			"name": "Lobster Two"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 39292,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "LuckiestGuy.woff"
				}
			],
			"name": "Luckiest Guy"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 32620,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "MaidenOrange.woff"
				}
			],
			"name": "Maiden Orange"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 24336,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Marcellus-Regular.woff"
				}
			],
			"name": "Marcellus"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 24620,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "MarcellusSC-Regular.woff"
				}
			],
			"name": "Marcellus SC"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 83036,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Margarine-Regular.woff"
				}
			],
			"name": "Margarine"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 15612,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern"
					],
					"weight": 400,
					"filename": "Mate-Regular.woff"
				},
				{
					"filesize": 16292,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Mate-Italic.woff"
				}
			],
			"name": "Mate"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 15780,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern"
					],
					"weight": 400,
					"filename": "MateSC-Regular.woff"
				}
			],
			"name": "Mate SC"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 31732,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "McLaren-Regular.woff"
				}
			],
			"name": "McLaren"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 21484,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Merienda-Regular.woff"
				},
				{
					"filesize": 18028,
					"style": "normal",
					"features": [],
					"weight": 700,
					"filename": "Merienda-Bold.woff"
				}
			],
			"name": "Merienda"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 24944,
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 300,
					"filename": "Merriweather-Light.woff"
				},
				{
					"filesize": 33844,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 300,
					"filename": "Merriweather-LightItalic.woff"
				},
				{
					"filesize": 23300,
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 400,
					"filename": "Merriweather-Regular.woff"
				},
				{
					"filesize": 33268,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Merriweather-Italic.woff"
				},
				{
					"filesize": 25208,
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 700,
					"filename": "Merriweather-Bold.woff"
				},
				{
					"filesize": 36208,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "Merriweather-BoldItalic.woff"
				},
				{
					"filesize": 24212,
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 900,
					"filename": "Merriweather-Black.woff"
				},
				{
					"filesize": 32976,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 900,
					"filename": "Merriweather-HeavyItalic.woff"
				}
			],
			"name": "Merriweather"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 29784,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 300,
					"filename": "MerriweatherSans-Light.woff"
				},
				{
					"filesize": 30496,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 300,
					"filename": "MerriweatherSans-LightItalic.woff"
				},
				{
					"filesize": 30192,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "MerriweatherSans-Regular.woff"
				},
				{
					"filesize": 29420,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "MerriweatherSans-Italic.woff"
				},
				{
					"filesize": 30816,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "MerriweatherSans-Bold.woff"
				},
				{
					"filesize": 30276,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "MerriweatherSans-BoldItalic.woff"
				},
				{
					"filesize": 30892,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 800,
					"filename": "MerriweatherSans-ExtraBold.woff"
				},
				{
					"filesize": 29904,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 800,
					"filename": "MerriweatherSans-ExtraBoldItalic.woff"
				}
			],
			"name": "Merriweather Sans"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 40280,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "MervaleScript-Regular.woff"
				}
			],
			"name": "Mervale Script"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 68956,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups"
					],
					"weight": 400,
					"filename": "Milonga-Regular.woff"
				}
			],
			"name": "Milonga"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 33156,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Molengo-Regular.woff"
				}
			],
			"name": "Molengo"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 34080,
					"style": "italic",
					"features": [
						"calt"
					],
					"weight": 400,
					"filename": "Molle-Regular.woff"
				}
			],
			"name": "Molle"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 39212,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Montez-Regular.woff"
				}
			],
			"name": "Montez"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 32428,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "MouseMemoirs-Regular.woff"
				}
			],
			"name": "Mouse Memoirs"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 1510664,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"fwid",
						"halt",
						"hwid",
						"nalt",
						"pwid",
						"sinf",
						"sups",
						"vert",
						"vhal"
					],
					"weight": 400,
					"filename": "NanumBrushScript-Regular.woff"
				}
			],
			"name": "Nanum Brush Script"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 1537996,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"fwid",
						"halt",
						"hwid",
						"nalt",
						"pwid",
						"sinf",
						"sups",
						"vert",
						"vhal"
					],
					"weight": 400,
					"filename": "NanumPenScript-Regular.woff"
				}
			],
			"name": "Nanum Pen Script"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 64536,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 400,
					"filename": "NewRocker-Regular.woff"
				}
			],
			"name": "New Rocker"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 84776,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"onum"
					],
					"weight": 400,
					"filename": "NewsCycle-Regular.woff"
				},
				{
					"filesize": 36032,
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "NewsCycle-Bold.woff"
				}
			],
			"name": "News Cycle"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 176888,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "NotoSans-Regular.woff"
				},
				{
					"filesize": 166492,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "NotoSans-Italic.woff"
				},
				{
					"filesize": 177964,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "NotoSans-Bold.woff"
				},
				{
					"filesize": 173164,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "NotoSans-BoldItalic.woff"
				}
			],
			"name": "Noto Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 176896,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "NotoSansUI-Regular.woff"
				},
				{
					"filesize": 166496,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "NotoSansUI-Italic.woff"
				},
				{
					"filesize": 177972,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "NotoSansUI-Bold.woff"
				},
				{
					"filesize": 173180,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "NotoSansUI-BoldItalic.woff"
				}
			],
			"name": "Noto Sans UI"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 207764,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "NotoSerif-Regular.woff"
				},
				{
					"filesize": 190192,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "NotoSerif-Italic.woff"
				},
				{
					"filesize": 224288,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "NotoSerif-Bold.woff"
				},
				{
					"filesize": 196404,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "NotoSerif-BoldItalic.woff"
				}
			],
			"name": "Noto Serif"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 80576,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"salt",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "OFLGoudyStMTT.woff"
				},
				{
					"filesize": 77448,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"salt",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "OFLGoudyStMTT-Italic.woff"
				}
			],
			"name": "OFL Sorts Mill Goudy TT"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 31668,
					"style": "normal",
					"features": [],
					"weight": 400,
					"filename": "OldStandard-Regular.woff"
				},
				{
					"filesize": 35272,
					"style": "italic",
					"features": [
						" RQD",
						"aalt",
						"ccmp",
						"frac",
						"kern",
						"ss06",
						"sups"
					],
					"weight": 400,
					"filename": "OldStandard-Italic.woff"
				},
				{
					"filesize": 32548,
					"style": "normal",
					"features": [],
					"weight": 700,
					"filename": "OldStandard-Bold.woff"
				}
			],
			"name": "Old Standard TT"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 114396,
					"style": "normal",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 300,
					"filename": "OpenSans-Light.woff"
				},
				{
					"filesize": 110184,
					"style": "italic",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 300,
					"filename": "OpenSans-LightItalic.woff"
				},
				{
					"filesize": 112520,
					"style": "normal",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 400,
					"filename": "OpenSans-Regular.woff"
				},
				{
					"filesize": 110152,
					"style": "italic",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 400,
					"filename": "OpenSans-Italic.woff"
				},
				{
					"filesize": 114908,
					"style": "normal",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 600,
					"filename": "OpenSans-Semibold.woff"
				},
				{
					"filesize": 110844,
					"style": "italic",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 600,
					"filename": "OpenSans-SemiboldItalic.woff"
				},
				{
					"filesize": 115388,
					"style": "normal",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 700,
					"filename": "OpenSans-Bold.woff"
				},
				{
					"filesize": 110032,
					"style": "italic",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 700,
					"filename": "OpenSans-BoldItalic.woff"
				},
				{
					"filesize": 114940,
					"style": "normal",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 800,
					"filename": "OpenSans-ExtraBold.woff"
				},
				{
					"filesize": 110560,
					"style": "italic",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 800,
					"filename": "OpenSans-ExtraBoldItalic.woff"
				}
			],
			"name": "Open Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 113056,
					"style": "normal",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 300,
					"filename": "OpenSans-CondLight.woff"
				},
				{
					"filesize": 108716,
					"style": "italic",
					"features": [
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 300,
					"filename": "OpenSans-CondLightItalic.woff"
				},
				{
					"filesize": 120856,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"onum",
						"pnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"tnum"
					],
					"weight": 700,
					"filename": "OpenSans-CondBold.woff"
				}
			],
			"name": "Open Sans Condensed"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 17520,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"salt",
						"smcp",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 400,
					"filename": "Orbitron-Regular.woff"
				},
				{
					"filesize": 17232,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"salt",
						"smcp",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 500,
					"filename": "Orbitron-Medium.woff"
				},
				{
					"filesize": 17472,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"salt",
						"smcp",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 700,
					"filename": "Orbitron-Bold.woff"
				},
				{
					"filesize": 17600,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"salt",
						"smcp",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 900,
					"filename": "Orbitron-Black.woff"
				}
			],
			"name": "Orbitron"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 44104,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Oregano-Regular.woff"
				},
				{
					"filesize": 47736,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Oregano-Italic.woff"
				}
			],
			"name": "Oregano"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 34088,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "OriginalSurfer-Regular.woff"
				}
			],
			"name": "Original Surfer"
		},
		{
			"category": "Monospace",
			"variants": [
				{
					"filesize": 99800,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"dlig",
						"frac",
						"hist",
						"numr",
						"ordn",
						"sinf",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "PTM55FT.woff"
				}
			],
			"name": "PT Mono"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 227748,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "PT_Sans-Web-Regular.woff"
				},
				{
					"filesize": 222468,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "PT_Sans-Web-Italic.woff"
				},
				{
					"filesize": 241916,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "PT_Sans-Web-Bold.woff"
				},
				{
					"filesize": 186188,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "PT_Sans-Web-BoldItalic.woff"
				}
			],
			"name": "PT Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 194872,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "PT_Sans-Caption-Web-Regular.woff"
				},
				{
					"filesize": 197368,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "PT_Sans-Caption-Web-Bold.woff"
				}
			],
			"name": "PT Sans Caption"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 195740,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "PT_Sans-Narrow-Web-Regular.woff"
				},
				{
					"filesize": 251432,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"hist",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "PT_Sans-Narrow-Web-Bold.woff"
				}
			],
			"name": "PT Sans Narrow"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 178496,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 400,
					"filename": "PT_Serif-Web-Regular.woff"
				},
				{
					"filesize": 188004,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 400,
					"filename": "PT_Serif-Web-Italic.woff"
				},
				{
					"filesize": 164232,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 700,
					"filename": "PT_Serif-Web-Bold.woff"
				},
				{
					"filesize": 163144,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 700,
					"filename": "PT_Serif-Web-BoldItalic.woff"
				}
			],
			"name": "PT Serif"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 202848,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 400,
					"filename": "PT_Serif-Caption-Web-Regular.woff"
				},
				{
					"filesize": 199844,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 400,
					"filename": "PT_Serif-Caption-Web-Italic.woff"
				}
			],
			"name": "PT Serif Caption"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 22452,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Paprika-Regular.woff"
				}
			],
			"name": "Paprika"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 34768,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Parisienne-Regular.woff"
				}
			],
			"name": "Parisienne"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 88176,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"liga",
						"lnum",
						"onum",
						"ordn",
						"smcp",
						"sups"
					],
					"weight": 400,
					"filename": "PatrickHand-Regular.woff"
				}
			],
			"name": "Patrick Hand"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 66832,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"liga",
						"lnum",
						"onum",
						"ordn",
						"smcp",
						"sups"
					],
					"weight": 400,
					"filename": "PatrickHandSC-Regular.woff"
				}
			],
			"name": "Patrick Hand SC"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 35348,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Peralta-Regular.woff"
				}
			],
			"name": "Peralta"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 108948,
					"style": "normal",
					"features": [
						"frac",
						"kern"
					],
					"weight": 400,
					"filename": "Philosopher-Regular.woff"
				},
				{
					"filesize": 104932,
					"style": "italic",
					"features": [
						"frac",
						"kern"
					],
					"weight": 400,
					"filename": "Philosopher-Italic.woff"
				},
				{
					"filesize": 91992,
					"style": "normal",
					"features": [
						"frac",
						"kern"
					],
					"weight": 700,
					"filename": "Philosopher-Bold.woff"
				},
				{
					"filesize": 96916,
					"style": "italic",
					"features": [
						"frac",
						"kern"
					],
					"weight": 700,
					"filename": "Philosopher-BoldItalic.woff"
				}
			],
			"name": "Philosopher"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 88640,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "PlayfairDisplay-Regular.woff"
				},
				{
					"filesize": 88508,
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "PlayfairDisplay-Italic.woff"
				},
				{
					"filesize": 94688,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "PlayfairDisplay-Bold.woff"
				},
				{
					"filesize": 93124,
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "PlayfairDisplay-BoldItalic.woff"
				},
				{
					"filesize": 92396,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 900,
					"filename": "PlayfairDisplay-Black.woff"
				},
				{
					"filesize": 89188,
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 900,
					"filename": "PlayfairDisplay-BlackItalic.woff"
				}
			],
			"name": "Playfair Display"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 64284,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "PlayfairDisplaySC-Regular.woff"
				},
				{
					"filesize": 65180,
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "PlayfairDisplaySC-Italic.woff"
				},
				{
					"filesize": 68860,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "PlayfairDisplaySC-Bold.woff"
				},
				{
					"filesize": 68628,
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "PlayfairDisplaySC-BoldItalic.woff"
				},
				{
					"filesize": 67488,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 900,
					"filename": "PlayfairDisplaySC-Black.woff"
				},
				{
					"filesize": 66896,
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"sinf",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 900,
					"filename": "PlayfairDisplaySC-BlackItalic.woff"
				}
			],
			"name": "Playfair Display SC"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 74748,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 400,
					"filename": "PoetsenOne-Regular.woff"
				}
			],
			"name": "Poetsen One"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 33632,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"cpsp",
						"liga",
						"lnum",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"smcp",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filename": "Poly-Regular.woff"
				},
				{
					"filesize": 32160,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filename": "Poly-Italic.woff"
				}
			],
			"name": "Poly"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 19096,
					"style": "normal",
					"features": [
						"CAPS",
						"dlig",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 400,
					"filename": "Prociono-Regular.woff"
				}
			],
			"name": "Prociono"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 36084,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "PurplePurse-Regular.woff"
				}
			],
			"name": "Purple Purse"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 56132,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"salt",
						"sups"
					],
					"weight": 400,
					"filename": "Quattrocento-Regular.woff"
				},
				{
					"filesize": 59448,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"salt",
						"sups"
					],
					"weight": 700,
					"filename": "Quattrocento-Bold.woff"
				}
			],
			"name": "Quattrocento"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 38292,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "QuattrocentoSans-Regular.woff"
				},
				{
					"filesize": 44672,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "QuattrocentoSans-Italic.woff"
				},
				{
					"filesize": 38332,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "QuattrocentoSans-Bold.woff"
				},
				{
					"filesize": 39744,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "QuattrocentoSans-BoldItalic.woff"
				}
			],
			"name": "Quattrocento Sans"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 43804,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Quintessential-Regular.woff"
				}
			],
			"name": "Quintessential"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 57728,
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 400,
					"filename": "RacingSansOne-Regular.woff"
				}
			],
			"name": "Racing Sans One"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 115808,
					"style": "normal",
					"features": [
						"aalt",
						"dlig",
						"kern",
						"liga",
						"lnum",
						"onum",
						"salt",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 400,
					"filename": "RalewayDots-Regular.woff"
				}
			],
			"name": "Raleway Dots"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 67784,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sinf",
						"sups"
					],
					"weight": 400,
					"filename": "Ranchers-Regular.woff"
				}
			],
			"name": "Ranchers"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 42580,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Redressed.woff"
				}
			],
			"name": "Redressed"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 43992,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Ribeye-Regular.woff"
				}
			],
			"name": "Ribeye"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 45204,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "RibeyeMarrow-Regular.woff"
				}
			],
			"name": "Ribeye Marrow"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 33632,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Risque-Regular.woff"
				}
			],
			"name": "Risque"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 72308,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp"
					],
					"weight": 100,
					"filename": "Roboto-Thin.woff"
				},
				{
					"filesize": 75212,
					"style": "italic",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp"
					],
					"weight": 100,
					"filename": "Roboto-ThinItalic.woff"
				},
				{
					"filesize": 73588,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"pnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 300,
					"filename": "Roboto-Light.woff"
				},
				{
					"filesize": 76920,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 300,
					"filename": "Roboto-LightItalic.woff"
				},
				{
					"filesize": 76792,
					"style": "normal",
					"features": [
						"aalt",
						"kern"
					],
					"weight": 400,
					"filename": "Roboto-Regular.woff"
				},
				{
					"filesize": 77936,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 400,
					"filename": "Roboto-Italic.woff"
				},
				{
					"filesize": 72928,
					"style": "normal",
					"features": [
						"aalt",
						"kern"
					],
					"weight": 500,
					"filename": "Roboto-Medium.woff"
				},
				{
					"filesize": 78284,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 500,
					"filename": "Roboto-MediumItalic.woff"
				},
				{
					"filesize": 71820,
					"style": "normal",
					"features": [
						"aalt",
						"kern"
					],
					"weight": 700,
					"filename": "Roboto-Bold.woff"
				},
				{
					"filesize": 78052,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 700,
					"filename": "Roboto-BoldItalic.woff"
				},
				{
					"filesize": 75516,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"pnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 900,
					"filename": "Roboto-Black.woff"
				},
				{
					"filesize": 79600,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 900,
					"filename": "Roboto-BlackItalic.woff"
				}
			],
			"name": "Roboto"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 72116,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 300,
					"filename": "RobotoCondensed-Light.woff"
				},
				{
					"filesize": 75508,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 300,
					"filename": "RobotoCondensed-LightItalic.woff"
				},
				{
					"filesize": 72092,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 400,
					"filename": "RobotoCondensed-Regular.woff"
				},
				{
					"filesize": 75868,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 400,
					"filename": "RobotoCondensed-Italic.woff"
				},
				{
					"filesize": 73560,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 700,
					"filename": "RobotoCondensed-Bold.woff"
				},
				{
					"filesize": 76568,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02"
					],
					"weight": 700,
					"filename": "RobotoCondensed-BoldItalic.woff"
				}
			],
			"name": "Roboto Condensed"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 92560,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 100,
					"filename": "RobotoSlab-Thin.woff"
				},
				{
					"filesize": 94000,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 300,
					"filename": "RobotoSlab-Light.woff"
				},
				{
					"filesize": 90900,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "RobotoSlab-Regular.woff"
				},
				{
					"filesize": 92260,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 700,
					"filename": "RobotoSlab-Bold.woff"
				}
			],
			"name": "Roboto Slab"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 28440,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Romanesco-Regular.woff"
				}
			],
			"name": "Romanesco"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 32904,
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Rosario-Regular.woff"
				},
				{
					"filesize": 32856,
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Rosario-Italic.woff"
				},
				{
					"filesize": 24520,
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "Rosario-Bold.woff"
				},
				{
					"filesize": 33036,
					"style": "italic",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"ordn"
					],
					"weight": 700,
					"filename": "Rosario-BoldItalic.woff"
				}
			],
			"name": "Rosario"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 21620,
					"style": "normal",
					"features": [
						"kern",
						"lig\t"
					],
					"weight": 400,
					"filename": "Rosarivo-Regular.woff"
				},
				{
					"filesize": 20832,
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filename": "Rosarivo-Italic.woff"
				}
			],
			"name": "Rosarivo"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 34768,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "RumRaisin-Regular.woff"
				}
			],
			"name": "Rum Raisin"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 41092,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Sacramento-Regular.woff"
				}
			],
			"name": "Sacramento"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 24864,
					"style": "normal",
					"features": [
						"fina",
						"init",
						"kern",
						"liga",
						"swsh"
					],
					"weight": 400,
					"filename": "Salsa-Regular.woff"
				}
			],
			"name": "Salsa"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 26856,
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "Sanchez-Regular.woff"
				},
				{
					"filesize": 29176,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filename": "Sanchez-Italic.woff"
				}
			],
			"name": "Sanchez"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 23740,
					"style": "normal",
					"features": [
						"liga",
						"onum",
						"salt",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 300,
					"filename": "Sansation-Light.woff"
				},
				{
					"filesize": 25280,
					"style": "normal",
					"features": [
						"liga",
						"onum",
						"ss03"
					],
					"weight": 300,
					"filename": "Sansation-LightItalic.woff"
				},
				{
					"filesize": 24832,
					"style": "normal",
					"features": [
						"liga",
						"onum",
						"ss03"
					],
					"weight": 400,
					"filename": "Sansation-Italic.woff"
				},
				{
					"filesize": 23196,
					"style": "normal",
					"features": [
						"liga",
						"onum",
						"salt",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 400,
					"filename": "Sansation-Regular.woff"
				},
				{
					"filesize": 23772,
					"style": "normal",
					"features": [
						"liga",
						"onum",
						"salt",
						"ss01",
						"ss02",
						"ss03"
					],
					"weight": 700,
					"filename": "Sansation-Bold.woff"
				},
				{
					"filesize": 25156,
					"style": "normal",
					"features": [
						"liga",
						"onum",
						"ss03"
					],
					"weight": 700,
					"filename": "Sansation-BoldItalic.woff"
				}
			],
			"name": "Sansation"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 18816,
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 400,
					"filename": "Sedan-Regular.woff"
				},
				{
					"filesize": 21556,
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"onum"
					],
					"weight": 400,
					"filename": "Sedan-Italic.woff"
				}
			],
			"name": "Sedan"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 78584,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern"
					],
					"weight": 400,
					"filename": "Sevillana-Regular.woff"
				}
			],
			"name": "Sevillana"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 44160,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Share-Regular.woff"
				},
				{
					"filesize": 36292,
					"style": "italic",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Share-Italic.woff"
				},
				{
					"filesize": 44112,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "Share-Bold.woff"
				},
				{
					"filesize": 36268,
					"style": "italic",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filename": "Share-BoldItalic.woff"
				}
			],
			"name": "Share"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 15196,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "ShareTech-Regular.woff"
				}
			],
			"name": "Share Tech"
		},
		{
			"category": "Monospace",
			"variants": [
				{
					"filesize": 12932,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "ShareTechMono-Regular.woff"
				}
			],
			"name": "Share Tech Mono"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 40980,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Shojumaru-Regular.woff"
				}
			],
			"name": "Shojumaru"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 76468,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Simonetta-Regular.woff"
				},
				{
					"filesize": 71200,
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Simonetta-Italic.woff"
				},
				{
					"filesize": 63972,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga"
					],
					"weight": 900,
					"filename": "Simonetta-Black.woff"
				},
				{
					"filesize": 63052,
					"style": "italic",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga"
					],
					"weight": 900,
					"filename": "Simonetta-BlackItalic.woff"
				}
			],
			"name": "Simonetta"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 46920,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "SnowburstOne-Regular.woff"
				}
			],
			"name": "Snowburst One"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 48508,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"salt",
						"smcp",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "SortsMillGoudy-Regular.woff"
				},
				{
					"filesize": 44476,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"hist",
						"kern",
						"liga",
						"lnum",
						"numr",
						"salt",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "SortsMillGoudy-Italic.woff"
				}
			],
			"name": "Sorts Mill Goudy"
		},
		{
			"category": "Monospace",
			"variants": [
				{
					"filesize": 54896,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 200,
					"filename": "SourceCodePro-ExtraLight.woff"
				},
				{
					"filesize": 55696,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 300,
					"filename": "SourceCodePro-Light.woff"
				},
				{
					"filesize": 55472,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "SourceCodePro-Regular.woff"
				},
				{
					"filesize": 55344,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 500,
					"filename": "SourceCodePro-Medium.woff"
				},
				{
					"filesize": 55360,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 600,
					"filename": "SourceCodePro-Semibold.woff"
				},
				{
					"filesize": 55344,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "SourceCodePro-Bold.woff"
				},
				{
					"filesize": 54596,
					"style": "normal",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"subs",
						"sups"
					],
					"weight": 900,
					"filename": "SourceCodePro-Black.woff"
				}
			],
			"name": "Source Code Pro"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 66844,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 200,
					"filename": "SourceSansPro-ExtraLight.woff"
				},
				{
					"filesize": 54688,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 200,
					"filename": "SourceSansPro-ExtraLightItalic.woff"
				},
				{
					"filesize": 68292,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 300,
					"filename": "SourceSansPro-Light.woff"
				},
				{
					"filesize": 55900,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 300,
					"filename": "SourceSansPro-LightItalic.woff"
				},
				{
					"filesize": 68384,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 400,
					"filename": "SourceSansPro-Regular.woff"
				},
				{
					"filesize": 56052,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 400,
					"filename": "SourceSansPro-Italic.woff"
				},
				{
					"filesize": 68244,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 600,
					"filename": "SourceSansPro-Semibold.woff"
				},
				{
					"filesize": 56008,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 600,
					"filename": "SourceSansPro-SemiboldItalic.woff"
				},
				{
					"filesize": 67856,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 700,
					"filename": "SourceSansPro-Bold.woff"
				},
				{
					"filesize": 55728,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 700,
					"filename": "SourceSansPro-BoldItalic.woff"
				},
				{
					"filesize": 66152,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"smcp",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 900,
					"filename": "SourceSansPro-Black.woff"
				},
				{
					"filesize": 54652,
					"style": "italic",
					"features": [
						"aalt",
						"case",
						"ccmp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"size",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"subs",
						"sups",
						"zero"
					],
					"weight": 900,
					"filename": "SourceSansPro-BlackItalic.woff"
				}
			],
			"name": "Source Sans Pro"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 90472,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "SpecialElite.woff"
				}
			],
			"name": "Special Elite"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 38004,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "SpicyRice-Regular.woff"
				}
			],
			"name": "Spicy Rice"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 16052,
					"style": "normal",
					"features": [
						"cpsp"
					],
					"weight": 400,
					"filename": "Spinnaker-Regular.woff"
				}
			],
			"name": "Spinnaker"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 39640,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Stalemate-Regular.woff"
				}
			],
			"name": "Stalemate"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 21956,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "StintUltraCondensed-Regular.woff"
				}
			],
			"name": "Stint Ultra Condensed"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 23180,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "StintUltraExpanded-Regular.woff"
				}
			],
			"name": "Stint Ultra Expanded"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 62776,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 200,
					"filename": "TerminalDosis-ExtraLight.woff"
				},
				{
					"filesize": 64252,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 300,
					"filename": "TerminalDosis-Light.woff"
				},
				{
					"filesize": 64804,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 400,
					"filename": "TerminalDosis-Regular.woff"
				},
				{
					"filesize": 64688,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 500,
					"filename": "TerminalDosis-Medium.woff"
				},
				{
					"filesize": 64588,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 600,
					"filename": "TerminalDosis-SemiBold.woff"
				},
				{
					"filesize": 65476,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 700,
					"filename": "TerminalDosis-Bold.woff"
				},
				{
					"filesize": 65420,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05"
					],
					"weight": 800,
					"filename": "TerminalDosis-ExtraBold.woff"
				}
			],
			"name": "Terminal Dosis"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 51796,
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"lnum",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04"
					],
					"weight": 400,
					"filename": "TerminalDosis-Light.woff"
				}
			],
			"name": "Terminal Dosis Light"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 17556,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dnom",
						"frac",
						"liga",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "TextMeOne-Regular.woff"
				}
			],
			"name": "Text Me One"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 251900,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Tinos-Regular.woff"
				},
				{
					"filesize": 248288,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filename": "Tinos-Italic.woff"
				},
				{
					"filesize": 242620,
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "Tinos-Bold.woff"
				},
				{
					"filesize": 250316,
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filename": "Tinos-BoldItalic.woff"
				}
			],
			"name": "Tinos"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 31768,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 200,
					"filename": "TitilliumWeb-ExtraLight.woff"
				},
				{
					"filesize": 34764,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 200,
					"filename": "TitilliumWeb-ExtraLightItalic.woff"
				},
				{
					"filesize": 32812,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 300,
					"filename": "TitilliumWeb-Light.woff"
				},
				{
					"filesize": 36916,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 300,
					"filename": "TitilliumWeb-LightItalic.woff"
				},
				{
					"filesize": 32612,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 400,
					"filename": "TitilliumWeb-Regular.woff"
				},
				{
					"filesize": 37224,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 400,
					"filename": "TitilliumWeb-Italic.woff"
				},
				{
					"filesize": 32196,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 600,
					"filename": "TitilliumWeb-SemiBold.woff"
				},
				{
					"filesize": 37164,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 600,
					"filename": "TitilliumWeb-SemiBoldItalic.woff"
				},
				{
					"filesize": 30504,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 700,
					"filename": "TitilliumWeb-Bold.woff"
				},
				{
					"filesize": 35504,
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 700,
					"filename": "TitilliumWeb-BoldItalic.woff"
				},
				{
					"filesize": 25180,
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 900,
					"filename": "TitilliumWeb-Black.woff"
				}
			],
			"name": "Titillium Web"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 63492,
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Trocchi-Regular.woff"
				}
			],
			"name": "Trocchi"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 75784,
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"locl"
					],
					"weight": 400,
					"filename": "Tuffy-Regular.woff"
				},
				{
					"filesize": 97660,
					"style": "italic",
					"features": [
						"frac",
						"kern",
						"liga",
						"locl"
					],
					"weight": 400,
					"filename": "Tuffy-Italic.woff"
				},
				{
					"filesize": 50704,
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "Tuffy-Bold.woff"
				},
				{
					"filesize": 56164,
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 700,
					"filename": "Tuffy-BoldItalic.woff"
				}
			],
			"name": "Tuffy"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 193296,
					"style": "normal",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filename": "Ubuntu-Light.woff"
				},
				{
					"filesize": 193328,
					"style": "italic",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"ss02",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filename": "Ubuntu-LightItalic.woff"
				},
				{
					"filesize": 169776,
					"style": "normal",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Ubuntu-Regular.woff"
				},
				{
					"filesize": 185140,
					"style": "italic",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Ubuntu-Italic.woff"
				},
				{
					"filesize": 160180,
					"style": "normal",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filename": "Ubuntu-Medium.woff"
				},
				{
					"filesize": 176912,
					"style": "italic",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filename": "Ubuntu-MediumItalic.woff"
				},
				{
					"filesize": 157304,
					"style": "normal",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "Ubuntu-Bold.woff"
				},
				{
					"filesize": 172572,
					"style": "italic",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filename": "Ubuntu-BoldItalic.woff"
				}
			],
			"name": "Ubuntu"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 165076,
					"style": "normal",
					"features": [
						"case",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "UbuntuCondensed-Regular.woff"
				}
			],
			"name": "Ubuntu Condensed"
		},
		{
			"category": "Monospace",
			"variants": [
				{
					"filesize": 111736,
					"style": "normal",
					"features": [
						"afrc",
						"case",
						"dnom",
						"frac",
						"numr",
						"ordn",
						"salt",
						"sinf",
						"ss01",
						"ss02",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "UbuntuMono-Regular.woff"
				},
				{
					"filesize": 114604,
					"style": "italic",
					"features": [
						"afrc",
						"case",
						"dnom",
						"frac",
						"numr",
						"ordn",
						"salt",
						"sinf",
						"ss01",
						"ss02",
						"subs",
						"sups"
					],
					"weight": 400,
					"filename": "UbuntuMono-Italic.woff"
				},
				{
					"filesize": 107752,
					"style": "normal",
					"features": [
						"afrc",
						"case",
						"dnom",
						"frac",
						"numr",
						"ordn",
						"salt",
						"sinf",
						"ss01",
						"ss02",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "UbuntuMono-Bold.woff"
				},
				{
					"filesize": 127552,
					"style": "italic",
					"features": [
						"afrc",
						"case",
						"dnom",
						"frac",
						"numr",
						"ordn",
						"salt",
						"sinf",
						"ss01",
						"ss02",
						"subs",
						"sups"
					],
					"weight": 700,
					"filename": "UbuntuMono-BoldItalic.woff"
				}
			],
			"name": "Ubuntu Mono"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 33744,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "UncialAntiqua-Regular.woff"
				}
			],
			"name": "Uncial Antiqua"
		},
		{
			"category": "Display",
			"variants": [
				{
					"filesize": 45572,
					"style": "normal",
					"features": [
						"hlig",
						"liga",
						"rlig"
					],
					"weight": 400,
					"filename": "UnifrakturMaguntia-Book.woff"
				}
			],
			"name": "UnifrakturMaguntia"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 79400,
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
						"dlig",
						"dnom",
						"frac",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"smcp",
						"ss01",
						"subs",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filename": "Varela-Regular.woff"
				}
			],
			"name": "Varela"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"filesize": 31696,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filename": "Vollkorn-Regular.woff"
				},
				{
					"filesize": 28376,
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"sups"
					],
					"weight": 400,
					"filename": "Vollkorn-Italic.woff"
				},
				{
					"filesize": 34932,
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 700,
					"filename": "Vollkorn-Bold.woff"
				},
				{
					"filesize": 27524,
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"numr",
						"sups"
					],
					"weight": 700,
					"filename": "Vollkorn-BoldItalic.woff"
				}
			],
			"name": "Vollkorn"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"filesize": 37852,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"sups"
					],
					"weight": 200,
					"filename": "YanoneKaffeesatz-ExtraLight.woff"
				},
				{
					"filesize": 38224,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"sups"
					],
					"weight": 300,
					"filename": "YanoneKaffeesatz-Light.woff"
				},
				{
					"filesize": 37964,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"sups"
					],
					"weight": 400,
					"filename": "YanoneKaffeesatz-Regular.woff"
				},
				{
					"filesize": 35440,
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dlig",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"salt",
						"ss01",
						"ss02",
						"ss03",
						"ss04",
						"ss05",
						"sups"
					],
					"weight": 700,
					"filename": "YanoneKaffeesatz-Bold.woff"
				}
			],
			"name": "Yanone Kaffeesatz"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"filesize": 36896,
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filename": "Yesteryear-Regular.woff"
				}
			],
			"name": "Yesteryear"
		}
	]

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
		"aalt": "Access All Alternates",
		"abvf": "Above-base Forms",
		"abvm": "Above-base Mark Positioning",
		"abvs": "Above-base Substitutions",
		"afrc": "Alternative Fractions",
		"akhn": "Akhands",
		"blwf": "Below-base Forms",
		"blwm": "Below-base Mark Positioning",
		"blws": "Below-base Substitutions",
		"calt": "Contextual Alternates",
		"case": "Case-Sensitive Forms",
		"ccmp": "Glyph Composition / Decomposition",
		"cfar": "Conjunct Form After Ro",
		"cjct": "Conjunct Forms",
		"clig": "Contextual Ligatures",
		"cpct": "Centered CJK Punctuation",
		"cpsp": "Capital Spacing",
		"cswh": "Contextual Swash",
		"curs": "Cursive Positioning",
		"c2pc": "Petite Capitals From Capitals",
		"c2sc": "Small Capitals From Capitals",
		"dist": "Distances",
		"dlig": "Discretionary Ligatures",
		"dnom": "Denominators",
		"expt": "Expert Forms",
		"falt": "Final Glyph on Line Alternates",
		"fin2": "Terminal Forms #2",
		"fin3": "Terminal Forms #3",
		"fina": "Terminal Forms",
		"frac": "Fractions",
		"fwid": "Full Widths",
		"half": "Half Forms",
		"haln": "Halant Forms",
		"halt": "Alternate Half Widths",
		"hist": "Historical Forms",
		"hkna": "Horizontal Kana Alternates",
		"hlig": "Historical Ligatures",
		"hngl": "Hangul",
		"hojo": "Hojo Kanji Forms",
		"hwid": "Half Widths",
		"init": "Initial Forms",
		"isol": "Isolated Forms",
		"ital": "Italics",
		"jalt": "Justification Alternates",
		"jp78": "JIS78 Forms",
		"jp83": "JIS83 Forms",
		"jp90": "JIS90 Forms",
		"jp04": "JIS2004 Forms",
		"kern": "Kerning",
		"lfbd": "Left Bounds",
		"liga": "Standard Ligatures",
		"ljmo": "Leading Jamo Forms",
		"lnum": "Lining Figures",
		"locl": "Localized Forms",
		"ltra": "Left-to-right alternates",
		"ltrm": "Left-to-right mirrored forms",
		"mark": "Mark Positioning",
		"med2": "Medial Forms #2",
		"medi": "Medial Forms",
		"mgrk": "Mathematical Greek",
		"mkmk": "Mark to Mark Positioning",
		"mset": "Mark Positioning via Substitution",
		"nalt": "Alternate Annotation Forms",
		"nlck": "NLC Kanji Forms",
		"nukt": "Nukta Forms",
		"numr": "Numerators",
		"onum": "Oldstyle Figures",
		"opbd": "Optical Bounds",
		"ordn": "Ordinals",
		"ornm": "Ornaments",
		"palt": "Proportional Alternate Widths",
		"pcap": "Petite Capitals",
		"pkna": "Proportional Kana",
		"pnum": "Proportional Figures",
		"pref": "Pre-Base Forms",
		"pres": "Pre-base Substitutions",
		"pstf": "Post-base Forms",
		"psts": "Post-base Substitutions",
		"pwid": "Proportional Widths",
		"qwid": "Quarter Widths",
		"rand": "Randomize",
		"rkrf": "Rakar Forms",
		"rlig": "Required Ligatures",
		"rphf": "Reph Forms",
		"rtbd": "Right Bounds",
		"rtla": "Right-to-left alternates",
		"rtlm": "Right-to-left mirrored forms",
		"ruby": "Ruby Notation Forms",
		"salt": "Stylistic Alternates",
		"sinf": "Scientific Inferiors",
		"size": "Optical size",
		"smcp": "Small Capitals",
		"smpl": "Simplified Forms",
		"ss01": "Stylistic Set 1",
		"ss02": "Stylistic Set 2",
		"ss03": "Stylistic Set 3",
		"ss04": "Stylistic Set 4",
		"ss05": "Stylistic Set 5",
		"ss06": "Stylistic Set 6",
		"ss07": "Stylistic Set 7",
		"ss08": "Stylistic Set 8",
		"ss09": "Stylistic Set 9",
		"ss10": "Stylistic Set 10",
		"ss11": "Stylistic Set 11",
		"ss12": "Stylistic Set 12",
		"ss13": "Stylistic Set 13",
		"ss14": "Stylistic Set 14",
		"ss15": "Stylistic Set 15",
		"ss16": "Stylistic Set 16",
		"ss17": "Stylistic Set 17",
		"ss18": "Stylistic Set 18",
		"ss19": "Stylistic Set 19",
		"ss20": "Stylistic Set 20",
		"subs": "Subscript",
		"sups": "Superscript",
		"swsh": "Swash",
		"titl": "Titling",
		"tjmo": "Trailing Jamo Forms",
		"tnam": "Traditional Name Forms",
		"tnum": "Tabular Figures",
		"trad": "Traditional Forms",
		"twid": "Third Widths",
		"unic": "Unicase",
		"valt": "Alternate Vertical Metrics",
		"vatu": "Vattu Variants",
		"vert": "Vertical Writing",
		"vhal": "Alternate Vertical Half Metrics",
		"vjmo": "Vowel Jamo Forms",
		"vkna": "Vertical Kana Alternates",
		"vkrn": "Vertical Kerning",
		"vpal": "Proportional Alternate Vertical Metrics",
		"vrt2": "Vertical Alternates and Rotation",
		"zero": "Slashed Zero"
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/leroux/src/fontsinfo/node_modules/css-loader/index.js!/Users/leroux/src/fontsinfo/node_modules/less-loader/index.js!/Users/leroux/src/fontsinfo/css/style.less", function() {
			var newContent = require("!!/Users/leroux/src/fontsinfo/node_modules/css-loader/index.js!/Users/leroux/src/fontsinfo/node_modules/less-loader/index.js!/Users/leroux/src/fontsinfo/css/style.less");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	exports.push([module.id, "body,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\ninput,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nstrong,\nth,\nvar {\n  font-style: normal;\n  font-weight: normal;\n}\nol,\nul {\n  list-style: none;\n}\ncaption,\nth {\n  text-align: left;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nq:before,\nq:after {\n  content: '';\n}\na,\na:link,\na:visited,\na:active,\na:hover {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\nhtml {\n  text-rendering: optimizeLegibility;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: #f8f8f8;\n  color: #222;\n}\na {\n  color: #000;\n  text-decoration: none;\n}\n.ui {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  min-height: 100vh;\n}\n.ui > * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 60px 30px;\n  max-height: 100vh;\n  overflow: auto;\n}\n.font-selector,\n.feature-selector {\n  width: 25%;\n}\n.previewer {\n  background-color: #ffffff;\n  box-shadow: 0 0 4px 0 #dddddd;\n  flex: 1;\n}\n.preview {\n  font-size: 48px;\n  line-height: 1.1em;\n  text-rendering: optimizeLegibility;\n}\n.preview p {\n  -ms-font-feature-settings: inherit;\n  -moz-font-feature-settings: inherit;\n  -webkit-font-feature-settings: inherit;\n  font-feature-settings: inherit;\n}\n.preview p + p {\n  margin-top: 24px;\n}\n.preview:focus {\n  outline: none;\n}\n.fonts .font {\n  display: block;\n}\n.fonts .font + .font {\n  margin-top: 20px;\n}\n.fonts .fontname {\n  font-weight: bold;\n}\n.fonts .variantname,\n.fonts .featurename {\n  display: inline-block;\n}\n.fonts .variantname {\n  cursor: pointer;\n}\n.fonts .featurename.partial {\n  font-style: italic;\n}\n.font-info {\n  font-weight: bold;\n}\n.font-info * {\n  display: inline-block;\n}\n.features label {\n  display: block;\n  margin-top: 10px;\n}\n", ""]);

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */,
/* 9 */,
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
]);