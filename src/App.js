import React from 'react';

import Navbar from './components/Navbar/Navbar';
import './App.css';
//import Profile from './components/Profile/Profile';
//import Dialogs from './components/Dialogs/Dialogs';
//import { BrowserRouter, Route } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import store from './redux/store';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/UsersContainer";
import LoginPage from "./components/Login/Login"
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "./redux/auth-reducer";
import {withRouter} from "./hoc/withRouter";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import Preloader from "./components/common/Preloader/Preloader";
import Login from "./components/Login/Login";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
        return (
            <Router>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path='/dialogs/' element={<DialogsContainer/>}/>
                        </Routes>
                        <Routes>
                            <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        </Routes>
                        <Routes>
                            <Route path='/users' element={<UsersContainer/>}/>
                        </Routes>
                        <Routes>
                            <Route path='/login' element={<LoginPage/>}/>
                        </Routes>
                        <Routes>
                            <Route path='/news' element={<NewsContainer/>}/>
                        </Routes>
                        <Routes>
                            <Route path='/music' element={<Music/>}/>
                        </Routes>
                        <Routes>
                            <Route path='/settings' element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        );
    }
}

//export default connect(null, {getAuthUserData})(App);
const mapStateToProps=(state)=>({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
