let arr = ['canada', 'Africa', 'ditto', 'Dragon', 'fighter', 'brave', 'Xylophone', 'agent'];
arr.sort()
console.log(arr);

// 숫자를 담은 배열을 정렬해도 사전순으로 취급함 ex) 72 < 9
let arr2 = [1, 2, 26, 72, 9, 99].sort();
console.log(arr2);

// 따라서 원하는 결과를 얻기 위해서는 compFunction을 정의해야함
arr2.sort((a, b) => a-b);
console.log(arr2);
arr2.sort((a, b) => b-a);
console.log(arr2);
