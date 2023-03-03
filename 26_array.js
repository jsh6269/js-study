let arr = ["hi", 1, true, 'c', -3.2, Math.PI];
arr.forEach((el) => {process.stdout.write(el + " ");});
console.log("\n", arr)

let arr2 = new Array("menu1", "menu2", arr);
console.log(arr2.length);
console.log(arr2[2], arr2[0]);

console.log(arr.join(" & "));
console.log("this and that are those".split(" "));

// 맨 마지막 원소 추가
arr.push("🍉");
// 맨 앞 원소 추가
arr.unshift("🍆", "🍎");
console.log(arr);

// 마지막 원소 반환하고 제거
console.log(arr.pop());
console.log(arr);

// 원소 정렬
arr.sort();
console.log(arr);

// 원소 역순
arr.reverse();
console.log(arr);

// 1~4번째 원소를 담은 배열 반환
console.log(arr.slice(1, 5));

console.log(arr);
// 맨 앞 원소 제거
arr.shift();
console.log(arr);

// 2번째 인덱스에서부터 1개 원소 제거
arr.splice(2, 1);
console.log(arr);

// 3번째 인덱스에서부터 0개 원소 제거(제거 안함) 그리고 3번째 인덱스에 '3'을 추가
// 즉, 3번째 인덱스에 '3'이 위치하면서 기존에 3번째 인덱스에 있던 값은 오른쪽으로 밀려남
arr.splice(3, 0, '3');
console.log(arr);

// 1번째 인덱스를 기준으로 2개 원소 삭제 후 -4, false를 추가
// 즉, 기존의 원소 2개를 새로운 원소 2개로 대체하게 됨.
arr.splice(1, 2, -4, false);
console.log(arr);

