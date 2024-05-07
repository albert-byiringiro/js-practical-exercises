/****************************************************************
                       USING OBJECT.CREATE
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
