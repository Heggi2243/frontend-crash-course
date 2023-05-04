//5-1 宣告一個isEven的箭頭函式，需傳遞一個數字變數，如果是偶數就返回true。
const isEven =(num)=>{
	if (num % 2 ===0){
		console.log(true);
	}else{
		console.log(false);
		
	}
};
isEven(9);
isEven(22);


//5-2 宣告一個isLeapYear的箭頭函式，傳遞一個數字變數，如果是閏年就返回true。
const isLeapYear =(year)=>{
	if (year % 4 == 0 && year % 100 != 0){
		console.log(true);
	}else if (year % 400 == 0){
		console.log(true);
	} else {
		console.log(false);
	}
};
isLeapYear(2020);
isLeapYear(2004);
isLeapYear(1990);



//5-3 宣告一個isPrime的箭頭函式，傳遞一個數字變數，如果是質數就返回true。
const isPrime =(num)=>{
	if (num <= 1){
		console.log(`${num} is false`);
		return false;
	}
		for (let i = 2; i <= Math.sqrt(num); i++){
			if (num % i === 0){
				console.log(`${num} is false`);
				return false;
			}
		}
	
	console.log(`${num} is true`);
	return true;
};
isPrime(0);
isPrime(2);
isPrime(44);
isPrime(97);



//5-4 宣告一個findMax的箭頭函式，傳遞3個數字變數，回傳最大值或一樣大。

const findMax =(a,b,c)=>{
	if (a>b && a>c){
		console.log(`${a} is biggest!`);
	} else if (b>a && b>c){
		console.log(`${b} is biggest!`);
	} else if (c>a && c>b){
		console.log(`${c} is biggest!`);
	} else {
		console.log(`they are equaled.`);
	}
};
findMax(55,21,878);
findMax(999,1,1);
findMax(2,7,-5);
findMax(0,0,0);