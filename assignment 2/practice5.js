/* 延續上題。
創建一個名為 add color 的按鈕和 text input，當用戶點擊按紐時，
將 input 內的顏色添加到列表中。
*/
const txt = document.querySelector('#txt');
const addBtn = document.querySelector('#btn'); 
let colorBag = ['pink', 'skyblue', '#D7BEA8', 'hsl(131, 20%, 60%)', 'rgb(194, 163, 175)'];

const colorList = document.querySelector('.colorList');

const isValidColor=(color)=>{
    const s = new Option().style;
    s.color = color;
    return s.color !== '';
}


const render=()=>{
    let html = '';
    for (let i=0; i< colorBag.length; i++){
        const color = colorBag[i];
        if (isValidColor(color)){
            html += `<li><p>${colorBag[i]}</p> <div class='colorPoint'  style="background: ${colorBag[i]};"></div></li>`
        } else {
            html += `<li><p>${colorBag[i]}(錯誤)</p> <button type='button' class='colorPoint' id='deleteBtn'>刪除</button></li>`
        }
    }
    colorList.innerHTML = html;
};
render();


addBtn.addEventListener('click',(e)=>{
    if (txt.value !== ''){
        e.preventDefault();
        colorBag.push(txt.value);
        txt.value = '';

        colorList.innerHTML = '';
        render();
    }
    
});


colorList.addEventListener('click', (e) => {
    if (e.target.id === 'deleteBtn') {
        const li = e.target.closest('li');
        const index = Array.from(colorList.children).indexOf(li);
        if (index !== -1) {
            colorBag.splice(index, 1);
            render();
        }
    }
});


const clean = document.querySelector('#clean');
console.log(clean);
clean.addEventListener('click', (e)=>{
    colorBag = [];
    render();
})
