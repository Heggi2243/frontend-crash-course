//1-1 宣告 fruits 陣列，並且新增一些水果。
const fruits  = ['papaya', 'kiwi', 'grape', 'guava', 'orange'];


//1-2 打印出 fruits 的每個元素。
console.log(fruits);


//1-3 將第三個水果修改為 Durian 並打印 fruits。
fruits.splice(2,1,'Durian');
console.log(fruits);


// 1-4 使用 push 方法將兩個水果添加到數組中。
fruits.push('cherry','banana');
console.log(fruits);


// 1-5 從陣列中刪除第一個水果。
fruits.splice(0,1);
//fruits.shift(); ←也可以
console.log(fruits);


// 1-6 使用 for, while 循環打印 fruits 數組中的元素。
for (let i=0; i<fruits.length; i++){
    console.log(`for-loop: ${fruits[i]}`);
};

let x = 0;
while (x < fruits.length){
    x++;
    console.log(`while-loop: ${fruits[x]}`);
};


// 1-7 宣告一個名為 numbers 的陣列，並使用 map 將每個元素設置為其平方。
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const squaredArr = numbers.map(ele => ele *ele);
console.log(`平方 = ${squaredArr}`);


// 1-8 使用 filter 過濾質數。
const isPrime =(num)=>{
    if (num <2){
        return false;
    }
   for (let n = 2; n <= Math.sqrt(num); n++){
        if (num % n === 0){
            return false;
        }
        return true;
    }
}
const primeArr = numbers.filter(num => isPrime(num));
console.log(`質數 = ${primeArr}`);


//1-9 使用 reduce 計算元素的總和。
const sum = numbers.reduce((acu, ele) =>{ //acu是累加器前一次的迭代
    return acu + ele;
},0)
console.log(`總和 = ${sum}`);
