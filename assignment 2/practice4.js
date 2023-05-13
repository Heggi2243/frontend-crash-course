// 4-1 創建一個簡單的 HTML 。

// 4-2 創建一個內容為「My first DOM created.」的 p 標籤並放入 container 。

// 4-3 創建一個 ul 標籤。

// 4-4 使用 for 迴圈將三個 li(red, blue, yellow) 加入 ul 標籤中。
const colorList = document.querySelector('.colorList');
console.log(colorList);

const color = ['Red', 'Blue', 'Yellow']

for (let i = 0; i<color.length; i++){
    colorList.innerHTML += `<li style="color: ${color[i]};">${color[i]}</li>`
};