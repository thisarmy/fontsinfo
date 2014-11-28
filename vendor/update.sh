#!/usr/bin/env bash

# there is no updated latest version url anymore, so this has to be manually
# version-bumped periodically
curl http://code.jquery.com/jquery-2.1.1.js > jquery.js

# these urls should always have the latest versions
curl http://underscorejs.org/underscore.js > underscore.js
