let score = 30;
if(score > 90){
    console.log("A");
}
else if(score > 60){
    console.log("B");
}
else{
    console.log("F");
}

function mod3Calc(num){
    switch(num % 3){
        case 0:
            console.log("나머지 0");
            break;
        case 1:
            console.log("나머지 1");
            break;
        default:
            console.log("나머지 2");
    }
}

let num = 14;
mod3Calc(num);
mod3Calc(27);
mod3Calc(28);