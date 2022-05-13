// 화살표 함수 실습2

const words = [
  'spray', 
  'limit', 
  'elite', 
  'exuberant', 
  'destruction', 
  'present'
];

let result = words.filter((word)=> word.length <= 6)

console.log(result);