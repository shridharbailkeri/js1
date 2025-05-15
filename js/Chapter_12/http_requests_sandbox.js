// now write a call back function to execute when the below task is complete console.log(request.responseText); 

const getTodos = (resource, callback) => {

    const request = new XMLHttpRequest(); // this request objectcan work woth xml , json , plain text etc , send request from browser 
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState); // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        if (request.readyState === 4 && request.status === 200) {
            //console.log(request.responseText);
            const data = JSON.parse(request.responseText) // converts json strings to javascript objects 
            // in java script object key_str:"value", in json object "key_str":"value" thats the difference 
            callback(undefined, data);
        } else if(request.readyState === 4) {
            //console.log('could not fetch the data');
            callback('could not fetch data', undefined);
        }
    }); 

    //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); // readystate 1 this is just setting up request , but still request is not made / not sent
    //request.open('GET', 'todos.json');
    request.open('GET', resource);
    // crux of json transerfing data from server to client 
    request.send(); // readystate 2 now request is made/sent 
};

// when we do network request convention is always we do error first and then the data 
// call back function 
// now try asynchronous code 
console.log(1); // this fires 

console.log(2); // this fires 

getTodos('json/luigi.json' , (error, data) => { // then this starts , thats going to start the network request , this going to pass this part to another part of the browser so that we can carry on with next statements console.log(3); and console.log(4); in the queue
    console.log('callback fired');
    if (error) {
        console.log('error');
    } else {
        console.log(data);
    }
    getTodos('json/mario.json' , (error, data) => {
        console.log('callback fired');
        if (error) {
            console.log('error');
        } else {
            console.log(data);
        }
        getTodos('json/shaun.json' , (error, data) => {
            console.log('callback fired');
            if (error) {
                console.log('error');
            } else {
                console.log(data);
            }
        });
    });
});
// if you want to do above stuff elegently use promise


console.log(3); // this fires

console.log(4); // this fires 

// then in the end we fire this call back function when the data has come back to us and the rest of the statements have been fired , non blocking code 
// what are http requests
// make http requests to get data from another server or stuff stored in db 
// we make these requests to api endpoints , urls api exposes to us 
// once we make a request from browser to an endpoint of a server , we get back sselection of data format called json
// make a request object



// this fires everytime when there is a state change in the request 
// state change means the reqeust is going through different phases of change, and there are 4 phases in total 
// just this check request.readyState === 4 is not enough , if end point url is wrong it still goes through different phases and reaches phase 4 
// in such cases we dont get any data back because end point url is not correct , there will be some kind of error along the line 
// so additionally u need to check response status , status of 200 means everythin ok with the request 
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status



// ready state 3 loading Downloading; responseText holds partial data.
// ready state 4 done The operation is complete., this is when we can take that data and do something with it 

// how to know whether the request is complete? how to track its progress? - use event listener - ready state change 












