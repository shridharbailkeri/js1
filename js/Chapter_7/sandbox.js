// when use clicks submit button in a form along with click event also submit event on the form itself is fired 
// keyboard event pressses key on keyboard , alt or shift key pressed 
// when we listen to submit event we attach event listener to form itself 
const form = document.querySelector(".signup-form");
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
//const username = document.querySelector('#username'); // the id in index.html for username , if u did query selector on form itself then u dont need this line

// when submit button is clicked the default action is the page refreshes, you can prevent thatdefault action e.preventDefault
form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value);
    // username sheould be 6 to 12 chars in length and only upper case and lower case allowed 
    //console.log(form.username.value); // id of username, or instead of id in index.html u can replace id with name='username'
    // validation
    const username = form.username.value;
    
    if (usernamePattern.test(username)) {
        // feednack good info
        feedback.textContent = 'that username is valid';
    } else {
        // feedback help info
        feedback.textContent = 'username must contain letters only & be between 6 & 12 characters long';
    }
});

// https://regex101.com/
// testing regex
//const username = 'shaunp';
//const pattern = /^[a-z]{6,}$/;

//let result = pattern.test(username); // returns boolean
//
//if (result) {
//    console.log('regex test passed');
//} else {
//    console.log('regex test failed');
//}

//let result = username.search(pattern); // returns integer
//console.log(result);

// keyboard events to provide live feedback to user while he is typing whether its valid or not 
// live checking as user types 
// key up event will fire back everytime a character is typed 
// live feedback
form.username.addEventListener('keyup', e => {
    //console.log(e.target.value, form.username.value);
    // e.target.value, form.username.value both essentially gives same thing
    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});
