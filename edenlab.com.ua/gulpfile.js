var gulp = require('gulp'),
	sass = require('gulp-sass'),
	jq = require('jquery'),
	watch = require('gulp-watch');

var paths = {
  sass: ['app/scss/**/*.scss']
};

gulp.task('sass', function(){
	return gulp.src(paths)
	.pipe(scss())
	.pipe(gulp.dest('build/css'));
	});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['watch']);

//TODO: а работает ли?