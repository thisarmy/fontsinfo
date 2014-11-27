webpackJsonp([1],[
/* 0 */
/*!***********************!*\
  !*** ./js/app.coffee ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	var $, backbone, features, fonts, start, _;
	
	$ = __webpack_require__(/*! jquery */ 1);
	
	_ = __webpack_require__(/*! underscore */ 2);
	
	backbone = __webpack_require__(/*! backbone */ 3);
	
	__webpack_require__(/*! backbone.marionette */ 4);
	
	__webpack_require__(/*! ../css/style.less */ 6);
	
	fonts = __webpack_require__(/*! ../fonts.json */ 5);
	
	features = __webpack_require__(/*! ../features.json */ 12);
	
	start = function() {
	  return console.log(features);
	};
	
	$(document).ready(start);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/*!********************!*\
  !*** ./fonts.json ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = [
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"calt",
						"case",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 67364
				}
			],
			"name": "Abril Fatface"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 68784
				}
			],
			"name": "Aclonica"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 64944
				}
			],
			"name": "Actor"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 112624
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 93748
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 117848
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 94576
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 119016
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 95524
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 119272
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 96568
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 121204
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 96328
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 120952
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 97248
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 126240
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 99236
				}
			],
			"name": "Alegreya Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 102408
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 85356
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 104700
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 85320
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 107552
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 85924
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 107884
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 86304
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 110140
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 86456
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 111828
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 87396
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 110316
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"calt",
						"case",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"mark",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"sinf",
						"ss01",
						"ss02",
						"ss03",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 86872
				}
			],
			"name": "Alegreya Sans SC"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 150512
				}
			],
			"name": "Alice"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"titl"
					],
					"weight": 400,
					"filesize": 56460
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 115328
				}
			],
			"name": "Allan"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 68744
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 35324
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 36732
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 35496
				}
			],
			"name": "Almendra"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 608236
				},
				{
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
					"filesize": 620348
				},
				{
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
					"filesize": 602420
				},
				{
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
					"filesize": 606816
				}
			],
			"name": "Amiri"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 76228
				},
				{
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
					"filesize": 76476
				},
				{
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
					"filesize": 132144
				},
				{
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
					"filesize": 76388
				}
			],
			"name": "Andada"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 1469776
				}
			],
			"name": "Andika"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 26764
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 29568
				}
			],
			"name": "Arapey"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 436876
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 441484
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 439272
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 435744
				}
			],
			"name": "Arimo"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"ss01"
					],
					"weight": 400,
					"filesize": 104340
				},
				{
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filesize": 110272
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"ss01"
					],
					"weight": 700,
					"filesize": 105924
				},
				{
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 113080
				}
			],
			"name": "Arvo"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 70900
				}
			],
			"name": "Audiowide"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 37836
				}
			],
			"name": "Average"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 44012
				}
			],
			"name": "Average Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 27820
				}
			],
			"name": "Belleza"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 300,
					"filesize": 55248
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 57656
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 59272
				}
			],
			"name": "BenchNine"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 58364
				}
			],
			"name": "Berkshire Swash"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 59444
				}
			],
			"name": "Bigelow Rules"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 45688
				}
			],
			"name": "Bruno Ace"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 44608
				}
			],
			"name": "Bruno Ace SC"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 400,
					"filesize": 188320
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 400,
					"filesize": 190744
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 500,
					"filesize": 176076
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 500,
					"filesize": 183844
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 600,
					"filesize": 173020
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 600,
					"filesize": 181880
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 700,
					"filesize": 172576
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"smcp"
					],
					"weight": 700,
					"filesize": 176992
				}
			],
			"name": "Cabin"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 400,
					"filesize": 153128
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 500,
					"filesize": 167004
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 600,
					"filesize": 168732
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"smcp"
					],
					"weight": 700,
					"filesize": 166912
				}
			],
			"name": "Cabin Condensed"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 163116
				}
			],
			"name": "Cantora One"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 400468
				},
				{
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
					"filesize": 262868
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 348320
				}
			],
			"name": "Cardo"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 45828
				}
			],
			"name": "Changa"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 22716
				},
				{
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filesize": 26728
				}
			],
			"name": "Changa One"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"onum",
						"smcp"
					],
					"weight": 400,
					"filesize": 40056
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga",
						"onum",
						"smcp"
					],
					"weight": 400,
					"filesize": 44272
				}
			],
			"name": "Chau Philomene One"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 168256
				}
			],
			"name": "Clara"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 64012
				}
			],
			"name": "Clicker Script"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 86992
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 800,
					"filesize": 90476
				}
			],
			"name": "Coda"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 36000
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"onum",
						"smcp"
					],
					"weight": 700,
					"filesize": 139588
				}
			],
			"name": "Corben"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 79556
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 900,
					"filesize": 82652
				}
			],
			"name": "Coustard"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 54744
				}
			],
			"name": "Croissant One"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"style": "normal",
					"features": [
						"fina",
						"init",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filesize": 116580
				},
				{
					"style": "normal",
					"features": [
						"fina",
						"init",
						"kern",
						"liga",
						"salt"
					],
					"weight": 700,
					"filesize": 115568
				}
			],
			"name": "Dancing Script"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 67240
				}
			],
			"name": "Devonshire"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 72348
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 61304
				}
			],
			"name": "Dhyana"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 137880
				},
				{
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
					"filesize": 146200
				}
			],
			"name": "Domine"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 135140
				},
				{
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
					"filesize": 136376
				},
				{
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
					"filesize": 136940
				},
				{
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
					"filesize": 136444
				},
				{
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
					"filesize": 135520
				},
				{
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
					"filesize": 136412
				},
				{
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
					"filesize": 137200
				}
			],
			"name": "Dosis"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark"
					],
					"weight": 400,
					"filesize": 227928
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark"
					],
					"weight": 700,
					"filesize": 222592
				}
			],
			"name": "Droid Sans Ethiopic"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 53148
				}
			],
			"name": "Dynalight"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 78000
				}
			],
			"name": "Eagle Lake"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 26756
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 27692
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 27196
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 27024
				}
			],
			"name": "Economica"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 182200
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 200,
					"filesize": 185096
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 191308
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 191792
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 196808
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 600,
					"filesize": 198768
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 196084
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 195652
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 187296
				}
			],
			"name": "Encode Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 189756
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 200,
					"filesize": 201992
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 203556
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 207864
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 211064
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 600,
					"filesize": 209888
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 218188
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 217076
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 199100
				}
			],
			"name": "Encode Sans Compressed"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 199528
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 200,
					"filesize": 204924
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 210480
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 212176
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 214360
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 600,
					"filesize": 219864
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 222876
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 218908
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 207636
				}
			],
			"name": "Encode Sans Condensed"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 200976
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 200,
					"filesize": 209080
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 215616
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 215632
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 216640
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 600,
					"filesize": 224680
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 218304
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 219104
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 207824
				}
			],
			"name": "Encode Sans Narrow"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 100,
					"filesize": 204296
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 200,
					"filesize": 206716
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 300,
					"filesize": 214308
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 400,
					"filesize": 218928
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 500,
					"filesize": 218812
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 600,
					"filesize": 220696
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 700,
					"filesize": 218508
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 800,
					"filesize": 218868
				},
				{
					"style": "normal",
					"features": [
						"c2sc",
						"dnom",
						"frac",
						"kern",
						"liga",
						"lnum",
						"numr",
						"onum",
						"ordn",
						"pnum",
						"salt",
						"sinf",
						"smcp",
						"ss01",
						"sups",
						"tnum"
					],
					"weight": 900,
					"filesize": 211300
				}
			],
			"name": "Encode Sans Wide"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 76408
				}
			],
			"name": "Engagement"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 53048
				}
			],
			"name": "Englebert"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 93100
				},
				{
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
					"filesize": 104444
				},
				{
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
					"filesize": 93444
				},
				{
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
					"filesize": 106936
				},
				{
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
					"filesize": 98124
				},
				{
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
					"filesize": 107040
				},
				{
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
					"filesize": 93848
				},
				{
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
					"filesize": 104188
				},
				{
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
					"filesize": 98136
				},
				{
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
					"filesize": 106744
				},
				{
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
					"filesize": 96740
				},
				{
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
					"filesize": 106552
				},
				{
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
					"filesize": 96268
				},
				{
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
					"filesize": 105140
				},
				{
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
					"filesize": 95732
				},
				{
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
					"filesize": 104552
				},
				{
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
					"filesize": 91504
				},
				{
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
					"filesize": 101132
				}
			],
			"name": "Exo"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 100,
					"filesize": 101776
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 100,
					"filesize": 111284
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 200,
					"filesize": 106856
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 200,
					"filesize": 110208
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 300,
					"filesize": 104148
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 300,
					"filesize": 108544
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 400,
					"filesize": 106380
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 400,
					"filesize": 111136
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 500,
					"filesize": 107196
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 500,
					"filesize": 111380
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 600,
					"filesize": 108868
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 600,
					"filesize": 111204
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 700,
					"filesize": 109136
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 700,
					"filesize": 111056
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 800,
					"filesize": 110068
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 800,
					"filesize": 113468
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"mark"
					],
					"weight": 900,
					"filesize": 109776
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"mark"
					],
					"weight": 900,
					"filesize": 111492
				}
			],
			"name": "Exo 2"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 119216
				},
				{
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
					"filesize": 96364
				}
			],
			"name": "Fanwood Text"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 51900
				}
			],
			"name": "Fascinate"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 59604
				}
			],
			"name": "Fascinate Inline"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 45304
				}
			],
			"name": "Faster One"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 45144
				}
			],
			"name": "Fenix"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 300,
					"filesize": 158520
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 300,
					"filesize": 162140
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filesize": 158584
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filesize": 162248
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 500,
					"filesize": 158552
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 500,
					"filesize": 162312
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 700,
					"filesize": 158444
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"c2sc",
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
						"pnum",
						"smcp",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 700,
					"filesize": 161912
				}
			],
			"name": "Fira Sans"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 87160
				},
				{
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
					"filesize": 78760
				}
			],
			"name": "Fondamento"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 121088
				}
			],
			"name": "Freckle Face"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filesize": 43500
				}
			],
			"name": "Fredoka One"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 191168
				}
			],
			"name": "GFS Didot"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 460072
				},
				{
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
					"filesize": 369060
				},
				{
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
					"filesize": 344708
				},
				{
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
					"filesize": 362080
				}
			],
			"name": "GFS Neohellenic"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"calt",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 400,
					"filesize": 53332
				}
			],
			"name": "Gabriela"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"ss01"
					],
					"weight": 400,
					"filesize": 51552
				}
			],
			"name": "Gafata"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 58104
				}
			],
			"name": "Galindo"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 36804
				}
			],
			"name": "Gilda Display"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 63012
				}
			],
			"name": "Glass Antiqua"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"ss01"
					],
					"weight": 400,
					"filesize": 73496
				}
			],
			"name": "Goudy Bookletter 1911"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 65012
				}
			],
			"name": "Grand Hotel"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 36260
				}
			],
			"name": "Habibi"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 184176
				}
			],
			"name": "Hanalei"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 92108
				}
			],
			"name": "Hanalei Fill"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 92596
				}
			],
			"name": "Henny Penny"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 132940
				}
			],
			"name": "Hermeneus One"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 24912
				}
			],
			"name": "Imprima"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 315392
				},
				{
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
					"filesize": 218164
				},
				{
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
					"filesize": 218124
				},
				{
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
					"filesize": 224440
				}
			],
			"name": "Istok Web"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 153680
				}
			],
			"name": "Jim Nightshade"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 48608
				}
			],
			"name": "Jockey One"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 45584
				}
			],
			"name": "Joti One"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 220844
				},
				{
					"style": "italic",
					"features": [
						"abvm",
						"blwm",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 212008
				},
				{
					"style": "normal",
					"features": [
						"abvm",
						"blwm",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 195504
				}
			],
			"name": "Judson"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 192544
				}
			],
			"name": "Just Another Hand"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"onum"
					],
					"weight": 400,
					"filesize": 16816
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"onum"
					],
					"weight": 400,
					"filesize": 18548
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"onum"
					],
					"weight": 700,
					"filesize": 17868
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"onum"
					],
					"weight": 700,
					"filesize": 18672
				}
			],
			"name": "Karla"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 210672
				}
			],
			"name": "Kaushan Script"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"titl"
					],
					"weight": 400,
					"filesize": 49536
				}
			],
			"name": "Lancelot"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 100,
					"filesize": 115316
				},
				{
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 100,
					"filesize": 91460
				},
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 300,
					"filesize": 122524
				},
				{
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 300,
					"filesize": 91600
				},
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 400,
					"filesize": 120196
				},
				{
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 400,
					"filesize": 118352
				},
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 700,
					"filesize": 121788
				},
				{
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 700,
					"filesize": 120312
				},
				{
					"style": "normal",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 900,
					"filesize": 114588
				},
				{
					"style": "italic",
					"features": [
						"case",
						"kern",
						"liga",
						"sups"
					],
					"weight": 900,
					"filesize": 111616
				}
			],
			"name": "Lato"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 400,
					"filesize": 69216
				}
			],
			"name": "League Script"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 114320
				},
				{
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filesize": 34212
				},
				{
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
					"filesize": 113684
				}
			],
			"name": "Lekton"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 160364
				},
				{
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
					"filesize": 175480
				},
				{
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
					"filesize": 161104
				}
			],
			"name": "Libre Baskerville"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 160736
				},
				{
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
					"filesize": 192152
				},
				{
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
					"filesize": 169340
				}
			],
			"name": "Libre Caslon Text"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 400,
					"filesize": 198256
				},
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 700,
					"filesize": 179864
				},
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 800,
					"filesize": 212396
				}
			],
			"name": "Life Savers"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 124844
				},
				{
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
					"filesize": 94540
				}
			],
			"name": "Linden Hill"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filesize": 140856
				}
			],
			"name": "Lobster"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filesize": 254332
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filesize": 249896
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 700,
					"filesize": 241104
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 700,
					"filesize": 235632
				}
			],
			"name": "Lobster Two"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 73728
				}
			],
			"name": "Luckiest Guy"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 60928
				}
			],
			"name": "Maiden Orange"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 46004
				}
			],
			"name": "Marcellus"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 47888
				}
			],
			"name": "Marcellus SC"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 148820
				}
			],
			"name": "Margarine"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern"
					],
					"weight": 400,
					"filesize": 28216
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 27708
				}
			],
			"name": "Mate"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern"
					],
					"weight": 400,
					"filesize": 29856
				}
			],
			"name": "Mate SC"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 54504
				}
			],
			"name": "McLaren"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 41076
				},
				{
					"style": "normal",
					"features": [],
					"weight": 700,
					"filesize": 35032
				}
			],
			"name": "Merienda"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 300,
					"filesize": 46900
				},
				{
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
					"filesize": 53492
				},
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 400,
					"filesize": 46576
				},
				{
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
					"filesize": 53140
				},
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 700,
					"filesize": 46796
				},
				{
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
					"filesize": 59316
				},
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern"
					],
					"weight": 900,
					"filesize": 46816
				},
				{
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
					"filesize": 52432
				}
			],
			"name": "Merriweather"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 74340
				}
			],
			"name": "Mervale Script"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 209948
				}
			],
			"name": "Milonga"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 65464
				}
			],
			"name": "Molengo"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 43604
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 48752
				}
			],
			"name": "Monda"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 77192
				}
			],
			"name": "Montez"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 100,
					"filesize": 51812
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 300,
					"filesize": 52824
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filesize": 53224
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 700,
					"filesize": 55024
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"dnom",
						"frac",
						"kern",
						"liga",
						"mark",
						"numr",
						"ordn",
						"sups"
					],
					"weight": 900,
					"filesize": 53680
				}
			],
			"name": "Montserrat"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 55932
				}
			],
			"name": "Mouse Memoirs"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 173224
				}
			],
			"name": "New Rocker"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern",
						"liga",
						"onum"
					],
					"weight": 400,
					"filesize": 384848
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 207540
				}
			],
			"name": "News Cycle"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 65140
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 92032
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 500,
					"filesize": 67844
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 500,
					"filesize": 89920
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 61516
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 86172
				}
			],
			"name": "Nobile"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 43652
				}
			],
			"name": "Nosifer Caps"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 306788
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 279300
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 311508
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 290480
				}
			],
			"name": "Noto Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 306804
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 279284
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 311496
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 290452
				}
			],
			"name": "Noto Sans UI"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 379228
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 353736
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 399668
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 363928
				}
			],
			"name": "Noto Serif"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 173520
				},
				{
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
					"filesize": 161228
				}
			],
			"name": "OFL Sorts Mill Goudy TT"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 30840
				}
			],
			"name": "Offside"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [],
					"weight": 400,
					"filesize": 64784
				},
				{
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
					"filesize": 65852
				},
				{
					"style": "normal",
					"features": [],
					"weight": 700,
					"filesize": 65924
				}
			],
			"name": "Old Standard TT"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 221108
				},
				{
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
					"filesize": 210804
				},
				{
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
					"filesize": 264372
				}
			],
			"name": "Open Sans Condensed"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 39484
				},
				{
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
					"filesize": 39816
				},
				{
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
					"filesize": 38580
				},
				{
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
					"filesize": 37584
				}
			],
			"name": "Orbitron"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 80320
				},
				{
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
					"filesize": 87000
				}
			],
			"name": "Oregano"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 57792
				}
			],
			"name": "Original Surfer"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 300,
					"filesize": 44740
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 400,
					"filesize": 50944
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 53056
				}
			],
			"name": "Oswald"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 300,
					"filesize": 43852
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 48092
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 48812
				}
			],
			"name": "Oxygen"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 442960
				},
				{
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
					"filesize": 436452
				},
				{
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
					"filesize": 470240
				},
				{
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
					"filesize": 375204
				}
			],
			"name": "PT Sans"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 387192
				},
				{
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
					"filesize": 398780
				}
			],
			"name": "PT Sans Caption"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 396212
				},
				{
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
					"filesize": 487720
				}
			],
			"name": "PT Sans Narrow"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 359048
				},
				{
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
					"filesize": 375356
				},
				{
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
					"filesize": 339996
				},
				{
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
					"filesize": 337580
				}
			],
			"name": "PT Serif"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 399840
				},
				{
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
					"filesize": 406612
				}
			],
			"name": "PT Serif Caption"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 42340
				}
			],
			"name": "Paprika"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 61248
				}
			],
			"name": "Parisienne"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 59600
				}
			],
			"name": "Peralta"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 175068
				}
			],
			"name": "Petit Formal Script"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"frac",
						"kern"
					],
					"weight": 400,
					"filesize": 257540
				},
				{
					"style": "italic",
					"features": [
						"frac",
						"kern"
					],
					"weight": 400,
					"filesize": 240984
				},
				{
					"style": "normal",
					"features": [
						"frac",
						"kern"
					],
					"weight": 700,
					"filesize": 211380
				},
				{
					"style": "italic",
					"features": [
						"frac",
						"kern"
					],
					"weight": 700,
					"filesize": 220080
				}
			],
			"name": "Philosopher"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 216264
				},
				{
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
					"filesize": 208732
				},
				{
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
					"filesize": 222412
				},
				{
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
					"filesize": 215552
				},
				{
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
					"filesize": 219588
				},
				{
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
					"filesize": 212048
				}
			],
			"name": "Playfair Display"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 153236
				},
				{
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
					"filesize": 149740
				},
				{
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
					"filesize": 157092
				},
				{
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
					"filesize": 154024
				},
				{
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
					"filesize": 155088
				},
				{
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
					"filesize": 155512
				}
			],
			"name": "Playfair Display SC"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 200920
				}
			],
			"name": "Poetsen One"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 31136
				}
			],
			"name": "Prociono"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 62868
				}
			],
			"name": "Purple Purse"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 158200
				},
				{
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
					"filesize": 164948
				}
			],
			"name": "Quattrocento"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 98340
				},
				{
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
					"filesize": 108700
				},
				{
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
					"filesize": 100560
				},
				{
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
					"filesize": 100748
				}
			],
			"name": "Quattrocento Sans"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 73892
				}
			],
			"name": "Quintessential"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga",
						"salt",
						"ss01"
					],
					"weight": 400,
					"filesize": 145796
				}
			],
			"name": "Racing Sans One"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 90328
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 90744
				}
			],
			"name": "Radley"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"weight": 100,
					"filesize": 175316
				},
				{
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
					"weight": 200,
					"filesize": 174176
				},
				{
					"style": "italic",
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
					"weight": 250,
					"filesize": 141688
				},
				{
					"style": "italic",
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
					"weight": 250,
					"filesize": 141964
				},
				{
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
					"weight": 300,
					"filesize": 180680
				},
				{
					"style": "italic",
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
					"weight": 300,
					"filesize": 146512
				},
				{
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
					"filesize": 176188
				},
				{
					"style": "italic",
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
					"filesize": 144500
				},
				{
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
					"weight": 500,
					"filesize": 178116
				},
				{
					"style": "italic",
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
					"weight": 500,
					"filesize": 146304
				},
				{
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
					"weight": 600,
					"filesize": 177968
				},
				{
					"style": "italic",
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
					"weight": 600,
					"filesize": 145556
				},
				{
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
					"weight": 700,
					"filesize": 176280
				},
				{
					"style": "italic",
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
					"weight": 700,
					"filesize": 146180
				},
				{
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
					"weight": 800,
					"filesize": 174492
				},
				{
					"style": "italic",
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
					"weight": 800,
					"filesize": 145532
				},
				{
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
					"weight": 900,
					"filesize": 177664
				},
				{
					"style": "italic",
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
					"weight": 900,
					"filesize": 145676
				}
			],
			"name": "Raleway"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 465136
				}
			],
			"name": "Raleway Dots"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 30420
				}
			],
			"name": "Rammetto One"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 167420
				}
			],
			"name": "Ranchers"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 79220
				}
			],
			"name": "Redressed"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 78492
				}
			],
			"name": "Ribeye"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 84896
				}
			],
			"name": "Ribeye Marrow"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 59392
				}
			],
			"name": "Risque"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp"
					],
					"weight": 100,
					"filesize": 130044
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga",
						"lnum",
						"smcp"
					],
					"weight": 100,
					"filesize": 132376
				},
				{
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
					"filesize": 140276
				},
				{
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
					"filesize": 145932
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern"
					],
					"weight": 400,
					"filesize": 145348
				},
				{
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
					"filesize": 148540
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern"
					],
					"weight": 500,
					"filesize": 137308
				},
				{
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
					"filesize": 147876
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"kern"
					],
					"weight": 700,
					"filesize": 135820
				},
				{
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
					"filesize": 144700
				},
				{
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
					"filesize": 142472
				},
				{
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
					"filesize": 149644
				}
			],
			"name": "Roboto"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 141384
				},
				{
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
					"filesize": 145104
				},
				{
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
					"filesize": 140396
				},
				{
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
					"filesize": 144404
				},
				{
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
					"filesize": 141796
				},
				{
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
					"filesize": 145256
				}
			],
			"name": "Roboto Condensed"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 181156
				},
				{
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
					"filesize": 179096
				},
				{
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
					"filesize": 169064
				},
				{
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
					"filesize": 170616
				}
			],
			"name": "Roboto Slab"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 300,
					"filesize": 24760
				},
				{
					"style": "normal",
					"features": [],
					"weight": 400,
					"filesize": 56716
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 62696
				}
			],
			"name": "Rokkitt"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 52528
				}
			],
			"name": "Romanesco"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 62704
				},
				{
					"style": "italic",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 61588
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 43316
				},
				{
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
					"filesize": 62672
				}
			],
			"name": "Rosario"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"lig\t"
					],
					"weight": 400,
					"filesize": 41344
				},
				{
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 400,
					"filesize": 39244
				}
			],
			"name": "Rosarivo"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 61812
				}
			],
			"name": "Rum Raisin"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 79696
				}
			],
			"name": "Sacramento"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"fina",
						"init",
						"kern",
						"liga",
						"swsh"
					],
					"weight": 400,
					"filesize": 56680
				}
			],
			"name": "Salsa"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filesize": 72552
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"liga",
						"salt"
					],
					"weight": 400,
					"filesize": 75212
				}
			],
			"name": "Sanchez"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"frac",
						"kern",
						"liga",
						"rlig"
					],
					"weight": 400,
					"filesize": 300108
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"frac",
						"kern",
						"liga",
						"rlig"
					],
					"weight": 400,
					"filesize": 98848
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"frac",
						"kern",
						"liga",
						"rlig"
					],
					"weight": 700,
					"filesize": 244956
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"frac",
						"kern",
						"liga",
						"rlig"
					],
					"weight": 700,
					"filesize": 99568
				}
			],
			"name": "Sarabun"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 400,
					"filesize": 37072
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"kern",
						"onum"
					],
					"weight": 400,
					"filesize": 38808
				}
			],
			"name": "Sedan"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"kern"
					],
					"weight": 400,
					"filesize": 162872
				}
			],
			"name": "Sevillana"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 91940
				},
				{
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
					"filesize": 76608
				},
				{
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
					"filesize": 91048
				},
				{
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
					"filesize": 75836
				}
			],
			"name": "Share"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 29536
				}
			],
			"name": "Share Tech"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 71672
				}
			],
			"name": "Shojumaru"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filesize": 134108
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"frac",
						"liga",
						"ordn",
						"sups"
					],
					"weight": 400,
					"filesize": 126988
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga"
					],
					"weight": 900,
					"filesize": 124700
				},
				{
					"style": "italic",
					"features": [
						"aalt",
						"cpsp",
						"frac",
						"kern",
						"liga"
					],
					"weight": 900,
					"filesize": 123036
				}
			],
			"name": "Simonetta"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 25712
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 26016
				}
			],
			"name": "Sintony"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"frac",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 55796
				}
			],
			"name": "Slabo 13px"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"frac",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 56088
				}
			],
			"name": "Slabo 27px"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 75212
				},
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 800,
					"filesize": 74228
				}
			],
			"name": "Sniglet"
		},
		{
			"category": "Serif",
			"variants": [
				{
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
					"filesize": 121372
				},
				{
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
					"filesize": 105684
				}
			],
			"name": "Sorts Mill Goudy"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 150528
				},
				{
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
					"filesize": 117140
				},
				{
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
					"filesize": 150244
				},
				{
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
					"filesize": 116960
				},
				{
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
					"filesize": 149972
				},
				{
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
					"filesize": 117328
				},
				{
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
					"filesize": 149636
				},
				{
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
					"filesize": 116424
				},
				{
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
					"filesize": 148932
				},
				{
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
					"filesize": 116192
				},
				{
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
					"filesize": 148368
				},
				{
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
					"filesize": 116360
				}
			],
			"name": "Source Sans Pro"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"case",
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
						"size",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 400,
					"filesize": 113640
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"case",
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
						"size",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 600,
					"filesize": 114352
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"case",
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
						"size",
						"subs",
						"sups",
						"tnum",
						"zero"
					],
					"weight": 700,
					"filesize": 113188
				}
			],
			"name": "Source Serif Pro"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 166224
				}
			],
			"name": "Special Elite"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 67244
				}
			],
			"name": "Spicy Rice"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 75356
				}
			],
			"name": "Stalemate"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 40272
				}
			],
			"name": "Stint Ultra Condensed"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 42788
				}
			],
			"name": "Stint Ultra Expanded"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 135248
				},
				{
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
					"filesize": 136484
				},
				{
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
					"filesize": 137048
				},
				{
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
					"filesize": 136552
				},
				{
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
					"filesize": 135624
				},
				{
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
					"filesize": 136188
				},
				{
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
					"filesize": 136976
				}
			],
			"name": "Terminal Dosis"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 109500
				}
			],
			"name": "Terminal Dosis Light"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 475996
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 400,
					"filesize": 456156
				},
				{
					"style": "normal",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 452284
				},
				{
					"style": "italic",
					"features": [
						"ccmp",
						"kern",
						"mark",
						"mkmk"
					],
					"weight": 700,
					"filesize": 457320
				}
			],
			"name": "Tinos"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 200,
					"filesize": 63124
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 200,
					"filesize": 67788
				},
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 300,
					"filesize": 64032
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 300,
					"filesize": 71720
				},
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 400,
					"filesize": 63752
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 400,
					"filesize": 72416
				},
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 600,
					"filesize": 63044
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 600,
					"filesize": 71812
				},
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 700,
					"filesize": 59908
				},
				{
					"style": "italic",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 700,
					"filesize": 69796
				},
				{
					"style": "normal",
					"features": [
						"case",
						"cpsp",
						"frac",
						"kern",
						"locl"
					],
					"weight": 900,
					"filesize": 49356
				}
			],
			"name": "Titillium Web"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 143880
				}
			],
			"name": "Trocchi"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"frac",
						"kern",
						"liga",
						"locl"
					],
					"weight": 400,
					"filesize": 137224
				},
				{
					"style": "italic",
					"features": [
						"frac",
						"kern",
						"liga",
						"locl"
					],
					"weight": 400,
					"filesize": 218664
				},
				{
					"style": "normal",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 93532
				},
				{
					"style": "italic",
					"features": [
						"kern"
					],
					"weight": 700,
					"filesize": 111540
				}
			],
			"name": "Tuffy"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 415552
				},
				{
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
					"filesize": 409608
				},
				{
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
					"filesize": 353824
				},
				{
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
					"filesize": 386440
				},
				{
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
					"filesize": 341324
				},
				{
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
					"filesize": 366992
				},
				{
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
					"filesize": 333616
				},
				{
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
					"filesize": 356980
				}
			],
			"name": "Ubuntu"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 350420
				}
			],
			"name": "Ubuntu Condensed"
		},
		{
			"category": "Display",
			"variants": [
				{
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
					"filesize": 63404
				}
			],
			"name": "Uncial Antiqua"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"abvm",
						"abvs",
						"akhn",
						"blwm",
						"calt",
						"ccmp",
						"cjct",
						"cpsp",
						"frac",
						"half",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"nukt",
						"ordn",
						"pres",
						"rkrf",
						"rphf",
						"ss02",
						"sups"
					],
					"weight": 400,
					"filesize": 166860
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"abvm",
						"abvs",
						"akhn",
						"blwm",
						"calt",
						"ccmp",
						"cjct",
						"cpsp",
						"frac",
						"half",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"nukt",
						"ordn",
						"pres",
						"rkrf",
						"rphf",
						"ss02",
						"sups"
					],
					"weight": 500,
					"filesize": 169692
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"abvm",
						"abvs",
						"akhn",
						"blwm",
						"calt",
						"ccmp",
						"cjct",
						"cpsp",
						"frac",
						"half",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"nukt",
						"ordn",
						"pres",
						"rkrf",
						"rphf",
						"ss02",
						"sups"
					],
					"weight": 700,
					"filesize": 168324
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"abvm",
						"abvs",
						"akhn",
						"blwm",
						"calt",
						"ccmp",
						"cjct",
						"cpsp",
						"frac",
						"half",
						"kern",
						"liga",
						"mark",
						"mkmk",
						"nukt",
						"ordn",
						"pres",
						"rkrf",
						"rphf",
						"ss02",
						"sups"
					],
					"weight": 900,
					"filesize": 166348
				}
			],
			"name": "Vesper Libre"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 173604
				}
			],
			"name": "Vibur"
		},
		{
			"category": "Serif",
			"variants": [
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 62004
				},
				{
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
					"filesize": 57552
				},
				{
					"style": "normal",
					"features": [
						"aalt",
						"calt",
						"dlig",
						"kern",
						"liga"
					],
					"weight": 700,
					"filesize": 68608
				},
				{
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
					"filesize": 55208
				}
			],
			"name": "Vollkorn"
		},
		{
			"category": "Display",
			"variants": [
				{
					"style": "normal",
					"features": [
						"kern",
						"liga"
					],
					"weight": 400,
					"filesize": 99012
				}
			],
			"name": "Warnes"
		},
		{
			"category": "Sans Serif",
			"variants": [
				{
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
					"filesize": 86288
				},
				{
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
					"filesize": 92000
				},
				{
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
					"filesize": 92724
				},
				{
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
					"filesize": 90840
				}
			],
			"name": "Yanone Kaffeesatz"
		},
		{
			"category": "Handwriting",
			"variants": [
				{
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
					"filesize": 64856
				}
			],
			"name": "Yesteryear"
		}
	]

/***/ },
/* 6 */
/*!************************!*\
  !*** ./css/style.less ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./~/css-loader!./~/less-loader!./css/style.less */ 7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./~/style-loader/addStyles.js */ 8)(content, {});
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
/* 7 */
/*!*******************************************************!*\
  !*** ./~/css-loader!./~/less-loader!./css/style.less ***!
  \*******************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./~/css-loader/cssToString.js */ 11)();
	exports.push([module.id, "body,\ndiv,\ndl,\ndt,\ndd,\nul,\nol,\nli,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\npre,\nform,\nfieldset,\ninput,\np,\nblockquote,\nth,\ntd {\n  margin: 0;\n  padding: 0;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\nfieldset,\nimg {\n  border: 0;\n}\naddress,\ncaption,\ncite,\ncode,\ndfn,\nem,\nstrong,\nth,\nvar {\n  font-style: normal;\n  font-weight: normal;\n}\nol,\nul {\n  list-style: none;\n}\ncaption,\nth {\n  text-align: left;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: 100%;\n  font-weight: normal;\n}\nq:before,\nq:after {\n  content: '';\n}\na,\na:link,\na:visited,\na:active,\na:hover {\n  outline: none;\n}\n:focus {\n  outline: none;\n}\nhtml {\n  text-rendering: optimizeLegibility;\n}\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: #f8f8f8;\n  color: #222;\n}\n.ui {\n  display: -webkit-flex;\n  display: -moz-flex;\n  display: -ms-flexbox;\n  display: -ms-flex;\n  display: flex;\n  min-height: 100vh;\n}\n.ui > * {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  -ms-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 60px 30px;\n}\n.font-selector,\n.test-selector {\n  width: 28%;\n}\n.previewer {\n  background-color: #ffffff;\n  box-shadow: 0 0 4px 0 #dddddd;\n  flex: 1;\n}\n.previewer:focus {\n  outline: none;\n}\n.preview {\n  font-size: 20px;\n  line-height: 26px;\n}\n", ""]);

/***/ },
/* 8 */
/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
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
		if(true) {
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
/* 9 */,
/* 10 */,
/* 11 */
/*!*************************************!*\
  !*** ./~/css-loader/cssToString.js ***!
  \*************************************/
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

/***/ },
/* 12 */
/*!***********************!*\
  !*** ./features.json ***!
  \***********************/
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

/***/ }
]);
//# sourceMappingURL=bundle.js.map