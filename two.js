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
function perimeter(xs, ys){
    let perimeter = 0;
    for (var i=0; i < xs.length; ++i){
        perimeter += Math.sqrt(Math.pow(xs[i] - xs[(i + 1) % xs.length] , 2) + Math.pow(ys[i] - ys[(i+1) % xs.length] , 2));
    }
    return perimeter;
}

console.log("perimeter: " + perimeter([1, 4, 4, 1], [0, 0, 5, 5]));

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
let nums = [1,2,3,4,5];
console.log(nums.reverse());

// 7)
let stuff = ['c', 5, 2, 'b', 3, 1 ,4, 'a'];
console.log(stuff.sort());

// 8)
console.log(nums.reverse().join('+'));

// 9)
let first = [1,2,5,4,6];
let second = [8,2,5,9,5];
let sorted = first.concat(second).sort();
if (sorted.length % 2 == 0){
    console.log((sorted[sorted.length/2] + sorted[sorted.length/2 + 1])/2);
}else{
    console.log(sorted[Math.floor(sorted.length/2)]);
};

// 10)
arr = [1,5,1,0,-10,22,4];
console.log(arr);
max_index = 0;
max = arr[0];
min_index = 0;
min = arr[0];
for(i = 0; i < arr.length; ++i){
    if(arr[i] < min){
        min_index = i;
        min = arr[i];
    }else if(arr[i] > max){
        max_index = i;
        max = arr[i];
    }
}
arr[max_index] = min;
arr[min_index] = max;
console.log(arr);

// 11)
function check(arr){
    if(arr.length == 1){
        console.log(arr);
        return;
    }
    i = 1;
    while(arr[i] < arr[i-1]){
        if(i == arr.length){
            console.log(arr.reverse());
            return;
        }
        ++i;    
    }
    console.log(arr[i]);
}

// 12)
function modify(arr){
    for(i in arr){
        if(i % 2 != 0 && arr[i] > 0){
            arr[i] *= 3;
        }else if(i % 2 == 0 && arr[i] < 0){
            arr[i] *= 5;
        }
    }
}

// 13)
let matrix = [[1,3,6,7,8], 
              [3,5,6,7,7],
              [2,-2,1,-1,0],
              [1,10,-2,-6,-20],
              [10,100,1000,50,0]];
let flat = matrix.flat()
for (i in flat){
    if(flat[i] >= -5 && flat[i] <= 7){
        console.log(flat[i]);
    }
}

// 14)
sum = 0;
for(i=0; i<matrix.length; ++i){
    max = matrix[i][0];
    for(j=0; j<matrix[0].length; ++j){
        if(matrix[i][j] > max)
            max = matrix[i][j];
    }
    sum += max;
}
console.log(sum);
product = 1;
for(j=0; j < matrix[0].length; ++j){
    min = matrix[0][j];
    for(i=0; i < matrix.length; ++i){
        if(matrix[i][j] < min)
            min = matrix[i][j];
    }
    product *= min;
}
console.log(product);
let dict = {"Pushkin" : "Eugene Onegin", "Pushkin" : "Boris Godunov", "Esenin": "Hooligan", "Dostoyevky": "Crime and punishment", "Dostoyevsky" : "The Idiot"};
for (i in dict){
    console.log(i);
};