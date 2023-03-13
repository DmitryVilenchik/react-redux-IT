import React from "react";

import Header from "./Header";
//import axios from "axios";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {withRouter} from "../../hoc/withRouter";
//import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps=(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    email: state.auth.email
});
export default connect(mapStateToProps, {logout}) (HeaderContainer);