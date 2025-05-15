// store data in local storage
// local storage is on the window object window.localStorage in console
// or type just localStorage

//localStorage.setItem('name', 'Mario');
//localStorage.setItem('age', 50); // u can also go to application tab after pressing f12 for comsole and click local storage and see key value pair 

// get data from local storage
//let namee = localStorage.getItem('name');
//let age = localStorage.getItem('age');
//console.log(namee, age);

// updating data
//localStorage.setItem('name', 'luigi');
//localStorage.age = '40';
// get data from local storage
//namee = localStorage.getItem('name');
//age = localStorage.getItem('age');
//console.log(namee, age);

// delete data from local storage 
//localStorage.removeItem('name');

// to remove all items from local strorage

//localStorage.clear();

// stringifying and parsing data 
const todos = [
    {text: 'play mariokart', author: 'shaun'},
    {text: 'buy some milk', author: 'mario'},
    {text: 'buy some bread', author: 'luigi'}
  ];

// now we got js array of objects now we want to convert it to json string 
// to store these in local storage 
// step 1 take this data and turn it into a json string 
// in the past in async chapter how to take a json string and parse it into js array of objects 
// now we do the opposite , we got js array of objects and we want to turn that into a json string 

//console.log(JSON.stringify(todos)); // now this is in json string and its a good format to store in localstorage

localStorage.setItem('todos', JSON.stringify(todos)); // js array converted to json string and then stored in localstorage

const storedTodos = localStorage.getItem('todos');

console.log(JSON.parse(storedTodos)); // turns json string back into a js array 
