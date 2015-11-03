Off Canvas Menu
==============
[![Gitter chat](https://badges.gitter.im/RenegadeDigital/rotary.png)](https://gitter.im/RenegadeDigital/rotary "Gitter chat")

[![devDependencies](https://david-dm.org/RenegadeDigital/rotary/dev-status.svg)](https://david-dm.org/RenegadeDigital/rotary#info=devDependencies&view=table) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Issues](http://img.shields.io/github/issues/RenegadeDigital/rotary.svg)]( https://github.com/RenegadeDigital/rotary/issues )
___

Click [here](http://renegadedigital.github.io/rotary/) for a demo.

## What is it?
A simple JavaScript for animated text.

## Installation
### Bower

	bower install rotary --save

### NPM

	npm install rotary --save

After Bower or NPM install, copy the files from `dist/css` and `dist/js` to your project's assets folder.

### Without a Package Manager
Clone repo, or download [zip](https://github.com/RenegadeDigital/rotary/archive/master.zip).

## Usage


```html
...
<html>
  <head>
    <meta charset="UTF-8">
    <title>Rotary Demo</title>
    <link rel="stylesheet" href="../dist/css/rotary.min.css">
  </head>
  <body>

    <div class="content">  <!-- For Demo Only -->
      <a href="" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored modal__trigger" data-modal="#modal">
        Launch Modal
      </a>

      <div id="modal" class="modal modal__bg">
        <div class="modal__dialog">
          <div class="modal__content">
            <div class="modal__header">
              <div class="modal__title">
                <h2 class="modal__title-text">Modal</h2>
              </div>

              <span class="mdl-button mdl-button--icon mdl-js-button  material-icons  modal__close"></span>
            </div>


            <div class="modal__text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis laboriosam accusantium facere suscipit, alias accusamus corrupti consequatur at porro, voluptates commodi sed omnis voluptatem, ex officiis illum, architecto fugiat id?
              </p>
            </div>

            <div class="modal__footer">
              <a class="mdl-button mdl-button--colored mdl-js-button  modal__close">
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="path/to/js/rotary.min.js"></script>
  </body>
</html>
```

## Development
Feel free to do what you'd like with this. Clone or fork the repo, type `npm install` and have your way with it. Use `grunt build` to compile Less to CSS, and lint and minify JS, and update the `dist` and `demo` folders. Use `grunt default` to run the build, and continue to watch the Less and JavaScript files for changes.


---
**Material Modal** © 2015, Mark Rabey. Released under the [MIT] License.<br>
Authored and maintained by Mark Rabey

> [RenegadeDigital.com](http://RenegadeDigital.com) &nbsp;&middot;&nbsp;
> GitHub [@RenegadeDigital](https://github.com/RenegadeDigital) &nbsp;&middot;&nbsp;
> Twitter [@RenegadeDigital](https://twitter.com/RenegadeDigital)

[MIT]: http://mit-license.org/
[Material Design Lite]: http://getmdl.io
