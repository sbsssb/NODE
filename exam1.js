// callback 함수 
function hello(name) {
    console.log(name + "님 안녕하세요!");
}

function imgLoad(callback, name) {
    console.log("3초 프로세스 실행 끝"); // 동기식
    callback(name)
}

imgLoad(hello, "홍길동");
// hello("홍길동"); 

