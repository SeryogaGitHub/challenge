const gulp = require('gulp');

// Копіюємо всі шрифти з папки dev в dist

module.exports = function fonts() {
  return gulp.src('dev/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
};
