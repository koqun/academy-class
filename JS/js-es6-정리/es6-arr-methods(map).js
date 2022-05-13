const num = [1, 4, 9, 16];

// map:배열의 요소를 가져와서 결과(return) 값을 배열로 변환
const map1 = num.map(n => n*2);
// return 값이 없을 경우 undefined의 값이 들어간다
const map2 = num.map(n => {
  n*2;  // undefined로 뜰 값, 앞에 return 붙이면 출력됨
});

console.log(map1);
console.log(map2);