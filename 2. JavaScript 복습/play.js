const name = 'MAX';               // string 변수
let age = 29;
const hasHobbies = true;          
// var은 새로운 변수를 생성하는 키워드, 오래됨 -> let사용
// const -> 변경 불가 / let -> 변경가능

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {   // 강의 내에서는 화살표 함수만 사용할 것
    return (                                                   // function body
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
} // 굳이 변수로 받지 않아도 되지만 바람직한 형태임(외부에서 변수를 받기 때문)

// const add = (a, b) => a + b;
// const addOne = a => a + 1;
const addRandom = () => 1 + 2;

// 인수가 없다라면 괄호 써줘야함

console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbies));