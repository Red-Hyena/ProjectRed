// Portfolio (Main)
const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function portfolioBuild() {
    return src('src/portfolioMain/styles/sass/*.scss')
    .pipe(sass())
    .pipe(dest('src/portfolioMain/styles/css'))
};

function portfolioWatch() {
    watch(['src/portfolioMain/styles/sass/*.scss'], portfolioBuild)
};

exports.portfolio = series(portfolioBuild, portfolioWatch);

// Care Home 
function careHomeBuild() {
    return src('src/careHomeSite/styles/sass/*.scss')
    .pipe(sass())
    .pipe(dest('src/careHomeSite/styles/css'))
};

function careHomeWatch() {
    watch(['src/careHomeSite/styles/sass/*.scss'], careHomeBuild)
};

exports.carehome = series(careHomeBuild, careHomeWatch);

// Cupcake Shop
function cupcakeBuild() {
    return src('src/cupcakeSite/styles/sass/*.scss')
    .pipe(sass())
    .pipe(dest('src/cupcakeSite/styles/css'))
};

function cupcakeWatch() {
    watch(['src/cupcakeSite/styles/sass/*.scss'], cupcakeBuild)
};

exports.cupcake = series(cupcakeBuild, cupcakeWatch);

// Sportsball FC
function sportsballBuild() {
    return src('src/sportsballSite/styles/sass/*.scss')
    .pipe(sass())
    .pipe(dest('src/sportsballSite/styles/css'))
};

function sportsballWatch() {
    watch(['src/sportsballSite/styles/sass/*.scss'], sportsballBuild)
};

exports.sportsball = series(sportsballBuild, sportsballWatch);

// Cupcake JS Concat
const jsBundle = () => 
    src(['src/cupcakeSite/js/transitionScript.js',
        'src/cupcakeSite/js/costUpdateScript.js',
        'src/cupcakeSite/js/textIcingScript.js'    
])
.pipe(concat('concatScript.js'))
.pipe(dest('src/cupcakeSite/js'));

exports.jsBundle = jsBundle;