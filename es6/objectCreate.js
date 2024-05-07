/****************************************************************
                       Using Object.create
Challenge 2
Inside personStore object, create a property greet where the value is a function that logs "hello".
Challenge 3
Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.
Challenge 4
Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".
****************************************************************/

/*** CHALLENGE 2 ***/

const personStore = {
    // add code here
    greet: function () {
        console.log("Hello")
    },
    introduce: function () {
        console.log(`Hi, my name is ${this.name}`);
    }

};

// /********* Uncomment this line to test your work! *********/
personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 3 ***/

function personFromPersonStore(name, age) {
    // add code here
    const person = Object.create(personStore);
    person.name = name;
    person.age = age;

    return person;
}

const sandra = personFromPersonStore('Sandra', 26);


// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'



/*** CHALLENGE 4 ***/

// add code here

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
