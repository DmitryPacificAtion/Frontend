var gulp = require('gulp');
var sass = require('gulp-sass');
var jq = require('jquery');

gulp.task('sass', function(){
	return gulp.src('./app/sass/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('./build/css'));
	});

gulp.task('watch', 'sass');

//TODO: а работает ли?