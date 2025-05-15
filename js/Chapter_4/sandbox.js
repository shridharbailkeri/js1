
greet();
greet();

// function expression
const speak = function(name='luigi', time='night') {
    console.log(`good ${time} ${name}`);
};

speak('Mario', 'morning');

speak('Mario');


// function declaration
function greet(){
    console.log('hello there');
}

const calcArea = function(radius) {
    let area = 3.14 * radius**2;
    //console.log(area);
    return area;
};

const area = calcArea(5);
console.log(area);

// arrow function

const calcVol = (length, area) => {
    let volume = area * length;
    return volume;
};


let vol = calcVol(10, area);

console.log(vol);

const areaRectangle = (length, breadth) => length * breadth;

reactArea = areaRectangle(5, 5);

console.log(reactArea);

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i]*tax;
    }
    return total;
}

console.log(bill([10, 15, 30], 0.2));

const bill2 = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++) {
        total += products[i] + products[i]*tax;
    }
    return total;
};

console.log(bill2([10, 15, 30], 0.2));

// functions vs methods 

const name1 = 'shaun';

const greet1 = () => 'hello';

let resOne = greet1();

console.log(resOne);

// methods dot notation 

// methods are functions associated with an object , they are defined on an object 
// functions are randomly written outside of an object 

let res2 = name1.toUpperCase();

console.log(res2);

// when a function is passed as an argument its called as call back function 

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    // do something 
    console.log(value);
});


const myFunc2 = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc2((value) => {
    console.log(value);
});


let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach((person, index) => {
    console.log(index, person);
});

people.forEach(logPerson);

// get a reference to the 'ul'
const u1 = document.querySelector('.people');

let html = ``;

people.forEach((person) => {
    // create html template for each person 
    html += `<li style="color: purple">${person}</li>`;
});


console.log(html);
u1.innerHTML = html;









