
/****************************************************************
                      EXTENSION: SUBCLASSING
                    Classes in JavaScript can also inherit properties from other classes - this phenomena is known as subclassing. If you've finished all the main challenges, we encourage you to do some research on this concept and complete the challenges below!

Challenge 10
Create an object adminFunctionStore that has access to all methods in the userFunctionStore object, without copying them over individually.

Challenge 11
Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually.

Challenge 12
Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.

Challenge 13
Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.

Challenge 14
Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function.
****************************************************************/

const userFunctionStore = {
    sayType: function () {
        console.log("I am a " + this.type);
    }
}

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = "User";
    user.name = name;
    user.score = score;
    return user;
}

/*** CHALLENGE 10 ***/
const adminFunctionStore = Object.create(userFunctionStore);

/*** CHALLENGE 11, 12, 13 ***/

function adminFactory(name, score) {
    const admin = new userFactory(name, score);
    admin.type = "Admin";
    return admin;
}