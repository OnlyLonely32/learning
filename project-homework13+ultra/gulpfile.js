var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");

gulp.task('hello', function(done){
 console.log('Hello');
 done();
});
// Static server
gulp.task('browser-sync', function() {
 browserSync.init({
     server: {
         baseDir: "./src"
     }
 });
 gulp.watch("./src/*.html").on('change', browserSync.reload);
 gulp.watch("./src/css/*.css").on('change', browserSync.reload);
});

gulp.task('minify-css', () => {
 return gulp.src('./src/css/*.css')
   .pipe(cleanCSS({compatibility: 'ie8'}))
   .pipe(rename("style.min.css"))
   .pipe(gulp.dest('./dist/css'));
});