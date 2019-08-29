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