// 일반적인 방식
function adderOriginal(a, b){
    return a + b;
}
console.log(adderOriginal(3, 4), '\n');

// 객체방식으로 함수 만들기
let adder1 = new Function('a', 'b', 'console.log("더한 결과는", (a+b)+"입니다."); return a+b;');
let a = adder1(3, 4);
console.log('result:', a, '\n');

// 익명함수를 변수에 대입
let adder2 = function(a, b){
    return a + b;
};
console.log(adder2(6, 4));

// 익명 함수의 확장
console.log((function(a, b){
    return a + b;
})(12, 25));
