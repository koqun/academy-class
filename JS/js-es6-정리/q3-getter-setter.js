class Dog {
  constructor(family, name, age) {
    this.family = family;
    this.name = name;
    this.age = age;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (name.length == 0) {
      console.log("이름이 빈값입니다");
      return
    }
    this._name = name;
  }
  sayhi() {
    console.log(`${this.family}인 ${this.name}입니다`);
  }
}

const mydog = new Dog("진돗개", "백구", 1)
// mydog.sayhi();
mydog.name = ""
// mydog.name = "백구"
console.log(mydog.name);