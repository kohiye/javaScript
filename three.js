// 1)
//a
let user = {};
//b
user.name = "John";
//c
user.surname = "Smith";
//d
user.name = "Pete";
//e
delete user.name;

// 2)
{
var Browser = {
    name : "Microsoft Internet Explorer",
    version : "9.0"
}
for(property in Browser){
    console.log(Browser[property]);
}


// 3)
function isEmpty(obj){
    for(prop in obj){
        return true;
    }
    return false;
}
console.log(isEmpty(Browser))
console.log(isEmpty({}))
}

// 4)
const const_user = {
    name: "John"
};
//user.name = "Pete"; // менять значения свойств можно
//const_user = 123; // переопределять обьект нельзя

// 5)
function multiplyNumeric(obj){
    for (prop in obj){
        if (typeof(obj[prop]) === "number"){
            obj[prop] *= 2;
        }
    }
}

const obje = {age : 30, value : 3, name : "name"};
multiplyNumeric(obje);
console.log(obje.age);
console.log(obje.value);
console.log(obje.name);

// 6)
const calculator = {
    read : function(a, b){
        this.a = a;
        this.b = b;
    },
    sum : function(){
        return this.a + this.b;
    },
    mul : function(){
        return this.a * this.b;
    }
}

calculator.read(3, 5);
console.log(calculator.sum());
console.log(calculator.mul());

// 7)
let ladder = {
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    showStep : function(){
        console.log(this.step);
        return this;
    }
}

ladder.up().up().down().showStep().down().showStep();

// 8)
{
function Browser(name, version){
    this.name = name;
    this.version = version;
    this.aboutBrowser = function(){
        console.log(this.name + " " + this.version);
    }
}

const browser = new Browser("Microsoft Internet Explorer", "9.0");
browser.aboutBrowser();
}

// 9)
function Employee(name, dept, phone, salary){
    this.name = name;
    this.dept = dept;
    this.phone = phone;
    this.salary = salary;
    this.printInfo = function(){
        console.log("Name: " + this.name + "\nDepartment: " + this.dept
            + "\nPhone: " + this.phone + "\nSalary: " + this.salary
        )
    }
}

const employee = new Employee("Joe", "Doe", "1234 3453 44 44", "100 000");
employee.printInfo();

// 10)
function Calculator(){
    this.read = function(a, b){
        this.a = a;
        this.b = b;
    };
    this.sum = function(){
        return this.a + this.b;
    };
    this.mul = function(){
        return this.a * this.b;
    };
}

const calc = new Calculator();
calc.read(5, 4);
console.log(calc.sum());
console.log(calc.mul());

// 11)
function Accumulator(startingValue){
    this.value = startingValue;
    this.read = function(a){
        this.value += a;
    }
}
// prototypes
// 1)
{
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};

console.log(rabbit.jumps); // (1) true т.к свойство rabbit.jumps перегружает __proto__.jumps
delete rabbit.jumps;
console.log(rabbit.jumps); // (2) null т.к. __proto__.jumps ничем не перегружено
delete animal.jumps;
console.log(rabbit.jumps); // (3) undefined т.к. rabbit.jumps и __proto__.jumps оба неопределены
}

// 2)
{
let animal = {
    eat() {
        this.full = true;
    }
};
let rabbit = {
    __proto__: animal
};
rabbit.eat(); // rabbit.full = true; animal и rabbit - разные обьекты
console.log(rabbit.full);
}

// 3)
let hamster = {
    // stomach : [],  --  передовался всем наследующим обьектам
    eat(food) {
        this.stomach.push(food);
    }
};
let speedy = {
    __proto__: hamster,
    stomach: []
};
let lazy = {
    __proto__: hamster,
    stomach: []
};
speedy.eat("apple");
console.log(speedy.stomach); // apple
console.log(lazy.stomach); // apple

// 4)
{
String.prototype.size = 14;
String.prototype.write = stringWrite;
function stringWrite(){
    console.log("Size: " + this.size);
    console.log("Text: " + this.toString());
}
let string = "Some string";
string.write();
}

// 5)
{
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

//Rabbit.prototype = {}; // true ; строка меняет класс Rabbit но не меняет уже созданный обьект rabbit
//Rabbit.prototype.eats = false; // false ; строка не меняет rabbit но меняет обьект на который ссылается rabbit.__proto__ 
//delete rabbit.eats; // true ; rabbit.eats не определён
delete Rabbit.prototype.eats; // undefined ; rabbit.__proto__.eats определён и эта строка его удаляет

console.log(rabbit.eats); // true
}
// classes
// 1)
{
class Clock {
    constructor(){
        this.time = new Date();
    }
    render(){
        console.log(this.time);
    }
}

let clock = new Clock();
clock.render();
}

// 2)
class Animal {
    constructor(name) {
        this.name = name;
}
}
class Rabbit extends Animal {
    constructor(name) {
        super(name); // вместо this.name = name;
        this.created = Date.now();
}
}
let rabbit = new Rabbit("Белый кролик");
console.log(rabbit.name);

// 3)
class Clock {
    constructor(template) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
            let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
            let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
            let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock{
    constructor(template, precision = 1000){
        super(template);
        this.precision = precision;
    }
    start(){
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
let clock = new ExtendedClock("h m s", 1500);
clock.start();
clock.stop();

// 4)
class Box{
    constructor(w, v, date, id){
        this.id = id;
        this.w = w;
        this.v = v;
        this.date = date;
    }
}
class Stock{
    constructor(){
        this.stock = [];
        this.id = 0
    }
    add(w, v){
        this.stock.push(new Box(w, v, new Date().getTime(), this.id++));
    }
    getByW(min_w){
        for(var i=0; i < this.stock.length; ++i){
            if (min_w <= this.stock[i].w){
                this.stock.sort((a, b) => a.date - b.date);
                return this.stock.splice(i, 1)[0].id;
            }
        }
    }
    getByV(min_v){
        for(var i=0; i < this.stock.length; ++i){
            if (min_v <= this.stock[i].v){
                this.stock.sort((a, b) => a.date - b.date);
                return this.stock.splice(i, 1)[0].id;
            }
        }
    }

}

const stock = new Stock();
stock.add(2,2);
stock.add(4,2);
stock.add(9,2);
stock.add(10,2);
console.log(stock.getByW(9));
stock.add(4,2);
console.log(stock.getByW(9));