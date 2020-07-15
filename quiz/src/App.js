import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { IndexRedirect } from "react-router";
// import { BrowserRouter as Link } from "react-router-dom";
// import NameForm from "./components/add-questions.component";

import SignIn from "./components/signin.component";
import SignUp from "./components/signup.component";
import ResetPassword from "./components/reset-password.component";
import ChangePassword from "./components/change-password.component";
// import Forms from "./components/add-questions.component";
import AddNewQuestion from "./components/add-update-questions.component";
// import Quizz from "./components/quiz.component";
import Quiz1 from "./components/quiz1";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-light justify-content-center fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Letz Quiz</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/change-password"}>Change Password</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/reset-password"}>Reset Password</Link>
            </li>
          </ul>
        </div>
      </nav>

          <Switch>
            <Route exact path="/" component={Quiz1} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/change-password" component={ChangePassword} />
            <Route exact path="/admin" component={AddNewQuestion} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;