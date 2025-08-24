const addForm = document.querySelector('.add'); 
const list = document.querySelector('.todos');

const search = document.querySelector('.search input'); // input refers to input tag <input class="form-control m-auto" type="text" name="search" placeholder="search todos" /> 

const generateTemplate = (todo) => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `; //`` is a template string
    // now you need to inject the template string in the ul 
    list.innerHTML += html;
};



addForm.addEventListener('submit', e => { // listen to this <form class="add text-center my-4">

    e.preventDefault();
    const todo = addForm.add.value.trim(); // get value from this add <input class="form-control m-auto" type="text" name="add" />
    // .trim() to remove spaces in starting
    //console.log(todo);
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset(); // to refresh already typed / submitted text from the box and make it empty 
    }
    
});

// event delegation is efficient in turms of performance and we dont have to add event listener to delete each item instead add even listener to whole ul to delete
// delete todos
list.addEventListener('click', e => {
    // target returns the actual element that was clicked , 
    // then check the clicked elemnts class list if it contains delete, if yes get that elemnts parent element and remove
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((todo) => { // todo is nothing but every li tag and todo.textContent will extract text inside span even though we apply on li tag, text inside span is extracted 
        return !todo.textContent.toLowerCase().includes(term) // so the new array returned by filer method will have all elms which do not include the term/typed text 
    })
    .forEach((todo) => {
        todo.classList.add('filtered')
    });
    // list.children is html collection cant use for each , filter methjod will go through all the elements in array Array.from(list.children), and fire the call back fn for each elemnt
    // filter method returns a new array , that new array is goint to be whatever items we keep in it, we keep an item in the array by returning true, we filter out an item by returning false 
    // if you had typed a term previously and that had caused some elements to be .filtered u need to remove that .filetered for the currently typed
    // so every time a term is typed 2 actions are mandatory , every time add .filtered to non matching to hide
    // everytime remove .filtered to matching to be visible again 
    Array.from(list.children)
    .filter((todo) => { // todo is nothing but every li tag and todo.textContent will extract text inside span even though we apply on li tag, text inside span is extracted 
        return todo.textContent.toLowerCase().includes(term) // so the new array returned by filer method will have all elms which do not include the term/typed text 
    })
    .forEach((todo) => {
        todo.classList.remove('filtered')
    });
    // !important; in styles.css for .filtered to override any other styles/classes it might have 
    // this sollution for filtering and hiding is chosen just as this chapter is related to array methods , there are many other ways 
};

// filter - there are many ways this is just one of them 
// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});