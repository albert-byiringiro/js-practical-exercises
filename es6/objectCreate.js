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
