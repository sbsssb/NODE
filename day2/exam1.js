function test(x) {
    console.log(x);
}

let func = function() {
    console.log("변수에 넣은 함수");
}

let func2 = test();
console.log(func2);