import React, { Component } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import SignIn from "./signin.component";
import { API_URL, regex } from "./../shared/constants";

export default class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            password: '',
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    checkFormValidity() {
        let errors = {};
        let formIsValid = true;

        const validName = regex.name.test(this.state.name);
        const validEmail = regex.email.test(this.state.email);
        const validPhone = regex.phone.test(this.state.phone);
        const validPassword = regex.password.test(this.state.password);
        
        if (!this.state.name || this.state.name === ""){
            formIsValid = false;
            errors["name"] = "Enter a name";
        } else if (!validName) {
            formIsValid = false;
            errors["name"] = "Enter a valid name";
        }
        if (!this.state.email || this.state.email === ""){
            formIsValid = false;
            errors["email"] = "Enter an email";
        } else if (!validEmail) {
            formIsValid = false;
            errors["email"] = "Enter a valid email";
        }

        if (!this.state.phone || this.state.phone === ""){
            formIsValid = false;
            errors["phone"] = "Enter an phone";
        } else if (!validPhone) {
            formIsValid = false;
            errors["phone"] = "Enter a valid phone";
        }

        if (!this.state.password || this.state.password === "") {
            formIsValid = false;
            errors["password"] = "Enter a Password.";
        } else if( !validPassword ) {
            errors["password"] = "Enter a valid Password. Check password policy";
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
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
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
                        <h3>Sign Up</h3>

                        <div className="form-group">
                            <label htmlFor="name">Name (Full)</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" />
                            <div className="errorMsg">{this.state.errors.name}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" className="form-control" name="phone" placeholder="Phone" />
                            <div className="errorMsg">{this.state.errors.phone}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="text" className="form-control" name="email" placeholder="Email" />
                            <div className="errorMsg">{this.state.errors.email}</div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password"
                            autoComplete="on" />
                            <div className="errorMsg">{this.state.errors.password}</div>
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