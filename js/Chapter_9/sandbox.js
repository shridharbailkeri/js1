const scores = [10, 30, 15, 25, 50, 40, 5, 90, 75, 99];

const filteredScores = scores.filter((score) => {
    return score > 20;
});

console.log(scores);

console.log(filteredScores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true}
  ];

// filter also map is non destructive method - means it doesnt change the original array 
const premiumUsers = users.filter((user) => {
    return user.premium;
});

console.log(premiumUsers);

const salePrices = scores.map((price) => {
    return price/2;
});

console.log(salePrices);


const products = [
    {name: 'gold star', price: 20},
    {name: 'mushroom', price: 40},
    {name: 'green shells', price: 30},
    {name: 'banana skin', price: 10},
    {name: 'red shells', price: 50}
  ];

// any product whose price is greater than 30 its price should be sliced by half 

const saleProducts = products.map((product) => {
    if (product.price > 30) {
        // if i do product.price: product.price/2 then elemnt in the original array products wilö get mutated 
        return {name: product.name, price: product.price/2}; // the is like using new key word so it does not change the original array element
    } else {
        return product;
    }
});

console.log(saleProducts);

// reduce method behaves a bit differently than map and filter, reduce method doesnot have to return strictly an array
// it can return a specific value or an array , reduce method still iterates through an array but may not necessarily return an array 

// how many scores are over 50
// its like a running total accumulator, could, be like a counter , where 0 is the initial value of the accumulator 
const result = scores.reduce((accumulator, current_elm) => {
    if (current_elm > 50) {
        accumulator++;
    }
    return accumulator;
}, 0);

console.log(result);

const scores_player = [
    {player: 'mario', score: 50},
    {player: 'yoshi', score: 30},
    {player: 'mario', score: 70},
    {player: 'crystal', score: 60}
  ];

const marioTotal = scores_player.reduce((accum, curr) => {
    if (curr.player === 'mario') {
        accum+= curr.score;
    }
    return accum;
}, 0);

console.log(marioTotal);

// find method : returns first finding only that passes a certain test in a call back function
// it stops when it first finding is found 
const firstHighScore = scores.find((score) => {
    return score > 50;
});

console.log(firstHighScore);

// sort method , as it does not return a new value i cant say const newNames = names.sort();
// sort method is destructive as it changes the original array 

const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];

names.sort();

console.log(names);

scores.sort();
console.log(scores); // [10, 15, 25, 30, 40, 5, 50, 75, 90, 99] here its seeing only first integer so 5 is in between the array 

// to fix the above issue
scores.sort((a, b) => b - a);

console.log(scores);

// sort players based on their scores , just scores_player.sort(); it wont know to sort based on player name or score 

// a & b represent any 2 consecutive element in side the array , if a should come first we return negative number -1
// if b should come first we return positive number +1 , if two elements are same no re-ordering needed we return 0
scores_player.sort((a, b) => {
    if (a.score > b.score) {
        return -1; // remember we want a to come first , because remember we want higher score to come first 
    } else if (b.score > a.score) {
        return 1; // rememebr we want b to come first, because remember we want higher score to come first
    } else {
        return 0; // both are same so return 0 and there will be no change 
    }
});

// the above is a longer version of sorting array of objects , below will be the shorter version which does exactly the same 

console.log(scores_player);

scores_player.sort((a, b) => {
    return b.score - a.score;
});

// chaining array 
//const filtered_products = products.filter(product => product.price > 20);
//
//const promos = filtered_products.map((product) => {
//    return `the ${product.name} is ${product.price/2} pounds`;
//});
// combine above two operations 
// usually method chaining can be done in 1 line but its a good practice to indent 
const promos = products
    .filter(product => product.price > 20)
    .map(product => `the ${product.name} is ${product.price/2} pounds`);

console.log(promos);