import {profileAPI, usersAPI} from "../api/api";

const ADD_POST= 'ADD-POST';

const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';

let initialState=
{
    postsData: [{id: 1,
        message: "Hi, How are you?",
        likesCount: 12},
        {id: 2,
            message: "It's my first post",
            likesCount: 24}],
    profile: null,
    status: ""
};


const profileReducer=(state=initialState, action)=>{


    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

    }

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile};
        };
        case SET_STATUS: {
            return {...state, status: action.status};
        }

        default: return state;
    }

}
export const addPostActionCreator=(newPostText)=> {
    return {type: ADD_POST, newPostText};
}
export const setUserProfile=(profile)=> {
    return {type: SET_USER_PROFILE, profile};
}

export const getUserProfile=(userId)=>(dispatch)=> {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}

export const getStatus=(userId)=>(dispatch)=> {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    });
}

export const updateStatus=(status)=>(dispatch)=> {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode===0) {
        dispatch(setStatus(status));
        }
    });
}

export const setStatus=(status)=>({
    type: SET_STATUS, status
})


export default profileReducer;