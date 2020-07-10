import React, { Component } from "react";

export default class ResetPassword extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <h6>A reset password link will be sent to your registered email id</h6>
                    <form>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                            </div>
                            <input type="email" className="form-control" name="email" 
                                placeholder="Enter your email" autoFocus required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Reset my password</button>
                    </form>
                </div>
            </div>
        )
    }
}