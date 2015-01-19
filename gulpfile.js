var gulp = require('gulp');
var browserify = require('browserify');
var del = require('del');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

var paths = {
	app_js: ['./src/app.js'],
	js: ['src/*.js']
};

gulp.task('clean', function (done) {
	del(['build'], done);
});

gulp.task('scripts', ['clean'], function () {
	browserify(paths.app_js)
		.transform(reactify)
		.bundle()
		.pipe(source('../dist/bundle.js'))
		.pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
	gulp.watch(paths.js, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);