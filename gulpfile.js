const gulp        = require('gulp');
const script      = require('./gulp/scripts');
const fonts       = require('./gulp/fonts');
const libsJs     = require('./gulp/libsjs');
const imageMinify = require('./gulp/imageMinify');
const styles      = require('./gulp/styles');
const clean       = require('./gulp/clean');
const pug2html    = require('./gulp/pug');
const serve       = require('./gulp/serve');

const dev = gulp.parallel(pug2html, script, libsJs, styles, imageMinify, fonts);

exports.default = gulp.series(
  clean,
  dev,
  serve
);
