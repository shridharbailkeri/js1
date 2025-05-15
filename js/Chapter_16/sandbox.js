const listt = document.querySelector('ul');

const form = document.querySelector('form');

const unsubButton = document.querySelector('button');

const addRecipe = (recipe, id) => {
    date_created = recipe.created_at.toDate();
    // data-id here data- is mandatory but after that id you can call it anything here its called id because its logical
    let html = `
        <li data-id="${id}">
            <div>${recipe.title}</div>
            <div>${date_created}</div>
            <button class = "btn btn-danger btn-sm my-2">delete</button>
        </li>
    `;
    listt.innerHTML += html;
}
// deleting or hiding in the ui or html template 
const deleteRecipeInUI = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id){
            recipe.remove();
        }
    });
}
// get documents
//db.collection('recipes').get().then((snapshot) => { // snapshot is the data that is returned to us , snpashot is a pictur of how the collection looks at that point of time 
//    // when we have the data
//    //console.log(snapshot.docs[0].data());
//    snapshot.docs.forEach(doc => {
//        console.log(doc.data());
//        addRecipe(doc.data(), doc.id);
//    });
//}).catch((error) => {
//    console.log(error);
//});
// set uo real time listener, every time there is a change in the database and u take a snapshot fire this call back function 
// every time firbase db is changed , check if item added in db then add that item to UI and if item deleted in db then delete item in UI
const unsub = db.collection('recipes').onSnapshot(snapshot => {
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if (change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        } else if (change.type === 'removed'){
            deleteRecipeInUI(doc.id);
        }
    });
});

// add documents 
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();

    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now)
    };

    // this asynchronous , will return a promise below
    // () we are not taking any parameter inside () because we r not trying to get data from db , we just want to fire this when recipe is added 
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(error => {
        console.log(error);
    });
});

// deleting the data in database 

listt.addEventListener('click', e => {
    // check if the clicked target is a button
    if (e.target.tagName === 'BUTTON'){
        const id = e.target.parentElement.getAttribute('data-id');
        // again this is asynchronous below
        db.collection('recipes').doc(id).delete().then(() => {
           console.log('recipe deleted');
        }); 
    }
});

unsubButton.addEventListener('click', () => {
    unsub();
});