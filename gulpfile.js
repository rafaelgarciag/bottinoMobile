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
		output: "../../deploy-bottino/img"
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

gulp.task("build:dataBase", function() {
	return browserify("./src/scripts/productsDatabase.js")
	.bundle()
	.pipe(source("productsDatabase.js"))
	.pipe(buffer())
	.pipe(uglify())
	.pipe(gulp.dest("./build/js"))
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
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-mujeres", function() {
	gulp.src("./build/mujeres.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-tacones", function() {
	gulp.src("./build/tacones.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-baleta", function() {
	gulp.src("./build/baleta.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-botas", function() {
	gulp.src("./build/botas.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-botin", function() {
	gulp.src("./build/botin.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-casual", function() {
	gulp.src("./build/casual.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-servicio", function() {
	gulp.src("./build/servicio.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-empresa", function() {
	gulp.src("./build/empresa.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("inline-trabajo", function() {
	gulp.src("./build/trabajo.html")
	.pipe(smoosher())
	.pipe(gulp.dest("../../deploy-bottino"));
})

gulp.task("build", ["build:css", "build:js", "build:slides", "build:dataBase", "images", "inline-home", "inline-mujeres", "inline-tacones", "inline-baleta", "inline-botas", "inline-botin", "inline-casual", "inline-empresa", "inline-servicio", "inline-trabajo"]);

gulp.task("default", ["server", "watch", "build"]);