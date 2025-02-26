// 1)
let str = "String";
let num = 5;
let none;
let bool = true;
let arr = [3,3,40];
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(none));
console.log(typeof(bool));
console.log(typeof(arr));


// 2)
let x = 3;
let y = 3.5;
console.log("Equals? " + (x == y));
console.log("Less? " + (x < y));
console.log("Less then or equals? " + (x <= y));
console.log("Greater? " + (x > y));


// 3)
let a = false;
let b = null;
let c;
console.log(a, b, c);


// 4)
console.log("1" + 2 + 3); // "1" + 2 -> "1" + "2" -> "12"; "12" + 3 -> "12" + "3" -> "123"
console.log(1 + 2 + "3"); // 1 + 2 -> 3; 3 + "3" -> "3" + "3" -> "33"
console.log("1" - 2); // "1" - 2 -> 1 - 2 -> -1
console.log("1"+-2); // "1" + (-2) -> "1" + "-2" -> "1-2"
console.log("1" + "1" - "1"); // "1" + "1" -> "11"; "11" - "1" -> 11 - 1 -> 10
console.log("foo"+-"bar"); // "foo" + (-"bar") -> "foo" + NaN -> "foo" + "NaN" -> "fooNaN"
console.log(0 == "0"); // 0 == "0" -> 0 == 0 -> true
console.log(0.5 + 0.1 == 0.6); // в двоичном коде все 52 бита мантиссы совпадают; true
console.log(0.1 + 0.2 == 0.3); // расхождение в 50ом бите мантиссы; false
console.log(true + true + true == 3); // true + true -> 1 + 1 -> 2; 2 + true -> 2 + 1 -> 3; 3 == 3 -> true
console.log(true == 1); // true == 1 -> 1 == 1 -> true
console.log(true === 1); // разные типы; false 
console.log(1 < 2 < 3); // (1 < 2) < 3 -> true < 3 -> 1 < 3 -> true
console.log(3 > 2 > 1); // (3 > 2) > 1 -> true > 1 -> 1 > 1 -> false
console.log(9007199254740991 + 1 == 9007199254740991 + 2); // правая часть округляется; true 
console.log(Math.sqrt(-1) == Math.sqrt(-1)); // IEEE 754: NaN != NaN; false


// 5)
let str1 = 'Kto';
let str2 = 'ty';
let str3 = 'takoj?';
let concat = str1 + str2 + str3;
console.log(concat);


// 6)
str = "20";
a = 5;
console.log(str + a); // "20" + 5 -> "20" + "5" -> "205"
console.log(str - a); // "20" - 5 -> 20 - 5 -> 15
console.log(str * "2"); // "20" * "2" -> 20 * 2 -> 40
console.log(str/2); // "20" / 2 -> 20 / 2 -> 10


// 7)
a = "12";
b="7.15";
console.log(Math.round(Number(a)) % Math.round(Number(b)));


// 8)
function fn(x){
    return (x*x - 7*x + 10)/(x * x - 8 * x + 12);
}
console.log(fn(3));


// 9)
let email = "haha@hoho";
let bademail = "hihi.kiki";
function check(address){
    if (!address.includes('@')){
        console.log("ERROR: BAD ADDRESS")
    }
}
check(email);
check(bademail);

// 10)
let age = 20;
if(age >= 18 && age <= 30){
    console.log("Для молодежи");
}else if(age >= 1 && age <= 17){
    console.log("Для детей");
}else{
    console.log("Для всех");
}

// 11)
a = 3;
b = 5;
let max = (a > b) ? a : b;

// 12)
function crows(num){
    let suffix;
    switch (num) {
        case 1:
            suffix = 'а';
            break;
        case 2:
        case 3:
        case 4:
            suffix = 'ы';
            break;
        default:
            suffix = '';
            break;
    }
    console.log("На ветке сидит " + num + " ворон" + suffix);
}
crows(1);
crows(5);
crows(3);

// 13)
let i = 1;
while(i <= 50){
    console.log(i)
    i += 2;
}
for(let j = 1; j <= 50; console.log(j), j+=2);

// 14)
let sum = 0;
for(let i=1; i <= 15; ++i){
    if(i == 5 || i == 7){
        continue;
    }
    sum += i;
}
console.log(sum);

// 15)
x = 3;
y = 4;
let res = 1;
while(y > 0){
    res *= x;
    --y;
}
console.log(res);