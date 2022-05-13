// 3글자 미만이면 이름이 너무 짧습니다 출력
class userClass{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name
  }
  set name(value) {
    if (value.length > 3) {
      console.log("이름이 너무 짧습니다");
      return;
    }
    this._name = value;
  }
  sayHi() {
    console.log(`반갑습니다 ${this.name}입니다`);
  }
}

let user = new userClass("홍길동", 30);
// user.sayHi();
user.name = "홍"
// user.name = "홍길동"
console.log(user.name);
