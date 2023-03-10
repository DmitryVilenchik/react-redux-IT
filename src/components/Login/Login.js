import React from "react";
import ReduxForm from "redux-form/lib/reduxForm";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/vilidators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";

const LoginForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
           <div>
               <Field name={"email"} placeholder={"Email"} component={Input} validate={[required]}/>
           </div>
           <div>
               <Field name={"password"} placeholder={"Password"} type={"password"} component={Input} validate={[required]}/>
           </div>
           <div>
               <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
           </div>
            { props.error && <div className={style.formSummaryError}>
                {props.error}
            </div> }
           <div>
               <button>Login</button>
           </div>
       </form>
    )
}

const LoginReduxForm=reduxForm({form: 'login'})(LoginForm)
const Login=(props)=>{
    const onSubmit=(formData)=>{
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {return <Navigate to='/profile'/>;}

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


const mapStateToProps=(state)=>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);