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

reset.addEventListener('click',(e)=>{
    counterNum = 0;
    counter.textContent = counterNum;
});



// 1-2 todoList

const txt = document.querySelector('.txt');
const addTodoBtn = document.querySelector('.addTodoBtn');
const ul = document.querySelector('.ul');


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
    }
});

function syncData(state){
    localStorage.setItem("Heggi's toDo", JSON.stringify(state));
};

function getData(){
    return JSON.parse(localStorage.getItem("Heggi's toDo"));
};


function addNewTodo(todoId, todoItem, status) {
    if (ul.children.length >= 10) {
       alert('太多事沒做了吧！別玩了😣')
        return;
      }
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
    <img src="image/line.svg" class='line'>
    `;
    ul.append(li);
    

    const baseState = getData() || {};
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
});


const lang = 'en';
const today = new Date();
const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
};

const formattedDate = today.toLocaleString(lang, options);
const showToday = document.querySelector('.date');
showToday.textContent = formattedDate;

const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function makeTime(){
    const today = new Date();
    const catchHours = String(today.getHours()).padStart(2, '0');
    const catchMins = String(today.getMinutes()).padStart(2, '0');
    const catchSec = String(today.getSeconds()).padStart(2, '0');

    hours.textContent = catchHours;
    minutes.textContent = catchMins;
    seconds.textContent = catchSec;

}
makeTime();

setInterval(makeTime, 1000);



