import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Example from "./popover.component";

export default class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state = {
          type: 'password',
          score: 'null',
          showNPassword: false,
          showNCPassword: false
        }
        this.showHideNPassword = this.showHideNPassword.bind(this);
        this.showHideNCPassword = this.showHideNCPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    // showNPassword = () => this.setState(({type}) => ({
    //     type: type === 'password' ? 'text' : 'password'
    // }))
    
    // showNCPassword = () => this.setState(({type}) => ({
    //     type: type === 'password' ? 'text' : 'password'
    // }))

    showHideNPassword() {
        if ( this.state.showNPassword === false) {
            this.setState({showNPassword : true});
        } else{

            this.setState({showNPassword : false});
        }
    }
    showHideNCPassword() {
        if ( this.state.showNCPassword === false) {
            this.setState({showNCPassword : true});
        } else{

            this.setState({showNCPassword : false});
        }
    }

    handleChange (evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
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
        if(theData.newPassword !== theData.confirmPassword) {
        alert('New and Confirm Password doesn\'t match');
        return;
        } else {

        }


    }
    
    render() {
        const popover = (
            <Popover id="popover-basic">
              <Popover.Title as="h3">Password Policy</Popover.Title>
              <Popover.Content>
                <ul>
                    <li>Must contain Alpha-Numeric characters</li>
                    <li>Must be 8 -15 characters in length</li>
                    <li>Allowed special characters are !@#$%^&*()</li>
                </ul>
              </Popover.Content>
            </Popover>
          );
          
        const Example = () => (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <i className="fa fa-info-circle"></i>
        </OverlayTrigger>
        );
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <form onSubmit={this.handleSubmit} onChange={(e) => {this.handleChange(e)}}>
                        <h3>Change Password</h3>
                        <div className="form-group">
                            <input type={this.state.type} className="form-control" 
                                placeholder="Current password" autoComplete="on" id="currentPassword" name="currentPassword" />
                        </div>
                        <Example />
                        <div className="input-group mb-3">
                            <input type={!this.state.showNPassword ? 'password' : 'text'} className="form-control" 
                                placeholder="New password" autoComplete="on" id="newPassword" name="newPassword" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i onClick={this.showHideNPassword} className={this.state.showNPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i></span>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input type={!this.state.showNCPassword ? 'password' : 'text'} className="form-control" 
                                placeholder="Confirm New password" autoComplete="on" id="confirmPassword" name="confirmPassword" />
                            <div className="input-group-append">
                                <span className="input-group-text"><i onClick={this.showHideNCPassword} className={this.state.showNCPassword ? "fa fa-eye" : "fa fa-eye-slash"}></i></span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Set new password</button>
                    </form>
                    
                </div>
            </div>
        )
    }
}