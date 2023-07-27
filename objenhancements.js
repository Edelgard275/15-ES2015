//1. Same keys & values
function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
    }
}

//Write an ES2015 Version
const createInstructor = (firstName, lastName) => {
    return {
        firstName,
        lastName,
    }
}

//2. Computed property names
var favoriteNumber = 42;
var instructor = {
    firstName: "Colt"
}
instructor[favoriteNumber] = "This is my favorite!"

//write an ES2015 version
let favoriteNumber = 42;
const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "This is my foavirte!"
}

//3. Object Methods
var instructor = {
    firstName: "Colt",
    sayHi: function(){
        return "Hi!";
    },
    sayBye: function(){
        return this.firstName + "says bye!";
    }
}

//write an ES1025 version
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + "says bye!";
    }
}

//createAnimal function - write a function which generates an animal object. The function should accept 3 arguments:
//1. Species - i.e. 'cat', 'dog'
//2. Verb - i.e. 'bark', 'bleet', 'waul'
//3. Noise - i.e. 'woof', 'baaa', 'meow'

function createAnimal(species, verb, noise){
    return {
        species,
        [verb](){
            return noise;
        }
    }
}
