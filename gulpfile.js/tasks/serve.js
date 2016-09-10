var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var url = require('url');
var config = require('../config.js');

gulp.task('serve', function() {
  browserSync.init(config.browsersync);

  var sasswatcher = gulp.watch(config.src + 'sass/**/*', ['sass']);
  var buildwatcher = gulp.watch(config.src + 'js/**/*', ['build']);
  var htmlwatcher = gulp.watch('./index.html', browserSync.reload);

  htmlwatcher.on('change', function() {setTimeout(browserSync.reload, 500)});
  sasswatcher.on('change', function() {setTimeout(browserSync.reload, 1000)});
  buildwatcher.on('change', function() {setTimeout(browserSync.reload, 3000)});
});
