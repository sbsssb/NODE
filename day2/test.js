let list = [1,5,4,8,6];

// 1. 리스트에서 5 이상의 숫자만 따로 떼서 newList 변수에 저장하기
// let newList = [];
// for(let i = 0; i < list.length; i++) {
//     if(list[i] >= 5) {
//         newList.push(list[i]);
//     }
// }

let newList = list.filter(x => x >= 5);
console.log(newList);

// 2. 리스트의 각 값들에 2를 곱해서 newList2 변수에 저장하기
let newList2 = []
for(let i = 0; i < list.length; i++){
    // num = list[i] * 2;
    // newList2.push(num);
    newList2.push(list[i] * 2)
}
console.log(newList2);