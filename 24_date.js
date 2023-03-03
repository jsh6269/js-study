// basic date object usage
let obj = new Date();
let dayL = ['일', '월', '화', '수', '목', '금', '토'];
let str = obj.getFullYear() + "년 " + (obj.getMonth() + 1) + "월 " + obj.getDate() + "일 " + dayL[obj.getDay()] + "요일";
console.log(str);
console.log(obj.getHours() + ":" + obj.getMinutes() + ":" + obj.getSeconds());
console.log(obj.getTime() + " ms since '1970.01.01.'");

// Date객체를 생성할 때의 시간으로 고정되므로 시간 차이가 나타나지 않음
console.log('bef: ' + obj.getMilliseconds());
let sum = 0;
for(let i=0; i<1000000; i++){
    sum += i;
}
console.log('aft: ' + obj.getMilliseconds());

// Date객체를 새로 생성하면 시간 차이를 관찰할 수 있음
console.log('before :  ' + new Date().getMilliseconds());
sum = 0;
for(let i=0; i<1000000; i++){
    sum += i;
}
console.log('after  :  ' + new Date().getMilliseconds());
