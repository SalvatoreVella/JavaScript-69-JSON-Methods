class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }
  static fromJson(json) {
    const thisParse = JSON.parse(json);
    const {id, firstName, lastName, age} = thisParse;
    return new Person(id, firstName, lastName, age);
  }
}

const json = '{"firstName":"Mario","id":1,"age":25,"lastName":"Rossi"}';
const developer = Person.fromJson(json);
console.log(developer);