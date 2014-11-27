$ = require 'jquery'
_ = require 'underscore'
backbone = require 'backbone'
require 'backbone.marionette'

require '../css/style.less'

fonts = require '../fonts.json'
features = require '../features.json'

start = ->
  console.log features

$(document).ready start
