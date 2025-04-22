function test() {
    console.log("테스트 함수");
}

let func = test; // ()를 붙이면 함수를 실행함 -> return 값이 없어서 func에 undefined가 들어감 
                    // ()가 없으면 함수 자체를 변수에 넣음 -> 함수의 이름이 들어감
console.log(func);


