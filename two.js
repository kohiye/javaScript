// 1)
function diffPrint(a, b){
    console.log(a > b ? a - b : b - a);
}

function diffReturn(a, b){
    return a > b ? a - b : b - a;
}

diffPrint(3, 4);
console.log(diffReturn(8,4));

// 2)
function hello(age){
    //alert( age < 18 ? "Привет, малыш!" : "Здраствуйте, юноша!");
}

hello(12);

// 3)
function greatestOfThree(a, b, c){
    if(a > b){
        if (a > c){
            return a;
        }
        return c;
    }else if (b > c){
        if (b > a){
            return b;
        }
        return a;
    }
    return c;
}

console.log(greatestOfThree(1,2,3));

// 4)
let variable = "global";
function f(){
    let variable = "local"; // локальная переменная в функции имеет лок. область видимости (переопределение)
    console.log(variable); // local
}
f();
console.log(variable); // global

// 5)
function solveU(x,y,z){
    return (Math.max(x,y) + Math.max(x+y, z)) / (Math.pow(Math.max(0.5, x + z), 2));
}

// 6)
let coords = [(3, 4), (4,4), (-1, 3), (19, 19)];

// 7)
function rec(n){
    if (n == 1){
        return 1;
    }
    let sum = 0;
    while (n > 0){
        sum += rec(n - 1);
        --n;
    }
    return Math.sin(sum);
}

console.log(rec(1)); // 1
console.log(rec(2)); // sin(1)
console.log(rec(3)); // sin(1 + sin(1))

// arrays
// 1)
let arr = ["text", "moretext", "third"];
console.log(arr[2]);
console.log(arr.length);
arr.splice(1, 1);
for( i in arr){
    console.log(arr[i]);
}

// 2)
let countries = ["US", "China", "India", "Japan", "Korea"];
let populations = [330000000, 1400000000, 1400000000, 120000000, 51000000];
function print_for(){
    for(i=0; i < countries.length; ++i){
        console.log(countries[i] + " - " + populations[i]);
    }
}
function print_forIn(){
    for(i in countries){
        console.log(countries[i] + " - " + populations[i]);
    }
}
print_for();
print_forIn();

// 3)
arr = ["January", "February", "March", "April", "May", "June"];
let len = arr.pop();
console.log(arr.join(" "));
console.log(len);

// 4)
let a = [1,2,3,4,5,6,7];
let t = a.slice(0,3);
console.log(t);

// 5)
let d = a.splice(1, 3);
console.log(a);

// 6)
