var gulp = require("gulp");//引入gulp模块化

gulp.task("default",function(){
	console.log("豆豆");
})

gulp.task("bibibibi",["default"],function(){
	console.log("真可爱");
})
gulp.task("copyHtml",function(){
	return gulp.src("src/index.html").pipe(gulp.dest("dest/html"));//把src/index.html文件复制到dest中，并在dest下自动生成一个html文件
})
gulp.task("copyAll",function(){
	return gulp.src(["src/*","!src/*.js"]).pipe(gulp.dest("dest/all"));//把src下的除了js类型的文件全部复制到dest下，并生成一个all文件
})
gulp.task( "watch",function(){//两次ctrl+c停止监听
	return gulp.watch( "src/index.html" , ["copyHtml"] );//监听任务中复制的东西，复制源变，目标也变，反过来不行，因为监听的是源文件
} )
var sass = require("gulp-sass");//把sass文件转成css文件
var concat = require("gulp-concat");//合并文件
var cssmin = require("gulp-cssmin");//压缩css文件
var imgmin = require("gulp-imagemin");//压缩图片文件
var rename = require("gulp-rename");//重命名文件
var uglify = require("gulp-uglify");//压缩js文件
gulp.task("jsmin",function(){
	return gulp.src( "src/*.js" )//找到所有js文件，合并所有js文件，压缩文件，重命名，塞src里
			   .pipe( concat("all.js") )
			   .pipe( uglify() )
			   .pipe( rename("jsmin.js") ) 
			   .pipe( gulp.dest("src") );
})
gulp.task("minCss",function(){
	return gulp.src("src/*.css")
				.pipe(cssmin('css.css'))
				.pipe(rename('mincss.css'))
				.pipe(gulp.dest("src"));
})	
