// 1-1 顯示一個訊息：使用 Promise，在延遲 1 秒後，在控制台打印出 "Hello, world!"。
setTimeout(function(){
    console.log(`1-1 Hello, world!`);
},1000)


/* 1-2 延遲執行：使用 async/await，創建一個函數，該函數將延遲 3 秒後返回一個 Promise。
       然後使用 await 來等待 Promise 完成，並在控制台打印出 "Delay complete!"。*/
const delay =()=> {
    return new Promise(res =>{
        setTimeout(() => {
            res();
        }, 3000);
    })
}
const waitForPromise = async() =>{
    await delay();
    console.log(`1-2 Delay complete!`);
}
waitForPromise();


/* 1-3 處理錯誤：創建一個 Promise，該 Promise resolve 或 reject。
       使用 async/await 在控制台打印出相應的訊息，如果 Promise 成功，則打印出 "Promise resolved!"，
       如果 Promise 失敗，則打印出 "Promise rejected!"。*/
const myPromise = (success) =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (success){
                resolve();
            }else{
                reject();
            }
            
        },2000)
    })
}
const handlePromise =  async() =>{
    myPromise(true)
        .then(() =>{
            console.log(`1-3 Promise resolved! :D`);
        }).catch(()=>{
            console.log(`1-3 Promise rejected! :<`);
        })
};
handlePromise();


/* 1-4 順序執行多個 Promise：創建三個 Promise：Promise A 在 2 秒後 resolve，Promise B 在 1 秒後resolve，
       Promise C 在 3 秒後resolve。使用 Promise 和 async/await，在它們依次解析完成後，
       在控制台打印出 "All promises resolved!" */
const promiseA=()=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(`1-4 promiseA`);
            resolve();
        },2000)
    })
}

const promiseB=()=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(`1-4 promiseB`);
            resolve();
        },1000)
    })
}

const promiseC=()=>{
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log(`1-4 promiseC`);
            resolve();
        },3000)
    })
}

const main = async() =>{
    await promiseA();
    await promiseB();
    await promiseC();
    console.log(`1-4 All promises resolved!`);
    
}
main();


//課堂筆記

// // 使用await時，要return promise才可執行，非promise沒有意義
// // 可以透過await控制API時間
// const executeStep2 = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(function() {
//             console.log('step 2');
//             resolve();
//         },2000)
//     });
// };


// const main = async () =>{
//     console.log('step 1');
//     await executeStep2();
//     console.log('step 3');
// }
// main();


// // Promise 
// const myPromise2 = new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//         const data = 'operation completed successful...';
        
//         resolve(data);
//     },2000)
// });

// //呼叫它
// myPromise2.then((item) =>{
//     console.log(item);
// }).catch((error) =>{
//     console.log(error);
// })


// // // setTimeout
// // setTimeout(function(){
// //     console.log('延遲訊息');
// // },2000)

// // // setInterval
// // let count = 0;
// // const intervalId = setInterval(function(){
// //     console.log("數:",count);
// //     count++;

// //     if(count===5){
// //         clearInterval(intervalId)
// //     }

// // },1000)







