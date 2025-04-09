// 1)
let promise = new Promise(function(resolve, reject) {
    resolve(1); // результат 1 передается в resolve асинхронно
    
    setTimeout(() => resolve(2), 1000); // обычный код выполняется в первую очередь; resolve второй раз не вызывается
});

promise.then(console.log); // 1, ждет 1сек и завершает

// 2)
function readConfig (name, callback) {
    setTimeout(() => {
        console.log('(1) config from ' + name + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

function doQuery (statement, callback) {
    setTimeout(() => {
        console.log('(2) SQL query executed: ' + statement)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function httpGet (url, callback) {
    setTimeout(() => {
        console.log('(3) Page retrieved: ' + url)
        callback()
    }, Math.floor(Math.random() * 1000))
}

function readFile (path, callback) {
    setTimeout(() => {
        console.log('(4) Readme file from ' + path + ' loaded')
        callback()
    }, Math.floor(Math.random() * 1000))
}

let readConfigPromise = function(name){
    return new Promise((resolve, reject) => {
        readConfig(name, () => {
            resolve();
        });
    });
}
let doQueryPromise = function(statement){
    return new Promise((resolve, reject) => {
        doQuery(statement, () => {
            resolve();
        });
    });
}
let httpGetPromise = function(url){
    return new Promise((resolve, reject) => {
        httpGet(url, () => {
            resolve();
        });
    });
}
let readFilePromise = function(path){
    return new Promise((resolve, reject) => {
        readFile(path, () => {
            resolve();
        });
    });
}

function callback () {
    console.log('It is done!')
}

console.log('start')
//readConfig('myConfig', () => doQuery("select * from cities", () => httpGet('http://google.com', () => readFile('README.md', callback))));
Promise.resolve()
    .then(() => readConfigPromise('myConfig'))
    .then(() => doQueryPromise('select * from cities'))
    .then(() => httpGetPromise('http://google.com'))
    .then(() => readFilePromise('README.md'))
    .then(() => callback());
console.log('end')

// 3)
let Promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        res = 
        resolve(res)
    }, Math.floor(Math.random() * 1000))
})