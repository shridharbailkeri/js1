class Forecast{
    constructor(){
        this.key = 'nZC3A2N2Ca2vHvrdGMqTGVjwEzDOWaph';
        this.weatherUri = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUri = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        // getCity is async function and it returns a promise so use await 
        // i can call these getCity and getWeather functions here because in index.html forcast.js comes before app.js 
        // means by the time i call them here the whole forcast.js is already defined 
        const cityDetails = await this.getCity(city);

        const weather = await this.getWeather(cityDetails.Key);
        // returning an object here but because this an async function its returning a promise 
        // objectshort hand notation - if property name is same as value name then we can use this notation also for an object
        // return {cityDetails, weather}
        return {
            cityDetails: cityDetails,
            weather: weather
        };
    }

    async getCity(city) {
        //const baseUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        // query param means ? question mark , when we add multiple query params separate them by amphersands &
        const queryParam = `?apikey=${this.key}&q=${city}`;
        //await because we wait right here untill this promise is resolved 
        const response = await fetch(this.cityUri + queryParam); // this fetch(baseUrl + queryParam) returns a promise and once its resolved passes it to respose variable
        // when we get response from fetch api , we need to turn that data using the json method again await because json method returns a promise again 
        const data = await response.json();
        //console.log(data[0]);
    
        return data[0]; // because this is async function this returns a promise , so further use .then method 

    }

    async getWeather(city_key) {
        //const baseUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';

        const query = `${city_key}?apikey=${this.key}`;
    
        const response = await fetch(this.weatherUri + query);
    
        const data = await response.json();
    
        //console.log(data);
        return data[0]; // data[0] returning object rather than an array 
    }
}

// forcast.js is for interacting with apis 
// when we make request for an api, typically that api is going to give us an api key so that when we make the request we send this key with the request 
// and when it reaches their servers they know who made the request and which application is making it thats the whole idea of creating an app on accuweather api website
// just an identification purpose 
// free app means we can create only 1 app and  that can have only 50 requests per day , u can delete the app then add new app 
//const apiKey = 'nZC3A2N2Ca2vHvrdGMqTGVjwEzDOWaph';
// when we request data from endpoint we do 2 differnt things , 
// first we need to make request to certain endpoint to get city info and in that city info there will be city code
// once we have city code we r going to use it make a second request to a weather conditions api enspoint we send that city code to it 
// which identifies where we want to get weather, and it will send us  the weather condition back for that area 
// check api reference always - there go to location api then city search where u get city code 
// then go to current conditions api and current conditions endpoint 
// its async because we r making  a request and we want it to return a promise 
//const getCity = async (city) => {
//
//};

// for testing 
//getCity('karlsruhe')
//    .then(data => {
//        return getWeather(data.Key); // getWeather(data.Key) again returns a promise means i could use .then 
//    }).then(data => {
//        console.log(data);
//    })
//    .catch((error) => console.log(error));

// get weather info 
//const getWeather = async (city_key) => {
//
//};

//getWeather('167218');