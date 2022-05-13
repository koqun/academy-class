const vehicles = ["mustang", "f-150", "expendition"];

// 구조화 : 사용할 변수들의 이름을 모아서, 배열 기호 안에 나열한 후
// 다른 배열의 요소들을 순서에 맞게 할당받는다
// 요소값이 필요하지 않은 경우는 빈칸으로 두고 작성한다

const [car, racing, suv] = vehicles;
console.log(suv);
console.log(racing);
console.log(car);

// 스프레드 연산자(...) : 배열 혹은 객체의 값을 꺼내서 보여주는 연산자
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num = [...num1, ...num2];
console.log(num+" is num");
console.log(...num+" is ...num");

const numPlus = num1+num2;
console.log(numPlus+" is numPlus")

// 스프레드 연산자와 구조화 : 구조화 할 때 사용하게되면 남은 값을 다 들고온다(배열)
// 위에 작성한 num 배열을 구조화
const [one, two, ...rest] = num;