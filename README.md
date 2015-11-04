Off Canvas Menu
==============

[![Join the chat at https://gitter.im/MarkRabey/rotary-text](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/MarkRabey/rotary-text?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Gitter chat](https://badges.gitter.im/MarkRabey/rotary-text.png)](https://gitter.im/MarkRabey/rotary-text "Gitter chat")

[![devDependencies](https://david-dm.org/MarkRabey/rotary-text/dev-status.svg)](https://david-dm.org/MarkRabey/rotary-text#info=devDependencies&view=table) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT) [![Issues](http://img.shields.io/github/issues/MarkRabey/rotary-text.svg)]( https://github.com/MarkRabey/rotary-text/issues )
___

Click [here](http://MarkRabey.github.io/rotary-text/) for a demo.

## What is it?
A simple JavaScript for animated text.

## Installation
### Bower

	bower install rotary-text --save

### NPM

	npm install rotary-text --save

After Bower or NPM install, copy the files from `dist/css` and `dist/js` to your project's assets folder.

### Without a Package Manager
Clone repo, or download [zip](https://github.com/MarkRabey/rotary-text/archive/master.zip).

## Usage
Example using default options:

```html
<html>
  <head>
    ...
		<link rel="stylesheet" href="path/to/css/rotary-text.min.css">
		...
  </head>
  <body>
		...
    <div class="content">

      <div class="rotary" id="rotary">
        <div class="rotary__text">
          Text Part 1
        </div>

        <div class="rotary__text">
          Text Part 2
        </div>

        <div class="rotary__text">
          Text Part 3
        </div>

        <div class="rotary__text">
          Text Part 4
        </div>
      </div>
    </div>

    <script src="path/to/js/rotary-text.min.js"></script>

    <script type="text/javascript">
      var rotaryText = new Rotary('rotary', {
        displayDuration: 1500,
        animationDuration: 450,
        animation: 'fade',
        rotations: 1,
        holdOnEnd: false
      });
    </script>
  </body>
</html>
```
## Options
A few options are available:

- `displayDuration`(ms) **Default:** `1000` - time each text item remains visible before triggering the next cycle
- `animationDuration`(ms) **Default:** `450` - the time the animations take
- `itemSelector` **Default:**  `.rotary__text` - the items
- `activeItemClass` **Default:**  `rotary__text--active` - class given to the active item
- `rotations` **Default:**  `1` - number of times to show each item. Setting to `0` will cause the text to rotate infinetly
- `animation` **Default:**  `fade` - More animation options coming soon!
- `holdOnEnd` **Default:**  `true` - continue to display the last item after all rotations are complete

## Development
Feel free to do what you'd like with this. Clone or fork the repo, type `npm install` and have your way with it. Use `grunt build` to compile Less to CSS, and lint and minify JS, and update the `dist` and `demo` folders. Use `grunt default` to run the build, and continue to watch the Less and JavaScript files for changes.


---
**Rotary Text** © 2015, Mark Rabey. Released under the [MIT] License.<br>
Authored and maintained by Mark Rabey

> [markrabey.com](http://markrabey.com) &nbsp;&middot;&nbsp;
> GitHub [@MarkRabey](https://github.com/MarkRabey) &nbsp;&middot;&nbsp;
> Twitter [@MarkRabey](https://twitter.com/MarkRabey)

[MIT]: http://mit-license.org/
