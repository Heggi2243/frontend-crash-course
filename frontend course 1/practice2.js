//2-1 是否大於18歲
let age = 22;

if (age >= 18){
	console.log(`can vote!`);
} else {
	console.log(`can't vote.`);
};


//2-2 奇數或偶數
let number = 20;

if (number % 2 === 0){
	console.log(`${number} is even.`);
} else {
	console.log(`${number} is odd.`);
};


//2-3 兩個數字比大小
let num1 = 10;
let num2 = 55;

if (num1 > num2){
	console.log(`${num1} is bigger than ${num2}.`);	
} else if (num1 < num2){
	console.log(`${num2} is bigger than ${num1}.`);	
} else {
	console.log(`they are equaled.`);	
};


//2-4 三個數字比大小
let x = -88;
let y = 20;
let z = 67;

if (x > y && x > z){
	console.log(`${x} is biggest number.`);	
} else if (y > x && y > z){
	console.log(`${y} is biggest number.`);	
} else if (z > x && z > y){
	console.log(`${z} is biggest number.`);	
} else {
	console.log(`they are equaled.`);	
};


//2-5 檢定數字是否在範圍內
let rangeStart = 9;
let rangeEnd = 99;
let testNum = 555;

if (testNum >= rangeStart && testNum <= rangeEnd){
	console.log(`${testNum} is  present in given range!`);
} else {
	console.log(`${testNum} is  present out of range!`);
};


//2-6 檢定是否為閏年
let year = 2004;
if (year % 4 == 0 && year % 100 != 0){
	console.log(`${year} is leap year!`);
} else if (year % 400 == 0){
	console.log(`${year} is leap year!`);
} else {
	console.log(`${year} not a leap year.`);
};