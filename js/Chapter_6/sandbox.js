const para = document.querySelector('p');

console.log(para);

const para1 = document.querySelector('.error');

console.log(para1);

const para2 = document.querySelector('div.error');

console.log(para2);

// go to Elements select h1 tag copy - copy selector you get  body > h1
const para3 = document.querySelector('body > h1');

console.log(para3);

const paras = document.querySelectorAll('p');

console.log(paras);

console.log(paras[1]);
console.log(paras[2]);
// can use foreach on node list
paras.forEach(para => {
    console.log(para);
});

const eros = document.querySelectorAll(".error");

console.log(eros);

const title = document.getElementById('page-title');

console.log(title);
// get elms based on class name
const errors = document.getElementsByClassName('error');

console.log(errors);

console.log(errors[0]);

// cannot use foreach on htmlcollection

// get elms based on their tag name


// get all p tags 
const parass = document.getElementsByTagName('p');

console.log(parass);

console.log(parass[1]);

// adding and changing page content 

const prs = document.querySelector('p');

console.log('***');

prs.innerText += ' ninjas are awsome';
// innerText is not a method its a property hence we dont use paranthesis 
console.log(prs.innerText);
console.log('***');
const prrs = document.querySelectorAll('p');

prrs.forEach(parr => {
    console.log(parr.innerText);
    parr.innerText += " new text";
});

const cont = document.querySelector('.content');

console.log(cont.innerHTML);

cont.innerHTML += '<h2>This is a new H2 </h2>';

console.log(cont.innerHTML);

const ppl = ['mario', 'luigi', 'yoshi'];

ppl.forEach(person => {
    cont.innerHTML += `<p>${person}</p>`;
});

const lnk = document.querySelector('a');

console.log(lnk.getAttribute('href'));

lnk.setAttribute('href', 'https://www.google.co.in/');

console.log(lnk.getAttribute('href'));

lnk.innerText = 'google';

console.log(lnk.innerText);

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));

//mssg.setAttribute('class', 'error');

// you can also set attribute which currently does not exist 

//mssg.setAttribute('style', 'color:green;');

const title1 = document.querySelector('h1');

// title1.setAttribute('style', 'margin: 50px;'); this will overwrite the previous assigned style, that was color orange  
// console.log(title1.style) print this to console , elongate and see all properties possible list 
console.log(title1.style.color); //This property accesses the inline styles of the title1 element.

// not to overwrite original properties 
title.style.margin = '50px';

title.style.color = 'crimson';

title.style.fontSize = '60px';

// if you have to delete a style 

title.style.margin = '';

const content1 = document.querySelector('p');

//This property accesses the list of classes applied to the content1 element.
console.log(content1.classList); // gives all the list of properties this element has 

// add a class 

content1.classList.add('error');

// remove a class
content1.classList.remove('error');

content1.classList.add('success');

const parasP =document.querySelectorAll('p'); // this returns a nodelist u can use for each to cycle through it , u can also use for each on array

console.log("########")
parasP.forEach(p => {
    //console.log(p.textContent); // same as p.innerText innertext will hide error in this case where <p>lorem <span style="display: none;">error</span> ipsum</p>
    if (p.textContent.includes('error')) {
        p.classList.add('error');
    }

    if (p.innerText.includes('success')) {
        p.classList.add('success');
    }
});

// toggle a class - if an elemnt has a class take it off, if an element does not have a class then apply it 
// we could use the toggle method 


const title11 = document.querySelector('.title');

// <h1 class="title" id="page-title", style="color: orange;">DOM</h1>
// currently this does not have class of test toggle will hence give it the class of test 

title11.classList.toggle('test'); // used it once it does not have class test initially so now it gets class of test
title11.classList.toggle('test'); // used it second time so as now initially it has class of test , class of test now gets removed 

// parents children siblings 

const article = document.querySelector('article');

console.log(article.children); // rememebr we cannot use for each on html collection 

// take html collection and convert into an array 

