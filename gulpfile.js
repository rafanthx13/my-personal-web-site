'use strict';
var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

// com o gulp global ativado: gulp css-build
gulp.task('css-build', function () {
  // Pega como fonte todos os arquivos css
  return gulp.src([
    './assets/css/components/*.css',
    './assets/css/tailwind/clean-tailwind.css',
    './assets/css/my-style.css'
  ])
  // Junta todos eles, cria o '.map' que ajuda a debugar e minifica
  .pipe(sourcemaps.init())
    .pipe(concat('ultimate-style.min.css'))
    .pipe(cssnano())
  .pipe(sourcemaps.write('./'))
  // destino final
  .pipe(gulp.dest('./assets/css/'));
  // indica que terminou
});