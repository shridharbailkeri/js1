for (let i = 0; i < 5; i++) {
    console.log('in loop', i);
}

console.log("loop finished");

const names = ['shaun', 'mario', 'luigi'];

for (let i = 0; i < names.length; i++) {
    //console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}

let i = 0;
while(i < 5) {
    console.log('in while: ' + i);
    i++;
}
i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

let j = 4; // when we want to execute the code atleast once 

do {
    console.log('the value of j is ' ,j);
    j++;
} while(j < 5);

const age = 25;

if (age > 20) {
    console.log("you are over 20 yrs old");
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if (ninjas.length > 3) {
    console.log("that's a lot of ninjas");
}

const pw = 'passingagainboss';

if (pw.length >= 12 && pw.includes('@')) {
    console.log('that pw is mighty strong')
} else if (pw.length >= 7 || pw.includes('@') && pw.length > 5) { // even though pw length greater than 7 this wont get executed , 
    // here this : pw.includes('@') && pw.length > 5 becomes one group both has to pass
    console.log('that pw is long enough');
} else {
    console.log('that pw is not long enough');
}

let user = false;

if (!user) {
    console.log("Not logged in");
}

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] === 0) {
        continue;
    }
    console.log('your score: ', scores[i]);

    if (scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}

const grade = 'C';

if (grade ==='A') {

} else if (grade === 'B') {

} else if (grade === 'C') {
    
} else if (grade === 'D') {
    
} else if (grade === 'E') {
    
}

switch(grade) {
    case 'A':
        console.log('You got an A');
        break;
    case 'B':
        console.log('You got a B');
        break;
    case 'C':
        console.log('You got a C');
        break;
    case 'D':
        console.log('You got a D');
        break;
    default:
        console.log("Not a valid grade");
}

// variables block level scope , area where variable value is relevant 
let aage = 30; // global scope 
if (true) {
    let aage = 40; // let aage = 40; gives local scope, aage = 40; will again give global scope plus error 
    let naaame = 'shaun';
    console.log('inside 1st code block: ', aage, naaame);

    if (true) {
        let aage = 50;
        console.log('inside 2nd code block: ', aage);
        var test = 'hello'; // even though its defines inside 2nd code block its not given local scope, accessable outside the block as well
    }
}
console.log('outside 1st code block: ', aage, test);


