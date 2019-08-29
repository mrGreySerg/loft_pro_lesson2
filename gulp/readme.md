#gulp

### how to use and interesting hacks
1. "watch" always at the end of the task, because it does't end, and ather tasks would't begin.(or use it in gulp.parallel(it's ok)).
2. using error handler(обработчик событий) after command in which we want to catch error and don't finish process.
3. using gulp-notify + gulp-plumber(водопроводчик, сантехник) for mistakes handler.