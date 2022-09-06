const person = {
    name: 'MAX',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
};

const hobbies = ['Sports', 'Cooking']; // text array

// for (let hobby of hobbies) {
//     console.log(hobby);
// }

// javascript에는 다양한 내장 메소드 존재
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
//새로운 string을 추가하겠다는 뜻

console.log(hobbies);
//기존의 배열은 수정되지 않았음을 알수 있음