class userClass{
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    // console.log("반갑습니다 "+this.name+"입니다");
    console.log(`반갑습니다 ${this.name}입니다`);
  }
}

let user = new userClass("홍길동", 30);

user.sayHi();