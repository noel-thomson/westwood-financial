var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

// compile scss into css
function style() {
  // 1. locate scss file
  return (
    gulp
      .src('./scss/**/*.scss')
      // 2. convert to css file through sass compiler
      .pipe(sass().on('error', sass.logError))
      // 2.1 pass through autoprefixer
      .pipe(autoprefixer())
      // 3. location to save compiled css
      .pipe(gulp.dest('./css'))
      // 4. stream changes to browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  gulp.watch('./scss/**/*.scss', style);
  gulp.watch('./**/*html').on('change', browserSync.reload);
  gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
