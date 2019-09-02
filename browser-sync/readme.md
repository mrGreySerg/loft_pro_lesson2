#browser-sync

### how to use and interesting hacks!!!

1. И снова browser-sync его методы init(), create(), и работа с локальным сервером (open server) c ним совместно. есть reload() и watch см. api, там все есть.
2. .stream() и с ним тоже разъяснение.
3. Таким образом browser-sync можно запускать как независимо, так и чере gulp. и если прописывать .init() - не сервер, а proxi (url сайта локального), то можно и php задействовать.

1. npm install -g browser-sync
2. browser-sync start --server --files "*.*" - запускаем browser-sync и указываем какие файлы он будет отслеживать.(напоминает работу как в gulp)
3. browser-sync.io - web site about bs and about api.
4. .create(name) создает среду для сервера, делая доступным остальные методы его api. 
5. .init() запускает сервер.
6. .get() дает возможность получить доступ к уже запущенному серверу из других файлов.
7. .reload() обновляет странички во всех запущенных браузерах.
8. const bs = require("browser-sync").create() - переменная обращается к browser-sync с методом create(создается окружение для использования api bs).
9. bs.init({
    server: './app'
}); запускаем server с корневой папкой ./app.
10. если мы хотим работать с полноценным сайтом (например с php и локальным сервером)  -
bs.init({
    proxy: "https://mysite.ru" ("/loc/app")
})
можем запустить любой проект через browser-sync.
11. В bs есть встроенный watch как и в gulp - свой 
весь предыд. код записывался в .js и открывался через консоль, не gulp получается.
bs.watch('*.html').on('change'. bs.reload);
12. stream() - работа с потоками - вызываем перезагрузку браузера в любом месте. bs.stream() - обновл. страницы в gulp.
sass, function(){
    bs.init({
        server: "./app"
    })
    gulp.watch('app.scss', function(){});
    gulp.watch(".html").on("change", bs.reload) - я думаю старая версия.
}