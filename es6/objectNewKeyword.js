/****************************************************************
                    Using the NEW keyword
Challenge 5
Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.
Challenge 6
Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.
Challenge 7
Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".
****************************************************************/

/*** CHALLENGE 5 ***/

function PersonConstructor() {
    // add code here
    this.greet = () => console.log("hello");

}


// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'


/*** CHALLENGE 6 ***/

function personFromConstructor(name, age) {
    // add code here
    const person = new PersonConstructor();
    person.name = name;
    person.age = age;

    return person;
}


const mike = new personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

