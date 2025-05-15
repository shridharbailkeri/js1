// rest parameter - bundle up arguments in single array 
const doubleFunction = (...nums) => {
    console.log(nums);
    // do something
    return nums.map(num => num*2);
}

const result = doubleFunction(1,2,3,4,5,6,7);

console.log(result);

// spread syntax (arrays)

const people = ['shaun', 'ryu', 'crystal'];
console.log(...people); // spreads people array out into its individual components
// when we want to take elements of one array and spread them into another array 

const members = ['mario', 'chun-li', ...people];

console.log(members);


// spread syntax (objects)

const person = {name: 'shaun', age: 30, job: 'net ninja'};
// create a brand new object which has a different reference in memory and also make a full copy and not the copy of a pointer/reference 
const personClone = {...person, location: 'manchester'};

personClone.age = 55;

console.log(person);

console.log(personClone);


// sets
const namesArray = ['ryu', 'chun-li', 'ryu', 'shaun'];

console.log(namesArray);

//const nameSet = new Set(['ryu', 'chun-li', 'ryu', 'shaun']);

//const nameSet = new Set(namesArray);
//console.log(nameSet);
// spreading the values back into an arry 
//const uniqueNames = [...nameSet];
const uniqueNames = [...new Set(namesArray)];
console.log(uniqueNames);

const ages = new Set();

ages.add(20);
ages.add(25).add(30);

ages.delete(25);

console.log(ages, ages.size);

console.log(ages.has(30));

ages.clear();

console.log(ages);

const ninjas = new Set([
  {name: 'shaun', age: 30},
  {name: 'crystal', age: 29},
  {name: 'chun-li', age: 32}
]);

ninjas.forEach(ninja => {
    console.log(ninja.name, ninja.age);
});

// symbol, its a primitive type, we dont use new keyword here 
// no two symbols are  never going to be the same 

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo, typeof symbolTwo);
console.log(symbolOne === symbolTwo);

const ninja = {};
// dot notation
ninja.age = 30;
// square bracket notation
ninja['belt'] = 'orange';
ninja['belt'] = 'black';

ninja[symbolOne] = 'ryu';
ninja[symbolTwo] = 'shaun';
console.log(ninja);