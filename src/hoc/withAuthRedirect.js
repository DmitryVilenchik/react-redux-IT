import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";


let mapStateToPropsForRedirect=(state)=>({
    isAuth: state.auth.isAuth
});
export const withAuthRedirect=(Componenet)=>{
    class RedirectComponent extends React.Component {

        render() {
                if (!this.props.isAuth) return <Navigate to='/login'/>;

                return <Componenet {...this.props} />
            }
        }


 let ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}