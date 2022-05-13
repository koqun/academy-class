// map 실습
const numarray = [1, 16, 49, 121];
const numsqrt = numarray.map((x)=> Math.sqrt(x));

console.log(numsqrt);

// 짝수인 경우에는 나누기 2의 값, 홀수인 경우에는 제곱근
const numresult = numarray.map((x)=> {
  if(x % 2 == 0) {
    return x / 2;
  } else {
    return Math.sqrt(x);
  }
});
console.log(numresult+" is numresult");

// 위의 내용을 삼항 연산자로 바꿔서 실행하세요
const numresult1 = numarray.map((x)=> { return (x%2 == 0) ? x/2 : Math.sqrt(x) });
console.log(numresult1+" is numresult1");
