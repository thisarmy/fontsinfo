This is a set of tools for making sense of the Google Font directory, because fonts.google.com isn't always as full-featured as it could be.

There is a [demo](http://thisarmy.github.com/fontsinfo) on GitHub pages.

# Dependencies

Before you start you'll have to clone the [google font directory](https://code.google.com/p/googlefontdirectory/).

I had lots of trouble getting it to work due to the size, so I ended up cloning it to a VM somewhere in the first world and then rsyncing it. After that `hg up` works fine.

You have to also install otfinfo from [LCDF Typetools](http://www.lcdf.org/type/#typetools) to extract the opentype features supported by each font file. In OSX you can install it using homebrew with `brew install lcdf-typetools`.

# Usage

This builds a *fonts.json* file that contains info about all the fonts, their included font variants, file sizes and supported font features.

Only fonts that at support kerning and at least one other feature are included. Right now a few fonts also get skipped because they don't come with woff files. Those could probably be generated if you really wanted them included in the list.

The included index.html is a demo app for testing out these fonts. The woff files are served up directly, because Google Fonts strips out all these extra features.

# all fonts

`./import_fonts.py ~/src/googlefontdirectory`

# whitelist only

`./import_fonts.py ~/src/googlefontdirectory whitelist.txt`

Just change the paths to where things are located on your system.


