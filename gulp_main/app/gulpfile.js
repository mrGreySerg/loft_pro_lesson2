const gulp = require("gulp");
const csso = require("gulp-csso");

gulp.task('csso', function(){
    return gulp.src('./css/main.css')
    .pipe(csso())
    .pipe(gulp.dest('./build/css'));
})