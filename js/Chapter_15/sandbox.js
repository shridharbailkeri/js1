// js wraps a primitive datatype/value into a wrapper object and uses different methods on that object name = 'mario' name.toUpperCase() example 
// once we use that method later js unwraps that value from the wrapper object and it gives it back to us does all this under the hood 
// example of wrapper object const nameTwo = new String('sam'); explicitly wrapping a string value in this String object , now wrapper object has all the methods stored in it 
// new Number(5); new Boolean(true); all are wrapper examples 
class User {
    constructor(username, email) {
        // set up properties 
        this.username = username;
        this.email = email;
        this.score = 0;
    }
    // because arrow functions dont bind the value with this keyword we use regular functions inside the class 
    login() {
        console.log(`${this.username} just logged in`);
        return this;
    }
    // when a method doesnt return a value js by default assigns return value as undefined 
    // thats why u cant chain methods because u will be calling the chained method on undefined
    logout() {
        console.log(`${this.username} just logged out`);
        return this;
    }
    incScore() {
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        // we return an object instance for chaining methods , because instances have methods and we can use those methods 
        // this refers t othe object instance 
        return this;
    }
}
// class wht u see here is just a syntactic sugar, js does not have classes built into it instead it uses prototype model to do that behavior 
// class is  just a thin layer of abstraction over the prototype model which is being used under the hood to create these objects when we write classes 
// 
class Admin extends User{

    // what if admin wants to have additional attributes/fields compared to its parent , 
    // thats why admin class would need its own constructor but also inherit properties / attributes from its parent's constructor 
    // for example only admins have some additional properties , need to create a constructor for admin class because thats where properties are defined 
    // when u have constructor() { inside admin it will run the constructor inside admin and not its parent's constructor 
    // parent's constructor only runs when inside a child's class a constructor doesn't exists 
    // to attach parent's attributes/ property inside a child's constructor we can call super 
    // when we got super it looks for parent's class and it looks ofr parent's constructor and where that exists it runs that constructor 
    //  to set up properties for child object as well 
    constructor(username, email, title) {
        super(username, email);
        this.title = title;
    }
    deleteUser(user) {
        users = users.filter(u => u.username !== user.username);
    }
}

// older way of creating classes 
function Olduser(uname, mail){
    this.uname = uname;
    this.mail = mail;

    this.login = function(){
        console.log(`${this.uname} has logged in`);
        return this;
    }
}
// how to attach methods to the prototype
Olduser.prototype.logout = function() {
    console.log(`${this.uname} has logged out`);
    return this;
}
// every object in js has a prototype
// prototypes contain all the methods for that object type 
// user properties/ attributes like username email are stored directly on the object , but its methods are stored in its prototype
// method of storing methods in object's prototype rather than the object itself has 2 main benefits 
// efficient - one single place storage location for all instances than differnt for differnt instances 
// prototype inheritance 
// Array.prototype, User.prototype in console 
const userOne = new User('mario', 'ninja@mail.com');
const userTwo = new User('sario', 'sinja@mail.com');
console.log(userOne);
userOne.login();
userOne.logout();
userOne.incScore();
console.log('#####')
userOne.login().incScore().incScore().logout();

const userThree = new Admin('shaun', 'shaun@theninja.com', 'black-belt-ninja');

console.log(userThree);

let users = [userOne, userTwo, userThree];

console.log(users);

userThree.deleteUser(userTwo);
console.log(users);

console.log('+++++');
const userOld = new Olduser('olduser', 'olduser@theninja.com');
userOld.logout();
console.log('+++++');
userOld.login().logout();
// the new keyword 
// 1 - it creates a new object {}
// 2 - it binds the value of 'this' to the new empty object
// 3 - it calls the constructor function to build the object 

// prototype inheritance
function ProtoAdmin(uuname, eemail, title) {
    // call parent's constructor
    // way of inheriting parents fields/attributes
    Olduser.call(this, uuname, eemail);
    // way of having own additional attributes/fields than parent's
    this.title = title;
}
// way of inheriting parent's methods/functions
ProtoAdmin.prototype = Object.create(Olduser.prototype);
const userFive = new ProtoAdmin('proto', 'proto@mail.com', 'black belt proto inheritance');

console.log(userFive);

userFive.logout();

ProtoAdmin.prototype.deleteUser = function() {
    // delete a user 
};

// built in objects 
// new Array new XMLHttpRequest in console  

