// 2-1 建立一個名為person 的物件：
//     包含姓名、年齡和性別等屬性。為這些屬性賦值，然後顯示此人的姓名和年齡。
const person = {
    name: 'Heggi Lee',
    gender: 'female',
    age: 99
}
console.log(person.name, `${person.age}歲`);


// 2-2 在 person 添加一個名為 greet 的方法。
//     調用 greet 方法時會顯示問候語'Hello'。
person.greet=()=>{
    console.log('Hello!');
}
person.greet();

// 2-3 在 person 中建立一個名為 friends 屬性並且打印出來。
person.friends = ['Sara', 'Oliver', 'Eva', 'Sandy', 'ben'];
console.log(person.friends);