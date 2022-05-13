// 클래스의 상속
// 부모 클래스
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name}이 ${this.speed}의 속도로 달립니다`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name}이 멈췄습니다`);
  }
}

// extends를 이용해서 상속받는 자식 클래스
class Rabbit extends Animal {
  constructor(name, earLength) {
    // 부모 클래스에서 받아온 속성값은 super() 이용하여 생성
    super(name);
    // 추가된 속성은 this.를 이용하여 생성
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name}이 숨었습니다`);
  }
  // 부모 클래스에서도 있는 stop 메소드를 오버라이딩
  stop() {
    // 부모 클래스
    // super.st 미완
    console.log('자식 클래스에서 멈췄습니다');
  }
}
// 자식 클래스로 객체 생성
let rabbit = new Rabbit("흰 토끼");
rabbit.run(5); // 부모 클래스의 메소드 사용
rabbit.hide(); // 자식 클래스의 메소드 사용
rabbit.stop(); // 자식 클래스에서 오버라이딩한 메소드가 출력
console.log(Rabbit.earLength); 