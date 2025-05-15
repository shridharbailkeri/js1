const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest(); // this request objectcan work woth xml , json , plain text etc , send request from browser 
        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState); // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
            if (request.readyState === 4 && request.status === 200) {
                //console.log(request.responseText);
                const data = JSON.parse(request.responseText) // converts json strings to javascript objects 
                // in java script object key_str:"value", in json object "key_str":"value" thats the difference 
                //callback(undefined, data);
                resolve(data);
            } else if(request.readyState === 4) {
                //console.log('could not fetch the data');
                //callback('could not fetch data', undefined);
                reject('error getting results');
            }
        }); 
    
        //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // readystate 1 this is just setting up request , but still request is not made / not sent
        //request.open('GET', 'todos.json');
        request.open('GET', resource);
        // crux of json transerfing data from server to client 
        request.send(); // readystate 2 now request is made/sent
    });

};


console.log(1); 

console.log(2); 

// getTodos('json/luigi.json') this returns a promise means u can use .then method 
// this is another way other than using callbacks to work with asynchronous code , really handy when we try to get data sequentially one after the other 
// because we will be able to chain promises together 
// to perform asynchronous task one after another in order with callbacks is messy , instead using promise chaining 
getTodos('json/luigi.json').then((data) => {
    console.log('promise 1 resolved: ', data);
    return getTodos('json/mario.json'); // now again here at this point we r returning a promise - means we can use then method 
}).then((data) => {
    console.log('promise 2 resolved: ', data);
    return getTodos('json/shaun.json');
}).then((data) => {
    console.log('promise 3 resolved: ', data);
}).catch((error) => {
    console.log('promise rejected: ', error);
});
// now we dont get callback hell 
// .catch in the end 1 catch catches any error u dont need to write catch 3 times to read 3 files sequentially 

//getTodos('json/mario.json').then((data) => {
//    console.log('promise resolved', data);
//}).catch((error) => {
//    console.log('promise rejected: ', error);
//});
//
//getTodos('json/shaun.json').then((data) => {
//    console.log('promise resolved', data);
//}).catch((error) => {
//    console.log('promise rejected: ', error);
//});


// promise example

//const getSomething = () => {
//
//    return new Promise((resolve, reject) => {
//        // theis is where we make network request / fetch something , resolve, reject these are not mad up they are built into promise api in js
//        // if success
//        resolve('some data');
//        // if error
//        //reject('some error');
//
//    }); 
//    // promise is something that basically needs sometime to do 
//    // promise is going to lead to one of the two outcomes either a promise is going to be resolved or rejected meaning we get an error at some point 
//    // and we reject the promise 
//};

console.log(3); 

console.log(4); 
// the first callback function is fired when something is resolved 
// second callback function is fired when something is rejected 
//getSomething().then((data) => {
//    console.log(data);
//}, (error) =>{
//    console.log(error);
//});

// instead of having second call back method for reject case like above we can use catch , what it does is catch an error
//getSomething().then((data) => {
//    console.log(data); // fire when resolved 
//}).catch((error) => {
//    console.log(error); // catch / fire when error
//});
// previously we used xmlhttprequest to make an http request its completely fine to use it, many ppl use it 
// however there is newer and quicker way to make these httprequests using native fetch api

// requires much less code it also implements promise api under the hood which is going to make handling success and error cases easy 

// then why did i learn older way when i have new and easier way , reason is just to have knowledge of whats happening when we use different ways 

// first argument could be a resource we want to fetch could be an endpoint to an api or local resource 
// this returns a promise means .then method 
// way fetch api works is promise is ever rejected when we get some kind of network error just simple wrong filename will still output 'resolved fetch api: ', response
// just mis typing url then we dont get rejected , however in response when we expand it we see status 404
console.log('fetch api')
fetch('json/luigi.json').then((response) => { // response this is a response object created 
    console.log('resolved fetch api: ', response); // response.json() returns a promise so you cant do const data = response.json()
    return response.json(); // response.json() is a promise means you can chain .then method 
}).then((data) => { // even though response.json() returns a promise but after its resolved it returns the data that we need 
    console.log('resolved fetch apiii: ', data);
}).catch((error) => {
    console.log('rejected: ', error);
}); // much less code to write and much easier to maintain in future we use this 

// async and await basically allow us to chain promises in a clean and much more readable way 
// section out all our asynchronous code into a single function - an asynchronous function and then use await keyword inside to chain promises together
// in a much more readable and logical way 
// now this is an asynchronous function, whenevr we call an asynchronous function that returns a promise 
const getTodosAsynchronously = async() => {
    // what this does is do this fetch and fetch returns a promise , await keyword stalls javascript right at its point, it stops js from assigning 
    // value to response untill the promise has resolved , once the promise has been resolved we can take the value from that resolved function thats the response
    // and assign it to the response variable , thats why u dont need .then method here 
    // when tutor told stalling js means its blocking but nits not remember - adding all of this inside an async function itslf is non blocking 
    // all of this stuff is handled somewhere else in the browser 
    const response = await fetch('json/luigi.json'); // 'json/luigis.json' wrong url wont be rejected here still resolves, 
    // but we still get an error it still says error in json which is not true , 
    // truth is there is error in url or file name, u still get error because this promise response.json() in next line is getting rejected
    // so u have to manually check if response object has status 200 , if status is not 200 then we can throw our own error to combat this 
    if (response.status !== 200) {
        throw new Error('cannot fetch the data'); // when we throw a new error inside an async function then the promise returned by this async function is rejected means it can be caught below by .catch
    }
    console.log('async response as promise', response);
    // remember the json method is asynchronous in itself it returns a promise in itself , so we can use await keyword to chain on this promise 
    const data = await response.json(); // because response itself is a promise 
    console.log('async response as json', data);
    return data; // even though we return data which is response.json(); but as data is returned from inside of an asynchronous fn now data itself is a promise 
    // so here we r returning data again as a promise 
};

// this is non blocking 
console.log(5);
console.log(6);  
getTodosAsynchronously()
.then((data) => {
    console.log('resolved async in the end ', data);
}).catch((error) => {
    console.log('rejected: ', error.message); //  if there is syntax error or problem with json file then this catches it 
});

console.log(7);
console.log(9);  

