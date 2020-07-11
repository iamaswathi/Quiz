import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SignIn from "./signin.component";

export default class SignUp extends Component {
    render() {
        return (

           <div className="auth-wrapper">
                <div className="auth-inner">
                    <form>
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label htmlFor="name">Name (Full)</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" name="username" placeholder="Username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" name="email" placeholder="Email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                            autoComplete="on" />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <p className="forgot-password text-right">
                            Already registered, <a href="/sign-in">Sign In?</a>
                        </p>
                    </form>
                </div>

                <Switch>
                    <Route path="/sign-in" component={SignIn} />
                </Switch>
            </div>
        );
    }
}