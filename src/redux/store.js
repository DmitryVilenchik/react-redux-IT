import sidebarReducer from './../redux/sidebar-reducer';
import dialogsReducer from './../redux/dialogs-reducer';
import profileReducer from './../redux/profile-reducer';

let store={
  _state: {
    profilePage: {
        postsData: [{id: 1,
            message: "Hi, How are you?",      
            likesCount: 12},
            {id: 2,
            message: "It's my first post",      
            likesCount: 24}],
            newPostText: "Jumbo"            
    },
    messagesPage: {
        dialogData: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Elena"}, 
            {id: 3, name: "Dank"},
            {id: 4, name: "Ilya"}
        ],
        messagesData: [
            {id: 1, message: "Hello"},
            {id: 2, message: "How are you"},
            {id: 3, message: "Yo"}
        ],
        newDialogText: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('State chainged');
  },
  getState() {

    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber=observer;
  },
 
  addDialog() {
    let newDialog={
      id: 6,
      message: this._state.messagesPage.newDialogText
    };
    let newNameDialog={
      id: 5,
      name: "Dmitry"
    };
    this._state.messagesPage.dialogData.push(newNameDialog);
    this._state.messagesPage.messagesData.push(newDialog);
    this._state.messagesPage.newDialogText='';
    this._callSubscriber();
  },
  updateNewDialogText(textDialogNew) {
    this._state.messagesPage.newDialogText=textDialogNew;
    this._callSubscriber();
  },
  addPost() {

    let newPost={
      id: 3, 
      message: this._state.profilePage.newPostText,
      likesCount: 0 
    };  
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText='';
    this._callSubscriber();
    },
    updateNewPostText(newText) {
    
      this._state.profilePage.newPostText=newText;
      this._callSubscriber();
      },
      dispatch(action) {

          this._state.profilePage = profileReducer(this._state.profilePage, action);
          this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
          this._state.sidebar = sidebarReducer(this._state.sidebar, action);

          this._callSubscriber(this._state);

      }
}



export default store;