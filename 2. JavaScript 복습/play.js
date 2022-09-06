const person = {
    name: 'MAX',
    age: 29,
    greet(){
        console.log('Hi, I am ' + this.name)
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person);

const { name, age } = person;
console.log(name, age);


// const copiedPerson = {...person};
// console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking']; // text array
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// // for (let hobby of hobbies) {
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

// // const copiesArray = hobbies.slice();     // 배열을 복사함
// // const copiesArray = [hobbies];              // 중첩 배열
// const copiesArray = [...hobbies];
// console.log(copiesArray);

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));