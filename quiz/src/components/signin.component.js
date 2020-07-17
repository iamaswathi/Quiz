import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ResetPassword from "./reset-password.component";
import SignUp from "./signup.component";
// import AddNewQuestion from "./add-question.component";
import { API_URL, VALIDATION_REGEX } from "./../shared/constants";

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            emailOrPhone: '',
            password: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        // this.setState(changeObject)
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    checkFormValidity() {
        let errors = {};
        let formIsValid = true;

        const validEmail = VALIDATION_REGEX.email.test(this.state.emailOrPhone);
        const validPhone = VALIDATION_REGEX.phone.test(this.state.emailOrPhone);
        
        if (!this.state.emailOrPhone || this.state.emailOrPhone === ""){
            formIsValid = false;
            errors["emailOrPhone"] = "Enter an email or phone";
        } else if (!validEmail && !validPhone) {
            formIsValid = false;
            errors["emailOrPhone"] = "Enter a valid email or phone";
        }

        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Password required.";
        } else if(this.state.password !== "" && this.state.password.length < 8 ) {
            errors["password"] = "Password must contain at least 8 characters";
        }

        this.setState({
        errors: errors
        });

        return formIsValid;
    }

    callAPI() {
        fetch(API_URL + '/login', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: this.state.emailOrPhone,
                password: this.state.password})
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.user.userType === 'admin') {
                // return <AddNewQuestion />
            }
        })
        .catch(error => console.log('error', error));
    }

    handleSubmit = (event) => { 
        event.preventDefault();
        if(this.checkFormValidity()) {
            // this.callAPI();
        }
    }

    render() {
        return (
           <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit} onChange={(e) => {this.handleChange(e)}}>
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label htmlFor="emailOrPhone">Email or Phone</label>
                            <input type="text" className="form-control" name="emailOrPhone" placeholder="Email or Phone" />
                            <div className="errorMsg">{this.state.errors.emailOrPhone}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password" autoComplete="on" />
                            <div className="errorMsg">{this.state.errors.password}</div>
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" name="rememberMe" />
                                <label className="custom-control-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <span className="forgot-password text-right">
                            Forgot <a href="/reset-password">password?</a>
                        </span>
                        <span className="forgot-password text-left">
                            Create new <a href="/sign-up">Account</a>
                        </span>
                    </form>
                </div>

                <Switch>
                    <Route path="/reset-password" component={ResetPassword} />
                    <Route path="/sign-up" component={SignUp} />
                </Switch>
            </div>
        );
    }
}