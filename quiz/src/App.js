import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import NameForm from "./components/add-questions.component";

// import Login from "./components/login.component";
// import SignUp from "./components/signup.component";
// import ResetPassword from "./components/reset-password.component";
// import Forms from "./components/add-questions.component";
import AddNewQuestion from "./components/add-new.component";

function App() {
  return (<Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Quiz</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/reset-password" component={ResetPassword} />
          </Switch>
        </div>
      </div> */}
      <Switch>
            <Route exact path='/' component={AddNewQuestion} />
            </Switch>
    </div>
    </Router>
  );
}

export default App;