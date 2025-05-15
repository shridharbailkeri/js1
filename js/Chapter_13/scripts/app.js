// app.js is for DOM manipulation 
const cityForm = document.querySelector('form');

// to update the ui for the new weather details we need to get hold of the below 
const card = document.querySelector('.card');
const details = document.querySelector('.details');

const time = document.querySelector('img.time'); // image with class of time 'img.time'

const icon = document.querySelector('.icon img'); // first of all we want div with class icon then we want the image inside that .icon img

const forecast = new Forecast();

const updateUI = (data) => {
    // what destructuring in js allows us to do in js is 
    // is to take an object like data and take properties of that object and store them in a variable of same name as that property 
    // so u dont need to explicitly write const cityDetails = data.cityDetails; const weather = data.weather;
    //const cityDetails = data.cityDetails;
    //const weather = data.weather;
    // destructure the properties now , inside the curly braces the constants must have same name as property of the object
    const {cityDetails, weather} = data;

    // update details template, for that every time you have to look at html page and look how it looks like
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div> <!--rainy cloudy -->
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>  
    `;
    // update the night/day icon images 
    //let timeSrc = null; // used let because we r going to overwrite this value 
//
    //if (weather.IsDayTime) {
    //    timeSrc = 'img/day.svg';
    //} else {
    //    timeSrc = 'img/night.svg';
    //}
    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeSrc);

    // update icon
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`; // is going to be template string because we r going to output variavle here, variable is dynamic 1 to 44 
    icon.setAttribute('src', iconSrc);

    // ternary operator, it true return a certain value if false return  a certain value 


    // remove the d-none class if present 
    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none');
    }
};
// its going to be async function because inside it its going to be calling getCity and getWeather async functions 
//const updateCity = async (city) => {
//
//};

// add an event listener sumbit event , when we write something in a form and press enter its a submit event 
// e => is call back fn that takes that event object as an argument 
// when we hear a submit event preventdefault, get city value , reset the form, call update city with the city user types in
// get city key and its weather as an object 
cityForm.addEventListener('submit', e =>{
    // prevent default action of refresh
    e.preventDefault();
    // now get the city value, thing that the use typed , catch hold of input tag inside the form now it has name="city"
    const city = cityForm.city.value.trim(); // trim off all preceding and trailing white spaces of a string
    // now after extracting the city value , form can be reset 
    cityForm.reset();

    // now ui can be updated with the new city 
    // once the promise is resolved find the call back function inside the .then method which inturn takes object returned by updateCity as argument
    forecast.updateCity(city)
        .then(data => updateUI(data))
        .catch(error => console.log(error));

    // set local storage, most recent location only is stored, every time enter new one the value of the key gets overwritten 
    localStorage.setItem('city', city);
});

// this localStorage.getItem('city') returns a string and string of any length is a truthy value, if not it returns a null and its a falsy value
if (localStorage.getItem('city')) {
    forecast.updateCity(localStorage.getItem('city'))
        .then(data => updateUI(data))
        .catch(error => console.log(error));
}