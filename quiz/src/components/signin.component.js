import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
// import { Redirect } from 'react-router'
import ResetPassword from "./reset-password.component";
import SignUp from "./signup.component";
// import AddNewQuestion from "./add-question.component";
import { API_URL } from "./../shared/constants";

export default class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
        // this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (event) => { 
        const formData = new FormData(event.target);
        console.log(formData.entries());
        const theData = {};
        event.preventDefault();
        for (var [key, value] of formData.entries()) {
            theData[key] = value;
        }
        console.log("submitted", theData);
        this.callAPI(theData);
    }

    callAPI(theData) {
        fetch(API_URL + '/login', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                username: theData.username,
                password: theData.password})
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if(result.user.userType === 'admin') {
                
            }
        })
        .catch(error => console.log('error', error));
    }

    render() {
        return (
           <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit} >
                        <h3>Sign In</h3>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" placeholder="Username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                            autoComplete="on" />
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