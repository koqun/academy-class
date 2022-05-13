class Dog {
  constructor(family, name, age) {
    this.family = family;
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  sayhi() {
    console.log(`${this.family}인 ${this.name}입니다`);
  }
}

const mydog = new Dog("진돗개", "백구", 1)
mydog.sayhi();
mydog.setName("마루");
console.log(mydog.getName());