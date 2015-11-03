'use strict';

var Rotary = function(id, options) {
  return this.init(document.getElementById(id), options);
};

Rotary.prototype = {
  init: function (el, options) {
    options = options || {};

    this.opts = {
      displayDuration: (typeof options.displayDuration === 'undefined') ? 1000 : options.displayDuration,
      animationDuration: (typeof options.animationDuration === 'undefined') ? 450 : options.animationDuration,
      itemSelector: (typeof options.itemSelector === 'undefined') ? '.rotary__text' : options.itemSelector,
      activeItemClass: (typeof options.activeItemClass === 'undefined') ? 'rotary__text--active' : options.activeItemClass,
      rotations: (typeof options.rotations === 'undefined') ? 1 : options.rotations,
      animation: (typeof options.animation === 'undefined') ? 'fade' : options.animation,
      holdOnEnd: (typeof options.holdOnEnd === 'undefined') ? true : options.holdOnEnd
    }; // this.opts

    this.counter = 0;
    this.el = el;

    // a collection of all of the text items
    this.$items = el.querySelectorAll(this.opts.itemSelector);
    this.numItems = this.$items.length;

    // variable to count how many times each item is displayed.
    this.rotations = [];
    var that = this;
    [].forEach.call(this.$items, function (el, i) {
      that.rotations[i] = 0;

      if (that.opts.animation) {
        el.classList.add(that.opts.animation);
        el.style.animationDuration = (that.opts.animationDuration / 1000) + 's';
      }
    });

    this.cycleText();

    return this;
  }, // init()

  cycleText: function() {
    var el = this.$items[this.counter],
        inClass = this.opts.animation + '--in',
        outClass = this.opts.animation + '--out',
        transistionClass = this.opts.animation + '--transitioning',
        that = this;

    el.addEventListener('animationend', function (e) {
      var el = e.target;
      el.classList.remove(transistionClass);

      setTimeout(function () {

        if (el.classList.contains(inClass)) {

          if (that.isComplete()) {
            el.classList.remove(inClass);

            if (!that.opts.holdOnEnd) {
              el.classList.remove(that.opts.activeItemClass);
              el.classList.add(outClass, transistionClass);
            }
          } else {

            el.classList.remove(inClass, that.opts.activeItemClass);
            el.classList.add(outClass, transistionClass);

            if (that.counter + 1 > 0) {
              that.counter = (that.counter + 1 === that.numItems) ? 0 : that.counter + 1;
            } else {
              that.counter = (that.counter - 1 < 0) ? that.numItems - 1 : that.counter - 1;
            }

            that.cycleText();
          }
        } else {
          el.classList.remove(outClass);
        }

      }, that.opts.displayDuration);
    });

    el.classList.add(this.opts.activeItemClass, inClass, transistionClass);
    this.rotations[this.counter] = this.rotations[this.counter] + 1;
  },

  isComplete: function () {
    return this.opts.rotations > 0 && this.rotations[this.numItems - 1] === this.opts.rotations;
  } // isComplete()
};
