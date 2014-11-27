This is a set of tools for making sense of the google font directory, because fonts.google.com isn't always as full-featured as it could be.

You can see a preview of what it extracts [here](http://htmlpreview.github.io/?https://github.com/thisarmy/fontsinfo/blob/master/fonts.html).

# DEPENDENCIES

Before you start you'll have to clone the [google font directory](https://code.google.com/p/googlefontdirectory/).

I had lots of trouble getting it to work due to the size, so I ended up cloning it to a VM somewhere in the first world and then rsyncing it. After that `hg up` works fine.

You have to also install otfinfo from [LCDF Typetools](http://www.lcdf.org/type/#typetools) to extract the opentype features supported by each font file. In OSX you can install it using homebrew with `brew install lcdf-typetools`.

# USAGE

This builds a *fonts.json* file that contains info about all the fonts, their included font variants, file sizes and supported font features as well as a *fonts.html* file that should be a bit more human readable.

# all fonts

`./import_fonts.py ~/src/googlefontdirectory`

# whitelist only

`./import_fonts.py ~/src/googlefontdirectory whitelist.txt`

Just change the paths to where things are located on your system.


