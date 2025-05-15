// object literals

//const blogs = [
//    {title: 'why mac & cheese rules', likes: 30},
//    {title: '10 things to make with marmite', likes: 50}
//];

//console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@theninja.co.uk',
    location: 'berlin',
    blogs: [
        {title: 'why mac & cheese rules', likes: 30},
        {title: '10 things to make with marmite', likes: 50}
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function() {  // if we make this function arrow function, then the this keyword used inside it below will be global window object not local
        // when we use arrow function javascript does not change the value of "this" when we use it on an object 
        console.log('this user has written the followwing blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

console.log(user);
console.log(user.name);

user.age = 36;
console.log(user.age);

user['name'] = 'chun-li';

console.log(user['name']);

console.log(typeof(user));

user.login();

user.logout();

user.logBlogs();

// math object
console.log(Math.PI);

console.log(Math.E);

const area1 = 9.7;

console.log(Math.round(area1));
console.log(Math.floor(area1));
console.log(Math.ceil(area1));
console.log(Math.trunc(area1));

// random numbers 

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100)); // any no. between 1 to 100

// primitive values
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne : ${scoreOne}`, `scoreOne : ${scoreTwo}`);

scoreOne = 100;

console.log(`scoreOne : ${scoreOne}`, `scoreOne : ${scoreTwo}`);

// reference types 

const userOne = {name: 'ryu', age: 30};

const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 55;

console.log(userOne, userTwo);