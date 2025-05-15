console.log(1);
console.log(2);

// set time out here is to simulate time consuming task example get data from db etc, it takes 2 s to get data and then 
// then when data comes back and is read it will fire call back function , here we wait for 2 seconds and then fire console.log('callback function fired');
// setTimeout its asynchronous means it wont block the code gere
setTimeout(() => {
    console.log('callback function fired');
}, 2000);

console.log(3);
console.log(4);

// set time out executes somewhere here after console.log(4); is executed , its the same principle
// also in future instead of using set time out we use http request / network requests something 

