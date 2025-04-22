function delay(time) {
    return new Promise((resolve) => {
        setTimeout(function(){
            resolve(time);
        }, time)
    });
}

delay(1000)  
    .then((time)=>{
        console.log(`A : ${time/1000}초 뒤 실행`);
        return delay(3000);
    })
    .then((time)=>{
        console.log(`B : ${time/1000}초 뒤 실행`);
        return delay(5000);
    })
    .then((time)=>{
        console.log(`C : ${time/1000}초 뒤 실행`);
    })
    //초 (1,3,5)는 동적으로 처리
