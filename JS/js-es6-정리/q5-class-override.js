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
// const mydog = new Dog("진돗개", "백구", 1)
// mydog.sayhi();
// mydog.setName("마루");
// console.log(mydog.getName());

class HouseDog extends Dog {
  constructor(family, name, age, address) {
    super(family, name, age);
    this.address = address;
  }
  intro() {
    super.sayhi();
    console.log(`${this.address}에 살고 있습니다`)
  }
} 
let mydog1 = new HouseDog("진돗개", "백구", 1, "부산")
mydog1.intro();