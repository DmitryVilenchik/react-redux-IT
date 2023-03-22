import profileReducer, {addPostActionCreator} from './profile-reducer';
import {render, screen} from "@testing-library/react";
import App from "../App";

const state=
    {
        postsData: [{id: 1,
            message: "Hi, How are you?",
            likesCount: 12},
            {id: 2,
                message: "It's my first post",
                likesCount: 24}]
    };
const action=addPostActionCreator("New text for post - TEST");

test('profile-reducer test add post', () => {

    let newState=profileReducer(state,action);
    expect(newState.postsData.length).toBe(3);
});

test('profile-reducer add post', () => {

    let newState=profileReducer(state,action);
    expect(newState.postsData.length).toBe(3);
});

