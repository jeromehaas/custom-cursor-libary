const gulp = require('gulp');
const { series, parallel, dest } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const babel = require('gulp-babel');
const del = require('del');
const plumber = require('gulp-plumber');
const notifier = require('gulp-notifier');
const svgmin = require('gulp-svgmin');
const sass = require('gulp-sass')(require('sass'));
const favicons = require('gulp-favicons');
const svgSprite = require('gulp-svg-sprite');
const gulpCopy = require('gulp-copy');
const webpackConfig = require('./webpack.config.js');
const webpackStream = require('webpack-stream');

// SOURCE PATHS
const filePaths = {
	scss: {
		src: [
			'./public/scss/configs/reset.scss', 
			'./public/scss/configs/icons.scss', 
			'./public/scss/configs/fonts.scss', 
			'./public/fonts/nucleo/nucleo.scss', 
			'./public/scss/configs/variables.scss', 
			'./public/scss/configs/keyframes.scss', 
			'./public/scss/configs/typography.scss', 
			'./public/scss/configs/mixins.scss', 
			'./public/scss/configs/global.scss', 
			'./public/media/icons/sprite/sprite.scss', 
			'./components/**/*.scss'
		],
		dist: ['./public/css']
	},
	js: {
		src: ['./public/js/main.js', './components/**/*.js'],
		dist: ['./public/js', '../craft/web/js']
	}
}

// MESSAGES FOR NOTIFIER
notifier.defaults({
	messages: {
		scss: 'CSS compiled!',
		js: "JS compiled!",
	},
	prefix: '===>',
	suffix: '<===',
	exclusions: '.map'
})

// SCSS
const scssTask = (done) => {
	gulp.src(filePaths.scss.src, {"allowEmpty": true})
	.pipe(plumber({errorHandler: notifier.error}))
	.pipe(concat('main.min.css'))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(cssnano())
	.pipe(sourcemaps.write('.'))
	.pipe(dest(filePaths.scss.dist[0]))
	.pipe(notifier.success('scss'));
	done();
}
	
// JS TASK
const jsTask = (done) => {
	gulp.src(filePaths.js.src)
		.pipe(plumber({ errorHandler: notifier.error }))
		.pipe(webpackStream(webpackConfig))
		.pipe(dest(filePaths.js.dist[0]))
		.pipe(notifier.success('js'));
	done();
}

// WATCH TASK
const watchTask = () => {
	browserSync.init({
		server: { baseDir: './' },
		open: false,
		port: 3007,
		ui: {
			port: 3008
		},
	});
	gulp.watch('./index.html').on('change', browserSync.reload);
	gulp.watch(filePaths.scss.src, scssTask).on("change", browserSync.reload);
	gulp.watch(filePaths.js.src, jsTask).on("change", browserSync.reload);
}


module.exports = {
	default: series(scssTask, jsTask, watchTask)
}