// function은 function도 반환할 수 있음

function giveCalc(mode){

    function adder(a, b){
        return a + b;
    }

    function subtracter(a, b){
        return a - b;
    }

    function divider(a, b){
        return a / b;
    }
    
    function remainder(a, b){
        return a % b;
    }

    switch(mode){
        case '+':
            return adder;
        case '-':
            return subtracter;
        case '/':
            return divider;
        case '%':
            return remainder;
        default:
            return null;
    }
}

let plus = giveCalc('+');
console.log(plus(10, 2));

let rest = giveCalc('%')
console.log(rest(15, 6));
