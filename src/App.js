import React, {Suspense} from 'react';

import Navbar from './components/Navbar/Navbar';
import './App.css';

import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



import LoginPage from "./components/Login/Login"
import UsersContainer from "./components/Users/UsersContainer";
import NewsContainer from "./components/News/NewsContainer";

import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";

import {initializeApp} from "./redux/app-reducer";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import Preloader from "./components/common/Preloader/Preloader";
import Login from "./components/Login/Login";
//import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer=React.lazy(()=>import('./components/Dialogs/DialogsContainer'));
const ProfileContainer=React.lazy(()=>import('./components/Profile/ProfileContainer'));

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
                        <Suspense fallback={<Preloader/>}>
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
                        </Suspense>
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
