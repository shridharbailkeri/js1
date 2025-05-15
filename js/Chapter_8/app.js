const correctAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers 

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    scrollTo(0,0);

    //console.log(score);
    // show results on page 
    
    result.classList.remove('d-none');
    //window object js - scroll to the top of the page where the score is displayed 
    // window object is global object in js its mother of all objects 
    // type in console window press enter

    // console.log('hello') is same as window.console.log('hello') 
    // document.querySelector('.quiz-form'); same as window.document.querySelector('.quiz-form');
    // alert('hello') same as window.alert('hello') 

    let output = 0;

    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

//setTimeout(() => {
//    alert('hello ninjas');
//}, 3000);
//let i = 0;
//const timer = setInterval(() => {
//    console.log('hello');
//    i++;
//    if (i === 5) {
//        clearInterval(timer);
//    }
//}, 1000);

// 1000ms = 1s
