const name = 'MAX';               // string 변수
let age = 29;
const hasHobbies = true;          
// var은 새로운 변수를 생성하는 키워드, 오래됨 -> let사용
// const -> 변경 불가 / let -> 변경가능

name = 'Maximilian';                      // error발생
age = 30;

const summarizeUser = function (userName, userAge, userHasHobby){              // 오른쪽을 무명함수라고 부름
    return (                                                                   // 기명상수에 저장하므로써 기명함수처럼 사용할 수 있음
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
} // 굳이 변수로 받지 않아도 되지만 바람직한 형태임(외부에서 변수를 받기 때문)


console.log(summarizeUser(name, age, hasHobbies));