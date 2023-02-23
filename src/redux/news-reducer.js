//const FOLLOW= 'FOLLOW';
//const UNFOLLOW='UNFOLLOW';
const SET_NEWS='SET_NEWS';
const ADD_NEWS='ADD_NEWS';

let initialState=
    {
        news: [
            {id: 1, fullName: "Dmitry", department: "Managment", salary: 15000, BirthDay: "19-11-1969", location: {city: "Tel-Aviv", country: "Israel"} },
            {id: 2, fullName: "Elena", department: "Director", salary: 20000, BirthDay: "26-06-1972", location: {city: "Tel-Aviv", country: "Israel"} },
            {id: 3, fullName: "Dan", department: "Reklama", salary: 30000, BirthDay: "25-02-2003", location: {city: "Tel-Aviv", country: "Israel"} },
            {id: 4, fullName: "Ilya", department: "Sales", salary: 30000, BirthDay: "02-08-2005", location: {city: "Tel-Aviv", country: "Israel"} },

        ]
    };


const newsReducer=(state=initialState, action)=> {

    switch (action.type) {
        case ADD_NEWS: {
            let newNews={id: 5, fullName: "Efim",
                department: "Pensioner", salary: 55000, BirthDay: "19-06-1933",
                location: {city: "Tel-Aviv", country: "Israel"}}
           return { ...state, news: [...state.news, newNews]}
        }
    case SET_NEWS: {
        return {...state, news: [...state.news, ...action.news]}
    }
    default:
    return state;
}
}
//export const followAC=(userId)=>({type: FOLLOW, userId})
//export const unfollowAC=(userId)=>({type: UNFOLLOW, userId})
export const setNewsAC=(news)=>({type: SET_NEWS, news})
export const addNewsAC=()=>({type: ADD_NEWS})

export default newsReducer;