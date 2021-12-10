# Changelog

---

## 0.2.1 ß (December 10, 2021)

* `./build/copier.js` Gulp task fixed
* `.template.pug` file modified: removed jQuery library by default (keep third-party libraries in the `/src/vendor` folder)

---

## 0.2.0 ß (December 10, 2021)

+ Added `/.template.pug` template file
+ Added `/data.json` file: you can keep your custom data in a single place and automate its rendering with pug
+ Added `/.scss/varlib.scss` file: common variables
+ Added [Redacted Font](https://github.com/christiannaths/Redacted-Font) support (Latin characters only!)

* Changed `/styles.scss` file: minor refactoring
* Changed `/.scss/_fonts.scss`: Redacted font added
* Changed `/package.json` file: npm tasks were modified
* Changed `/index.pug` file: implemented extending the default template file
* Changed `/gulpfile.js`: disabled automatic browser launch upon the default Gulp task run
* Changed `/.scss/copier.js` task file: copying font files with their subfolders
* Changed `/humans.txt` file
* Changed `/README.md` file
* Changed `/.stylelintrc` config file

---

## 0.1.5 ß (October 28, 2021)

* Changed `.stylelintrc` configuration file: added linting exceptions for @at-rules that might be used in .scss files

---

## 0.1.4 ß (October 20, 2021)

+ Added `./.build/copier.js`

* Changed `gulpfile.js`

---

## 0.1.3 ß (October 18, 2021)

+ Added `humans.txt`
+ Added `robots.txt`
+ Added `icon.png`, `favicon.ico`, `tile.png`, `tile-wide.png`, `browserconfig.xml`, `site.webmanifest`
+ Added `CHANGELOG.md`
+ Added `.gitattributes`

* Changed `README.md`

---

## 0.1.1 ß (October 18, 2021)

Initial release
