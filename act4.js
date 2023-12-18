// Define a class called Person that takes in three parameters in the constructor (firstName, lastName and age). 
// Use the getters and setters methods for each property and a getter method called fullName that returns the full name.

class Person {
    constructor(firstName, lastName, edad){
        this._firstName = firstName
        this._lastName = lastName
        this._edad = edad
    }

    //para acceder al contenido de la propiedad se hace de forma indirecta, con el método GET
    get getNombre(){
        return this._firstName;
    }
    set setNombre(nuevoNombre){
        this._firstName = nuevoNombre
    }

    get getApellido(){
        return this._lastName;
    }
    set setApellido(nuevoNombre){
        this._firstName = nuevoNombre
    }

    get getEdad(){
        return this._edad;
    }
    set setEdad(nuevaEdad){
        if(nuevaEdad>0){
            this._edad = nuevaEdad
        } else{
            console.error("Edad no válida");
        }
    }

    get fullName(){
        return `Me llamo ${this._firstName} ${this._lastName}`
    }
}

const mario = new Person('Mario', 'Rossi', 25);
console.log(mario.fullName);

//con el método SET estamos estableciendo un nuevo valor
mario.setNombre = "Roberto"; //Roberto es el parámetro del método setNombre
console.log(mario);