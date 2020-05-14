const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const argv = require('yargs').argv;

const libsScripts = [
  'dev/libs/jquery/jquery-3.3.1.min.js',
];

module.exports = function libsJs(cb) {
  return libsScripts.length
    ? gulp.src(libsScripts)
      .pipe(concat('libs.js'))
      .pipe(gulpif(argv.prod, uglify()))
      .pipe(gulp.dest('dist/js/'))
    : cb();
};
