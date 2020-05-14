const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

module.exports = function script() {
  return gulp.src('dev/js/*.js')
    // .pipe(eslint())
    // .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('dist/js/'));
};
