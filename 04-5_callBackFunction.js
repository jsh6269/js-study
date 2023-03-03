function adder(num1, num2, printMethod){
    let res = num1 + num2;
    // printMethod는 콜백함수
    printMethod(res);
}

function pMethod1(num){
    console.log("answer is " + num + ".");
}
function pMethod2(num){
    console.log(num + " is the answer.");
}

adder(3, 4, pMethod1);
adder(4, 5, pMethod2);