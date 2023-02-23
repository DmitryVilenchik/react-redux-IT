import React from "react";
import {connect} from "react-redux";
import News from "./News";
import {setNewsAC, addNewsAC} from "../../redux/news-reducer";

let mapStateToProps=(state)=> {
    return {
        news: state.newsPage.news
    }
}

let mapDispatchToProps=(dispatch) => {
    return {

        setNews: (news) => {
            dispatch(setNewsAC(news))
        },
        addNews: () => {
            dispatch(addNewsAC())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (News);