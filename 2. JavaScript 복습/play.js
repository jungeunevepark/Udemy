var name = 'MAX';               // string 변수
var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is ' + 
        userName + 
        ', age is ' + 
        userAge + 
        ' and the user has hobbies: ' + 
        userHasHobby
    );
} // 굳이 변수로 받지 않아도 되지만 바람직한 형태임(외부에서 변수를 받기 때문)


console.log(summarizeUser(name, age, hasHobbies));