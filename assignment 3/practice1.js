// 1-1 計數器 1hrs
const main = document.querySelector('.main');
const counter = document.querySelector('.counter');
let counterNum = 0;

main.addEventListener('click',(e)=>{
    if(e.target.textContent === '+'){
        counterNum++;
    }else if(e.target.textContent === '-'){
        counterNum--;
    }
    counter.textContent = counterNum;
});

const reset = document.querySelector('.reset');
console.log(reset);
reset.addEventListener('click',(e)=>{
    counterNum = 0;
    counter.textContent = counterNum;
});


// 1-2 todoList

const txt = document.querySelector('.txt');
const addTodoBtn = document.querySelector('.addTodoBtn');

const ul = document.querySelector('.ul') //ul


function checkLocalStorage() {
  const storedData = getData();
  if (storedData) {
    Object.values(storedData).forEach(({ id, title, status }) => {
      addNewTodo(id, title, status);
    });
  }
}
checkLocalStorage();


function generateID() {
    return new Date().getTime();
}

addTodoBtn.addEventListener('click',(e)=>{
    if(txt.value !== ''){
        e.preventDefault();
        const todoId = generateID();
        const todoItem = txt.value;
        const status = false;
        addNewTodo(todoId,todoItem,status);
        txt.value = '';
        console.log(todoId);
        
    }
})

function syncData(state){
    localStorage.setItem("Heggi's toDo", JSON.stringify(state));
};

function getData(){
    return JSON.parse(localStorage.getItem("Heggi's toDo"));
};


function addNewTodo(todoId, todoItem, status) {
    const li = document.createElement('li');
    li.setAttribute('data-id', todoId);
    li.setAttribute('class', 'checkbox');
    li.innerHTML=`
    <input type="checkbox" class='check' id="${todoId}" ${status ? 'checked' : '' } >
    <label for="${todoId}" class="label">
        <svg viewBox="0 0 65 65" height="25" width="25">
            <rect x="7" y="7" width="50" height="50" stroke="black" fill="none" />
            <g transform="translate(-23,-967.36216)" id="layer1-60">
              <path id="path4146" d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23" fill="none" stroke="black" stroke-width="3" class="path1" />
            </g>
        </svg>
        <span>${todoItem}</span>
    </label>
    <button type='button' class='btn delete'>X</button>
    `;
    ul.appendChild(li);
    

    const baseState = getData() || {}; // 如果狀態不存在，則創建一個空物件
    baseState[todoId] = { id: todoId, title: todoItem, status: status };
    syncData(baseState);
    
};

ul.addEventListener('click', (e)=>{
    const baseState = getData() || {};
    const li = e.target.closest('li');
    const id = li.getAttribute('data-id');
    
    if (e.target.classList.contains('delete')){
        ul.removeChild(li);
        delete baseState[id];
    }else if(e.target.classList.contains('check')){
        baseState[id].status = e.target.checked;
    } else {
        baseState[id].status = !baseState[id].status;
    }
    
    syncData(baseState);
})

    