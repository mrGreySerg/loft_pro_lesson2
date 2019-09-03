#gulp additional 

### how to use and interesting hacks
1. "watch" always at the end of the task, because it does't end, and ather tasks would't begin.(or use it in gulp.parallel(it's ok)).
2. using error handler(обработчик событий) after command in which we want to catch error and don't finish process.
3. using gulp-notify + gulp-plumber(водопроводчик, сантехник) for mistakes handler.

### old 3 version.
"use strict"; - строгое соблюдение синтаксиса.
1. gulp-concat-css - соединение css файлов в один.
2. gulp-minify-css - минификация css.
3. gulp-rename - переименовывание файла. rename("main.min.css").
4. gulp-notify - сообщения об ошибках и вообще выводит сообщения, которые мы подставим в  аргумент метода ("done" напр). Еще можно установить программу grow чтобы красивое сообщение справа внизу выскакивало. ))
5. gulp-autoprefixer - добавление префиксов к свойствам css.
.pipe(autoprefixer('last 2 versions', '>1%', 'ie 9' )) - версии браузеров, которые мы бы хотели поддерживать (для каких нужны префиксы).
6. gulp-livereload - аналог browser-sync.
7. gulp-connect - запуск локального сервера.
8. c html : gulp.src('index.html').pipe(connect.reload()); - опять же как browser-sync.
9. gulp-sass - знаем.
10. gulp-uncss - удаление неиспользуемого css. src - css указываем и еще есть параметр какой html смотреть - 2с очень долгий процесс. Хотя очень удобно если подключаешь bootstrap там очень много лишних css, которых ты не использовал, и uncss удалить ненужное.
11. gulp-rev-append - боремся с кешированием. В html в link css добавляем в конце ?rev=$$hash и при изменении файла css генерируется новый хеш.
12. gulp-rev - изменение имени (связанное с хешем). Добавляет хеш прям к названию файла. Каждый раз меняется название и создается новый файл. И еще дополнительно прописываем manifest.json соответствия.
13. gulp-rev-collector - подменяет ссылку в html на ссылку из manifest. Работает совместно с п.12. и еще устанавливается много всяких модулей для чистки всех версий css. Не стоит вязаться я думаю.
14. wiredep плагин автоматически подключает новые .js модули, которые мы подключаем через gulp. Для этого в index.html прописываем <!--bower:css--> <!--endbower--> and <!--bower:js--> <!--endbower--> и после bower intall - автоматически добавляется ссылка в index.html, пропущенный через .pipe(wireder) и ещё там параметры(directory: "app/bower_components").
15. Вся локальная разработка ведется в папке app, собранный проект для отправки на hosting в папку dist.
16. gulp-useref - переносит html файл и все зависимости его, склеивая их при этом. с ним в комплекте устанавливается: 
    1. gulp-if - для фильтрации подключенных к index.html файлы.
    2. gulp-uglify - минификация js.
    3. gulp-minify-css - минификация css. как и wiredep требует определенные комментарии в index.html. Указываем путь до папки, где будут лежать склеенные файлы.
    <!--build:css css/vendor.css--> <!--endbuild--> и для main.css
    <!--build:js css/vendor.js--> <!--endbuild--> и для main.js
    и после прогона через .pipe(useref()), gulp-if, gulp-uglify, gulp-minify-css получаем готовую сборку build - круто!!!
17. gulp-sftp - для отправки файлов на хостинг.
18. Работает совместно с gulp-clean - очистка папки dist и снова сборка проекта. А за тем gulp-sftp - и все на хостинге (предварительно там прописывается хостинг, пароль и тд.)
19. Папка app содержит все исходники не минифицированные, не конкатенируемые (8 css, 10 js), но я думаю в разумных пределах. Что-то конечно можно объединить. Потом в dist минифицированные, углифицированные и тд., а потом и на хостинг. ))