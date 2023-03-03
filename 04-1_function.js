function sumTwo(a, b){
    console.log(a + " + " + b + " = " + (a + b));
    return a + b;
}
let var1 = 3, var2 = 2;
let res = sumTwo(var1, var2);
console.log(res);

// 변수에 함수 저장 가능
let adder = sumTwo;
adder(5, 7);
console.log();

// 함수를 매개변수로 받을 수 있음
function sumFour(a, b, c, d, add2){
    console.log("since these two statements hold");
    let aa = add2(a, b);
    let bb = add2(c, d);
    let res = add2(aa, bb);
    console.log("result:", a, '+', b, '+', c, '+', d, '=', res);
    return a + b + c + d;
}
sumFour(3, 4, 5, 6, sumTwo);

// 함수 여러개 만들기
const myArray = [];
for(let i=0; i<10; i++){
    myArray.push(function(){
        console.log(i);
    });
}
console.log();
myArray[0]();
myArray[1]();
myArray[2]();
myArray[3]();
console.log();
