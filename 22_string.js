let str = "hello world";
console.log(str.length);
console.log(str.charAt(4));
// 알파벳 e의 아스키코드는 101임.
console.log(str.charCodeAt(1));

let str2 = str.concat(", I'm sj!");
console.log(str2);

let str3 = "hEllo lolol Haha";
console.log(str3.indexOf("lo"));
console.log(str3.lastIndexOf("lo"));

// replace는 첫번째 문자열만 바꿔줌
console.log(str3.replace("lo", "di"));
// 정규식을 이용하면 (/oldPattern/g => search for all pattern) 모든 문자열을 바꿔줌
console.log(str3.replace(/lo/g, "di"));
console.log(str3.search("a"));
console.log(str3.search("lo"));
console.log(str3.split(" "));

// 2번째부터 10번째까지 추출
console.log(str3.slice(2, 10));
console.log(str3.substring(2, 10));
// 2번째부터 8개의 문자를 추출
console.log(str3.substr(2, 8));
// 2번째부터 끝까지 추출
console.log(str3.substring(2));

console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

console.log("  trim is needed I belive ".trim());