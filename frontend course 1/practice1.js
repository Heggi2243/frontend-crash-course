//1-1 定義變數並且打印結果
let sum = 2+3;
console.log(sum);

let defference = 9-1;
console.log(defference);

let answer = 22*8;
console.log(answer);

let quotient = 9/3;
console.log(quotient);

let remainder = 20 % 3;
console.log(remainder);

let num = 19;
num++;
console.log(num);

let num2 = 99;
num2--;
console.log(num2);


//1-2 定義變數並且以變數進行運算
let x = 8,y=10;
let z = x+y;
console.log(z);


//1-3 定義變數並且進行比較運算
let a = 10, b = '10';
console.log(a == b);	//會進行轉換

let c = 12, d = 22;
console.log(c != d);

let e = 99, f = '99';
console.log(e === f);	//不會進行轉換

let g = 88, h = '88';
console.log(g !== h);	//不會進行轉換


//1-4 定義變數並且進行邏輯運算
let aa = 8, bb = 3, cc = 9;
console.log(aa > bb && bb < cc);

let xx = 10, yy = 12, zz = 1;
console.log(xx > yy || xx > zz);