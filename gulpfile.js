var gulp = require("gulp");
var webserver = require("gulp-webserver");
var stylus = require("gulp-stylus");
var nib = require("nib");
var minifyCSS = require("gulp-minify-css");
var browserify = require("browserify");
var source = require("vinyl-source-stream")
var buffer = require("vinyl-buffer");
var uglify = require("gulp-uglify");
var smoosher = require("gulp-smoosher");
var imageop = require("gulp-image-optimization");

var config = {
	styles: {
		main: "./src/styles/main.styl",
		watch: "./src/styles/**/*.styl",
		output: "./build/css"
	},
	html: {
		watch: "./src/*.html"
	},
	scripts: {
		main: "./src/scripts/main.js",
		slides: "./src/scripts/jquery.slides.js",
		watch: "./src/scripts/**/*.js",
		output: "./build/js"
	},
	images: {
		watch: ["./build/img/*.png", "./build/img/*.jpg"],
		output: "./dist/img"
	}
}

gulp.task("server", function() {
	gulp.src("./build")
	.pipe(webserver({
		host: "0.0.0.0",
		port: 8080,
		livereload: true
	}))
});

gulp.task("build:css", function() {
	gulp.src(config.styles.main)
	.pipe(stylus({
		compress: true,
		use: nib(),
		"include css": true
	}))
	.pipe(minifyCSS())
	.pipe(gulp.dest(config.styles.output));
});

gulp.task("build:js", function() {
	return browserify(config.scripts.main)
	.bundle()
	.pipe(source("bundle.js"))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(config.scripts.output))
})

gulp.task("build:slides", function() {
	return browserify(config.scripts.slides)
	.bundle()
	.pipe(source("slides.js"))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest(config.scripts.output))
})

gulp.task("watch", function() {
	gulp.watch(config.images.watch, ["images"])
	gulp.watch(config.scripts.watch, ["build:js"])
	gulp.watch(config.styles.watch, ["build:css"])
	gulp.watch(config.html.watch, ["build"])
})

gulp.task("images", function() {
	gulp.src(config.images.watch)
	.pipe(imageop({
		optimizationLevel: 5,
		progressive: true,
		interlaced: true
	}))
	.pipe(gulp.dest(config.images.output));
});

gulp.task("inline-home", function() {
	gulp.src("./build/index.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("inline-mujeres", function() {
	gulp.src("./build/mujeres.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("inline-mujeres-tac", function() {
	gulp.src("./build/mujeres-tac.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("inline-032", function() {
	gulp.src("./build/032.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("inline-servicio", function() {
	gulp.src("./build/servicio.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("inline-empresa", function() {
	gulp.src("./build/empresa.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("inline-trabajo", function() {
	gulp.src("./build/trabajo.html")
	.pipe(smoosher())
	.pipe(gulp.dest("./dist"));
})

gulp.task("build", ["build:css", "build:js", "build:slides", "images", "inline-home", "inline-mujeres", "inline-mujeres-tac", "inline-032", "inline-empresa", "inline-servicio", "inline-trabajo"]);

gulp.task("default", ["server", "watch", "build"]);