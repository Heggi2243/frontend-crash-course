// 3-1 用一些標籤創造簡易的HTML。


// 3-2 使用 getElementById 獲取元素並打印。
const list = document.getElementById('list')
console.log(list);


// 3-3 使用 getElementsByClassName 獲取元素並打印所有元素。
const showFruit = document.getElementsByClassName('fruit')
console.log(showFruit);


// 3-4 使用 querySelector 獲得id並打印。
const container = document.querySelector('#container');
console.log(container);


// 3-5 使用 querySelector 獲得class並打印。
const myTitle = document.querySelector('.myTitle');
console.log(myTitle);

// 3-6 // 3-5 使用 querySelectorAll 以class獲取所有元素並打印。
const showVegetable = document.querySelectorAll('.vegetable');
console.log(showVegetable);