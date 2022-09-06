const fetchDate = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');  // 콜백함수
    fetchDate().then(done => {
        console.log(text);
        //프로미스의 장점
        fetchDate().then
    });
}, 2000);
// 이렇게 중첩화된 비동기화 함수가 존재하는 경우 콜백 시점에서 점점 깊게 들어가게 됨

//비동기화 코드로 즉시 실행되거나 끝나지 않고 시간이 소요됨

console.log('Hello!');
console.log('Hi!')
//코드 실행이 종료될 때까지는 이를 멈추지 않음.
//모든 동기화 코드를 실행하고 비동기화 코드를 실행함.