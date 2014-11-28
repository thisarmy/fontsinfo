#!/usr/bin/env bash

# there is no updated latest version url anymore, so this has to be manually
# version-bumped periodically
curl http://code.jquery.com/jquery-2.1.1.js > jquery.js

curl https://raw.githubusercontent.com/typekit/webfontloader/master/webfontloader.js > webfont.js

# these urls should always have the latest versions
curl http://underscorejs.org/underscore.js > underscore.js
curl http://backbonejs.org/backbone.js > backbone.js
curl http://marionettejs.com/downloads/backbone.marionette.js > backbone.marionette.js
