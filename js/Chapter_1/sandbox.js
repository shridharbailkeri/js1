let age = 25;
let year = 2019;

console.log(age, year)

age = 30;
console.log(age);

const points = 100;

console.log(points)

var score = 75;

console.log(score);

// strings

console.log("hello, world");

let email = "mario@thenetninja.co.uk";

console.log(email);

// concatenantion
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;

console.log(fullName)

// getting chars
console.log(fullName[0]);

// string length 
console.log(fullName.length);

// string methods 
console.log(fullName.toUpperCase());

let result = fullName.toLocaleLowerCase();

console.log(result, fullName);

let indexChar = email.indexOf("@");
console.log(indexChar);

let indexLast = email.lastIndexOf("a");

console.log(indexLast);

let resSlice = email.slice(0, 10);
console.log(resSlice);

let substrSli = email.substr(4, 10);
// goes from pos 4 adds 10 to 4 and goes till 14 

console.log(substrSli);

let repChar = email.replace('m', 'w'); // only replaces first occurance 

console.log(repChar);

// numbers 
let radius = 10;

const pi = 3.14;

console.log(radius, pi);

// math op 
console.log(10/2);

let remainder = radius % 3;

console.log(remainder);

let area = pi * radius ** 2;

console.log(area);

// prder of operation B I D M A S 
// brackets indices/power  division multi addition substraction 

let likes = 10;

likes = likes + 1;

console.log(likes);

likes++;
console.log(likes);

likes += 11;

console.log(likes);

likes /= 2;

console.log(likes);

// concatinate numbers 
// add nums to strings

let res = 'the blog has ' + likes + ' likes';
console.log(res);

// template strings 
const title = 'Best reads of 2019';
const author = 'Mario';
const liikes = 30;

// concatenation way
let ressult = 'The blog called ' + title + ' by ' + author + ' has ' + liikes + ' likes';
console.log(ressult);

// template string way /template string
let tempStr = `The blog called ${title} by ${author} has ${liikes} likes`;

console.log(tempStr);

// creating html templates 
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span> This blog has ${likes} </span>
    `;

console.log(html);

// arrays are object data type 
let ninjas = ['shaun', 'ryu', 'chun-li'];

ninjas[1] = 'ken'
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];

console.log(ages[2]);

let random = ['abc', 'cde', 20, 30];

console.log(random);

console.log(ninjas.length);

let join_array = ninjas.join('-');

console.log(join_array);

let rrr = ninjas.indexOf('chun-li');

console.log(rrr);

let concat_array = ninjas.concat(['kristal', 'Joy']);

console.log(concat_array);

let push_arr = ninjas.push('Adam'); // returns length of new array 

console.log(push_arr);
console.log(ninjas);

let pop_arr = ninjas.pop(); // returns popped value
console.log(pop_arr);

console.log(ninjas);

// null and un defined 
let age_1 = null;

console.log(age_1, age_1+3, `the age is ${age_1}`);

console.log(true, false);

let bool_mail = 'luigi@thenetninja.co.uk';

let result_bool = bool_mail.includes('@');

console.log(result_bool);

let names = ['mario', 'luigi', 'toad'];

let res_names = names.includes('luigi');

console.log(res_names);

let age_2 = 25;

console.log(age_2 == 25);

console.log(age_2 == 30);

console.log(age_2 != 25);

console.log(age_2 != 30);

console.log(age_2 > 20);

console.log(age_2 < 20);

console.log(age_2 <= 25);

let nameS = 'shaun';

console.log(nameS == 'shaun');

console.log(nameS == 'Shaun');

console.log(nameS > 'crystal');

console.log(nameS > 'Shaun'); // lowercase letters are greater than uppercase letters in JS 

console.log(nameS > 'Crystal');

console.log('loose vs strict comparison')

console.log(25 == '25');

console.log(25 != '25'); // string is converted to a number 

console.log('strict equality');

console.log(25 === 25);

console.log(25 === '25');

console.log(25 !== '25');

// explicit type conversion 

let score_1 = '1000';

score_1 = Number(score_1);
console.log(score_1 + 1);

console.log(typeof score_1);

let con = String(50);

console.log(con, typeof con);

// some numbers are truthy values example 100 is considered boolean return tru when converted , 0 is falsy values 
let tr = Boolean(100);

let tr1 = Boolean(0);

let tr2 = Boolean('0');
console.log(tr, typeof tr);
console.log(tr1, typeof tr1);
console.log(tr2, typeof tr2);






