class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  static fromObject(parameter){
    return Object.assign(parameter);
  }
}

const obj = {
  firstName: "Mario",
  lastName: "Rossi",
};

const person = Person.fromObject(obj);
console.log(person);