console.log(Array.from(article.children)); 
Array.from(article.children).forEach((child) => {
    child.classList.add('article-element');
});


const title_article = document.querySelector('h2');

// find its parent 
console.log(title_article.parentElement);

console.log(title_article.parentElement.parentElement);

console.log(title_article.parentElement.parentElement.parentElement);

// sibling get 
console.log(title_article.nextElementSibling);

console.log(title_article.previousElementSibling);

// chaining avoid it just for extreme case 

console.log(title.nextElementSibling.parentElement.children);

// events basics clicks delete something etc 
// user clicking on this button
// 3 steps
// we need to query the dom where we expect the event to happen here its click me button 
// add whats called event listener to the element an event listener actively listens to the user events on a specific element 
// write a callback function which will fire when that event will happen  - when user clicks on the button 

//const button = document.querySelector('button');
//
//button.addEventListener('click', () => {
//    console.log('you clicked me');
//}); // this method actively listens to certain events on this button
// parameter 1: what event u want to listento there are many , here click event 
// second param is call back function here array function 
// below we will see when user clicks on button we delete one item li tag in to do list 
const ul = document.querySelector('ul');
//ul.remove(); removes whole ul element 
const but = document.querySelector('button');

but.addEventListener('click', () => {
    //ul.innerHTML += '<li>something new to do</li>';
    const li = document.createElement('li');
    li.textContent = 'something new to do';
    // now to append or prepend 
    ul.append(li);
    //ul.prepend(li);
});

// when refresh happens as some lis are already present in index.html the below foreach will add event listere to remove
// when u add a new to do button after clicking the node list below is still having only old elements lis which are originally present
// button added after click are not yet updated so u cant delete them , so use event bubbling (delegation)
//const itemsButton = document.querySelectorAll('li'); // node list of li tags 
//// attach event listener to each one of them , use call bcak function inside for each 
//itemsButton.forEach(item => {
//    item.addEventListener('click', (e) => {
//        //console.log('item clicked');
//        // elongate mouse element in console and look for target property out of the many because target: li was clicked 
//        //console.log(e.target); // preferable 
//        //console.log(item); does same thing 
//        //e.target.style.textDecoration = 'line-through';
//        console.log('event in LI');
//        e.stopPropagation();
//        e.target.remove();
//    });
//});
// when an event is clicked the browser gives us back a parameter called e or event (internally happens may be ) u can call it what u want
// basically its an event object here called e 

// creating and removing elements 

// event bubbling means if an li tag has event listener attached to it it will contact its parent ul to checkif there is an event listener and callback fn attached to it
// if ul has an event listener then it will reach its parent body to check if body has an event listener attached to it and so on
// when li tag has event listener it will contact its callback function and after that it will go to its parent if parent has an event listener 
// if u dont want bubbling to happen then u can stop propagation
ul.addEventListener('click', e => {
    //console.log('event in UL');
    // what thing was initially clicked 
    //console.log(e);
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
});

// when you select a text and copy in index.html then its a copy event 
const copy1 = document.querySelector('.copy-me');

copy1.addEventListener('copy', () => {
    console.log('OL! my content is copyright');
});

// mouse move in the box , where ever clicked get x and y position 

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {
    //console.log(e);
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `x pos -${e.offsetX} y pos -${e.offsetY}`;
});

// enlarge mouse event and offsetX is distance from left side of container/box 
// offsetY is distance from the top 

// wheel event - means wheel on ur mouse to go above and below in a page 
// add event listener directly to document object 
document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
})
// enlarge wheel event u get pageX and pageY
// pageX is relative to left of document and pageY is relative to top of the document 
// 

const button5 = document.querySelector('button');
const popupp = document.querySelector('.popup-wrapper');
const closePopup = document.querySelector('.popup-close');

button5.addEventListener('click', () => {
    popupp.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popupp.style.display = 'none';
});

// add event listener so that u click anywhere on popup wrapper popup shouldclose 

popupp.addEventListener('click', () => {
    popupp.style.display = 'none';
});