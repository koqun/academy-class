class user {
  constructor() {
    this.name = name;
    this.age = age;
    this.major = major;
  }
  study() {
    console.log(`${this.major}를 공부합니다`);
  }
}

class student extends user {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  study() {
    console.log(`${this.major}를 공부합니다`);
  }
  sayhi() {
    console.log(`${this.major}를 공부하는 ${this.name}입니다`);
  }
}

student.sayhi();