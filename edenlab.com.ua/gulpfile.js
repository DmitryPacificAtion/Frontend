var gulp = require('gulp'),
sass = require('gulp-sass');

var path = {
	src: {
		sass: 'dev/sass/style.scss'
	},
	watch: {
		sass: 'dev/sass/**/*.scss'
	},
	build: {
		css: 'build/css/'
	},
	clean: './build'
};

gulp.task('sass', function(){
	return gulp.src(path.src.sass)
				.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
				.pipe(gulp.dest(path.build.css));
});