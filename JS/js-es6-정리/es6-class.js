console.log("hello world");

// for문
for(var i= 0; i< 6; i+=2) {
  console.log(i);
}
console.log(i);

// let은 지역이라 console.log가 출력되지만,
// var는 전역이라 중괄호 바깥 console.log도 출력됨

// 자바스크립트 객체
let user = {
  name: "jhon",
  age: 30
}

// 함수 프로토타입
function User(name, age){
  this.name = name;
  this.age = age;
}

// 함수로 생성한 객체(인스턴스)
let user1 = new User("jagyeong", 3);

console.log(user);
console.log(user1);

// 클래스로 생성한 객체
class Car {
  // 클래스에서 속성 값을 할당할 때 사용하는 메서드
  constructor(name) {
    this.brand = name;
  }
  printbrand() {
    console.log(this.brand);
  }
}

let myCar = new Car("ferrari");
myCar.printbrand();