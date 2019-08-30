#bower

### how to use and interesting hacks!!!
1. npm install -g bower. 
2. bower search jquery - search plagin.
3. bower install normalize.css (jquery) - install local.
4. bower list - list of all plagins.
5. bower list --path - list url for all plugins.
6. bower update - update plugins.
7. bower uninstall jquery normalize.css -S - uninstall plugins and from file-manifest (-S).
8. bower init -y.
9. symbols in devDependencies and dependencies [~, ^, latest] which say how update versions of different plagins.
10. touch .bowerrc -> *{"directory":"./app/bower"}* where bower would save their components.
11. installing new plagins: gulp-google-cdn and main-bower-files.
12. browser-sync call from console not from gulp and some interersting hacks.
13. И снова browser-sync его методы init(), create(), и работа с локальным сервером (open server) c ним совместно. есть reload() и watch см. api, там все есть.
14. .stream() и с ним тоже разъяснение.
15. Таким образом browser-sync можно запускать как независимо, так и чере gulp. и если прописывать .init() - не сервер, а proxi (url сайта локального), то можно и php задействовать.
16. web-starter-kit - базовый шаблон, собранный для нас (посмотри).
17. и снова git. по азам и merge.
18. Теперь gulp, only 3 version. But it has description of all modules, which a use.
