// 2-1 透過按鈕隨機顯示活動

const showActivity = document.querySelector('.showActivity');
const url1 = 'https://www.boredapi.com/api/activity';

const callActivity=()=>{
    
    fetch(url1)
    .then(response => response.json())
    .then(data =>{
        const activity = data.activity;
        showActivity.textContent = activity;
    })
    .catch(error =>{
        console.error('Error:', error);
        
    })

}

const change = document.querySelector('.change')

change.addEventListener('click',(e)=>{
    callActivity();
});


// 2-2 請使用者輸入用戶名，並且預測他的年齡

const txt = document.querySelector('.txt');
const sendAge = document.querySelector('.sendAge');
const showAge = document.querySelector('.showAge')
console.log(txt, sendAge);
let userName ='';

sendAge.addEventListener('click', (e)=>{
    if(txt.value !== ''){
        e.preventDefault();
        userName = txt.value.trim();
        console.log(userName);
        callAge();
        txt.value = '';
    } 
})


const callAge = () =>{
    const url2 = `https://api.agify.io?name=${userName}`;
    const regex = /^[a-zA-Z]+$/;

        fetch(url2)
        .then(response => response.json())
        .then(data =>{
            const age = data.age;
            if (!regex.test(userName)){
                showAge.textContent = `English only,please try again.`;
            } else if (age === null){
                showAge.innerHTML = `Can't get your age,<br>your are too unique!`
            }else if (regex.test(userName)){
                showAge.textContent = `your age sounds like ${age} 🤩`
            }
        })
        .catch(error =>{
            console.error('Error:', error);
        })
}
