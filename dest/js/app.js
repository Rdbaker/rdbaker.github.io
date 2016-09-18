(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Pane = require('./pane.js').Pane;

(function(window, document) {
  function RDBakerSite(){
    this.panes = {
      'background': new Pane('background', 'background-content', 'background-tab'),
      'skills': new Pane('skills', 'skills-content', 'skills-tab'),
      'projects': new Pane('projects', 'projects-content', 'projects-tab')
    };

    var tabs = [
      'background-tab',
      'skills-tab',
      'projects-tab'
    ];

    for(var eltId in tabs) {
      var tab = document.getElementById(tabs[eltId]);
      tab.addEventListener('click', this.showPane.bind(this));
    }

    this.panes.background.show();
    this.activePane = this.panes.background;
  };

  RDBakerSite.prototype.showPane = function(e) {
    var paneName = e.target.id.split('-')[0];
    if(paneName === this.activePane.name)
      return;

    var newPane = this.panes[paneName];
    newPane.show();
    this.activePane.hide();
    this.activePane = newPane;
  };


  new RDBakerSite();
})(window, document, undefined);

},{"./pane.js":2}],2:[function(require,module,exports){
Pane = function(name, identifier, tabEltId) {
  this.name = name;
  this.id = identifier;
  this.tabEltId = tabEltId;
  this._elt = document.getElementById(this.id);
  this._tabElt = document.getElementById(this.tabEltId);
};

Pane.prototype.__defineGetter__('element', function() {
  if(!this._elt)
    this._elt= document.getElementById(this.id);

  return this._elt;
});

Pane.prototype.__defineGetter__('tabElt', function() {
  if(!this._tabElt)
    this._tabElt= document.getElementById(this.tabEltId);

  return this._tabElt;
});

Pane.prototype.show = function() {
  this.tabElt.classList.add('active');
  this.element.hidden = false;
};

Pane.prototype.hide = function() {
  this.tabElt.classList.remove('active');
  this.element.hidden = true;
};


module.exports = {
  'Pane': Pane
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL3BhbmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIFBhbmUgPSByZXF1aXJlKCcuL3BhbmUuanMnKS5QYW5lO1xuXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xuICBmdW5jdGlvbiBSREJha2VyU2l0ZSgpe1xuICAgIHRoaXMucGFuZXMgPSB7XG4gICAgICAnYmFja2dyb3VuZCc6IG5ldyBQYW5lKCdiYWNrZ3JvdW5kJywgJ2JhY2tncm91bmQtY29udGVudCcsICdiYWNrZ3JvdW5kLXRhYicpLFxuICAgICAgJ3NraWxscyc6IG5ldyBQYW5lKCdza2lsbHMnLCAnc2tpbGxzLWNvbnRlbnQnLCAnc2tpbGxzLXRhYicpLFxuICAgICAgJ3Byb2plY3RzJzogbmV3IFBhbmUoJ3Byb2plY3RzJywgJ3Byb2plY3RzLWNvbnRlbnQnLCAncHJvamVjdHMtdGFiJylcbiAgICB9O1xuXG4gICAgdmFyIHRhYnMgPSBbXG4gICAgICAnYmFja2dyb3VuZC10YWInLFxuICAgICAgJ3NraWxscy10YWInLFxuICAgICAgJ3Byb2plY3RzLXRhYidcbiAgICBdO1xuXG4gICAgZm9yKHZhciBlbHRJZCBpbiB0YWJzKSB7XG4gICAgICB2YXIgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFic1tlbHRJZF0pO1xuICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5zaG93UGFuZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICB0aGlzLnBhbmVzLmJhY2tncm91bmQuc2hvdygpO1xuICAgIHRoaXMuYWN0aXZlUGFuZSA9IHRoaXMucGFuZXMuYmFja2dyb3VuZDtcbiAgfTtcblxuICBSREJha2VyU2l0ZS5wcm90b3R5cGUuc2hvd1BhbmUgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIHBhbmVOYW1lID0gZS50YXJnZXQuaWQuc3BsaXQoJy0nKVswXTtcbiAgICBpZihwYW5lTmFtZSA9PT0gdGhpcy5hY3RpdmVQYW5lLm5hbWUpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgbmV3UGFuZSA9IHRoaXMucGFuZXNbcGFuZU5hbWVdO1xuICAgIG5ld1BhbmUuc2hvdygpO1xuICAgIHRoaXMuYWN0aXZlUGFuZS5oaWRlKCk7XG4gICAgdGhpcy5hY3RpdmVQYW5lID0gbmV3UGFuZTtcbiAgfTtcblxuXG4gIG5ldyBSREJha2VyU2l0ZSgpO1xufSkod2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKTtcbiIsIlBhbmUgPSBmdW5jdGlvbihuYW1lLCBpZGVudGlmaWVyLCB0YWJFbHRJZCkge1xuICB0aGlzLm5hbWUgPSBuYW1lO1xuICB0aGlzLmlkID0gaWRlbnRpZmllcjtcbiAgdGhpcy50YWJFbHRJZCA9IHRhYkVsdElkO1xuICB0aGlzLl9lbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcbiAgdGhpcy5fdGFiRWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YWJFbHRJZCk7XG59O1xuXG5QYW5lLnByb3RvdHlwZS5fX2RlZmluZUdldHRlcl9fKCdlbGVtZW50JywgZnVuY3Rpb24oKSB7XG4gIGlmKCF0aGlzLl9lbHQpXG4gICAgdGhpcy5fZWx0PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmlkKTtcblxuICByZXR1cm4gdGhpcy5fZWx0O1xufSk7XG5cblBhbmUucHJvdG90eXBlLl9fZGVmaW5lR2V0dGVyX18oJ3RhYkVsdCcsIGZ1bmN0aW9uKCkge1xuICBpZighdGhpcy5fdGFiRWx0KVxuICAgIHRoaXMuX3RhYkVsdD0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy50YWJFbHRJZCk7XG5cbiAgcmV0dXJuIHRoaXMuX3RhYkVsdDtcbn0pO1xuXG5QYW5lLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudGFiRWx0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG59O1xuXG5QYW5lLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMudGFiRWx0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gdHJ1ZTtcbn07XG5cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICdQYW5lJzogUGFuZVxufTtcbiJdfQ==

//# sourceMappingURL=src/js/app.js/app.js.map
