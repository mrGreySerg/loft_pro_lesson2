#Learning gulp 4. 

###main hints and tricks
1. Gulp - это task менеджер (менеджер задач). Сам он ничего не делает, кроме как запускает плагины, но есть и свои фишки, например gulp.watch.
Плагины можно запускать и без помощи gulp просто использую консоль.
В npm (package.json) есть позиция scripts, там можно записать вызов плагинов и без gulp.
2. Не рекомендуют ставить gulp глобально (и webpack), как раньше делали. Из за появления новых версий. А чтобы глобально обращаться к gulp глобально устанавливают gulp-cli(позволяет понять, что мы работаем с gulp, залазеит в файлы проекта и смотрит какая версия gulp установлена, что то вроде ссылки).
    1. npm rm -g gulp
    2. npm install -g gulp-cli
    3. npm install --save-dev(-D) gulp
3. tasks обязательно должны быть завершены, иначе the following tasks did not complete. Один из способов это сделать - возвратить поток (stream) используя return. Можно callback функцию использовать.
4. gulp.series - последовательное выполнение.
gulp.parallel - параллельное выполнение.
5. var gp = require("gulp-load-plugins")();
и можно остальные плагины не подключать через require, а обращаться к ним .pipe(gp.sass()) - например. "gulp - " для этих плагинов только. Забирается в node_modules, ищет плагины, начинающиеся с gulp - и подключает.
6. global.$={
    gulp: require("gulp");
} каждый модуль создает свою область видимости. Для того, чтобы иметь доступ к некоторым переменным из любого модуля используют глобальный объект - global.$. Не всем рекомендуется пользоваться.
7. Связь и вызов модулей:
gulpfile.js -> require("./gulp/tasks/sass.js")();
                $.gulp.task('sass');
    
gulp/tasks/sass.js -> module.exports = function(){
    $.gulp.task('sass', function(){
        return $.gulp.src('*.scss')
                .pipe($.gulp.dest('./build/'))
    })
}  

работает совместно с global.$.
8. wiredep и useref - классные, но есть и альтернатива.
9. npm init -y.
10. npm install -D gulp
11. npm install -D gulp-csso - удаление дублирующего кода сss.
12. .pipe - выполняются последовательно.
13. Если gulp установлен только локально, то простой вызов gulp в консоли не запустит task. Либо глобально установить gulp-cli(функция которого искать gulp плагины локально), либо используя npm.
    1. в package.json "scripts" добавляем "serg":"gulp csso", и теперь в терминале 
    npm run serg - запускается скрипт serg, и вызывает gulp сsso, gulp ищется не глобально, а уже в локальной области.
    2. убираем записи, какие добавили в scripts и устанавливаем gulp-cli глобально.
    npm install -g gulp-cli

