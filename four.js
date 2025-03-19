// 1)
function ask_password(login, password, success, failure){
    reduced_pass = password.toLowerCase().replace(/[aiyueo]/g, '');
    reduced_login = login.toLowerCase().replace(/[aiyueo]/g, '');
    if(password.length - reduced_pass.length != 3){
        if(reduced_login != reduced_pass){
            failure(login, "Everything is wrong");
            return;
        }
        failure(login, "Wrong number of vowels");
        return;
    }
    if(reduced_login != reduced_pass){
        failure(login, "Wrong consonants");
        return;
    }
    success(login);
}

function failure(login, msg){
    console.log("Someone is impersonating user '" + login + "', but they made an error: '" + msg.toUpperCase() +"'.");
}

function success(login){
    console.log("Hello, " + login + "!");
}

function main(login, password){
    ask_password(login, password, success, failure);
}

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

function callback () {
    console.log('It is done!')
}

// a
console.log('start')
readConfig('myConfig', () => doQuery("select * from cities", () => httpGet('http://google.com', () => readFile('README.md', callback))));
console.log('end')

// b
console.log('start')

console.log('end')

