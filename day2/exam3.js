// function test() {
//     console.log("테스트 함수");
//     return function() {
//         console.log("테스트 함수 2");
//     }
// }

// setTimeout(test(), 2000);

// function calculator(kind) {
//     if(kind == "add"){
//         return function(x, y){
//             return x + y;
//         };
//     } else {
//         return function(x, y){
//             return x - y;
//         };
//     }
// }

function calculator(kind) {
    calc = {
        "add" : (x, y) => x + y,
        "sub" : (x, y) => x - y
    }
    return calc[kind];
}

let addFunc = calculator("add"); 
// 숫자 2개 입력받아 더해 주는 함수 리턴
console.log(addFunc(1,2));
let subFunc = calculator("sub");
// 숫자 2개 입력받아 빼 주는 함수 리턴
console.log(subFunc(5,3));

