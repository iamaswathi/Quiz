import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import ResetPassword from "./reset-password.component";

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
        this.callAPI();
    }

    callAPI() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' },
            body: {
                username: 'admin',
                password: 'admin'
            }
        };
        // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({ postId: data.id }));
        fetch("https://8f462d07-eef9-44bf-8290-2b2d9a3dd6f5.mock.pstmn.io/login", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        //   .then(qList => {
        //     this.setState({ questionsList: qList.questions });
        //     console.log(this.state);
        // });
    }
    render() {
        return (
           <div className="auth-wrapper">
                <div className="auth-inner">
                <form onSubmit={this.handleSubmit} >
                    <h3>Sign In</h3>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter email" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                         autoComplete="on" />
                    </div>

                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    <p className="forgot-password text-right">
                        Forgot <a href="/reset-password">password?</a>
                    </p>
                </form>
            </div>

            <Switch>
            <Route path="/reset-password" component={ResetPassword} />
          </Switch>
            </div>
        );
    }
}