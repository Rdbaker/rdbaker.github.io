var env = (process.env.ENV || 'local').toLowerCase();

var src = './src/';
var dest = './dest/';

module.exports = {
  env: {
    name: env
  },
  src: src,
  dest: dest,


  browserify: {
    src: src + 'js/app.js',
    dest: dest + 'js/',
    debug: (env !== 'production'),
    destName: 'app.js'
  },


  sass: {
    src: src + 'sass/app.sass',
    dest: dest + 'css',
    settings: {
      includePaths: [
        src + 'sass/',
        require('bourbon').includePaths,
        require('bourbon-neat').includePaths
      ]
    }
  },


  browsersync: {
    server: {
      index: './index.html'
    },
  },
};
