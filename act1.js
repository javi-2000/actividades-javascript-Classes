class Persona {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
}

const newPerson = new Persona("Pablo", "Gómez");
console.log(newPerson.firstName + " " + newPerson.lastName);