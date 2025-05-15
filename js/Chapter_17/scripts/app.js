// dom queries 
const chatList = document.querySelector('.chat-list');

const newChatForm = document.querySelector('.new-chat');

const newNameForm = document.querySelector('.new-name');

const updateMessg = document.querySelector('.update-mssg');

const rooms = document.querySelector('.chat-rooms');
// add a new chat 
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    // when we have an input feild <input></input> with id or name property we can use dot notation from the form to get that
    const message = newChatForm.message.value.trim();
    // async returns promise 
    chatroom.addChat(message)
    .then(() => newChatForm.reset())
    .catch(error => console.log(error));
});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset the form
    newNameForm.reset();
    // show and then hide the update message
    updateMessg.innerText = `Your name was updated to ${newName}`;
    setTimeout(() => updateMessg.innerText='', 3000);
});

// update the chat room
rooms.addEventListener('click', e => {
    if (e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(chat => chatUI.render(chat));
    }
});

// before we create class instance where app actually starts 
// check local storage , ternary operator
const username = localStorage.username ? localStorage.username : 'anon';

// class instances 
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);
console.log(chatroom);

//chatroom.addChat('hello everyone')
//    .then(() => {
//        console.log('chat added');
//    }).catch(error => console.log(error));

// get chats and render 
// everytime we get a change that is "added" we fire the callback and pass back that single object
chatroom.getChats((data) => {
    //console.log(data);
    chatUI.render(data);
});