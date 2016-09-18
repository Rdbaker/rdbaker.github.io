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
