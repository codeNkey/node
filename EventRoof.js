//console.log("Hello World")

function thirdFunction() {
    console.log('세번째 함수')
}
function firstFunction() {
    secondFunction();
    console.log('첫번째 함수')
}
function secondFunction() {
    setTimeout( () => {
        thirdFunction
    } )
    console.log('두번째 함수')
    thirdFunction(); 
}

//firstFunction();
// console.log('시작');
// setTimeout(run, 3000);
// console.log('끝');

// console.log('시작')
// setTimeout(firstFunction, 3000) 
// setTimeout(secondFunction, 1000)
// setTimeout(thirdFunction, 2000)
// console.log('끝')

function thirdFunction(){
    console.log('세번째 함수')
};

function firstFunction(){
    setTimeout(()=>{
        console.log('첫번째 함수') 
    }, 1000)
    secondFuntion();
};

function secondFuntion(){
    setTimeout(()=>{
        thirdFunction();
    }, 2000)
    console.log('두번째 함수')
};

//firstFunction();

function longTask() {
    const start = Date.now() // 호출스택에 들어가는 순간 시간을 찍어요.
    while ((Date.now() - start) < 3000){//현재시간과 호출스택에 처음 들어간 시간의 차이가 2초까지 작동

    }
    console.log("longTask 작업 완료")
}

function firstFunction(){
    setTimeout(()=>{
        console.log('첫번째 함수') 
    }, 1000)
    
};

// console.log('시작')
// firstFunction();
// longTask();
// console.log('끝')
