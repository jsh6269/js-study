let a = "12";
console.log(parseInt(a) + 4);
console.log(1+"2");
console.log(Number(a) + 4 + '\n');

let a2 = 12;
console.log(String(a2)+1);
console.log(a2.toString()+1);
// 15진수 문자열
console.log(a2.toString(14) + '\n');


let b = "13.456";
console.log(parseFloat(b)+1.23);
console.log(Number(b));
// 버림
console.log(Number(b).toFixed(2));