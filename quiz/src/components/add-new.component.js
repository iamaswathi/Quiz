import React, { Component } from "react";
import FormItems from "./add-questions.component";

export default class AddNewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { question: '', answerOptions: ['input-0'], correctAnswer: '',
    weightage: 0, counter: 0 };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    console.log(e.target);
    // console.log(e.target.FormItems);
    console.log(JSON.stringify(this.state));
    console.log('Form Value Changed -> ', this.state);
  }
  handleToUpdate = (someArg) => {
    alert('We pass argument from Child to Parent: ' + someArg);
}
    
    render() {
        return (
            <div className="bucket">
              <form onSubmit={this.handleSubmit} onChange={(e) => {this.handleChange(e)}}>
                <div className="form-group">
                  <label htmlFor="question" className="pull-left">Question</label>
                  <textarea className="form-control" name="question" />
                </div>
                {/* {this.state.answerOptions.map(input => <FormItems key={input} />)} */}
                <FormItems handleToUpdate = {this.handleToUpdate}/>

                <div className="form-group">
                  <label htmlFor="correctAnswer" className="pull-left">Correct Answer</label>
                  <input type="text" className="form-control" name="correctAnswer" />
                </div>

                <button type="submit" className="btn btn-outline-primary btn-sm" >Submit</button> 

                </form>
            </div>
        )
    }
}
