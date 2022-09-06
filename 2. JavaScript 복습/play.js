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

const add = (a, b) => a + b;

// return 문 하나만 있는 화살표 함수라면 중괄호와 return 생략 가능

console.log(add(1, 2));
console.log(summarizeUser(name, age, hasHobbies));