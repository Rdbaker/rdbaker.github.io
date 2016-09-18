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
