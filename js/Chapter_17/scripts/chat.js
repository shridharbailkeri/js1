// adding new chat documents
// setting up a real-time listener to get new chats
// updating the username
// updating the room


class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    // adding new chat documents
    async addChat(message){
        // format a chat object
        const now = new Date();
        const chat = {
            message: message,
            username:this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document 
        const response = await this.chats.add(chat);
        return response;
    }
    // add real time listener that fires everytime there is a change 
    getChats(callback){
        this.unsub = this.chats
        .where('room', "==", this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                // every time we get a change that is "added" we fire the call back in app.js - chatUI.render(data); which keeps addling li tags of the chat object to const chatList = document.querySelector('.chat-list');
                if (change.type == 'added') {
                    // update the ui
                    //everytime we get a change that is "added" we fire the callback and pass back that single object
                    callback(change.doc.data());
                }
            });
        });
    }
    // updating the username
    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }
    // updating the room
    updateRoom(room){
        this.room = room; // step 1 we changed the room 
        console.log('room updated');
        // in constructor initially unsub is not set to any value
        // then later in getchats its set to a certal value/ function
        // if unsub has certain value only then call it
        // if it has a vlaue it means its listening to previous change still
        // if you click on gaming room its still listening to general room
        // to dynamically listen to the changes in chatroom based on users clicks u need this 
        if (this.unsub) { // step 2 we unsubscribed the changes to the current firebase document we r listening to based on initial room , still not listening to changes on new room
            this.unsub();
        }
    }
}



// fire after 3000 milli seconds , every 3 ms it check if the chatroom is changed if yes shows all chats inside that chat room 
//setTimeout(() =>{
//    chatroom.updateRoom('general');
//    chatroom.updateName('yoshi');
//    chatroom.getChats((data) => {
//    console.log(data);
//});
//chatroom.addChat('hello general room');
//}, 3000);