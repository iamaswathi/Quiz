import React, { Component } from "react";
import FormItems from "./add-questions.component";

export default class AddNewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      question: '', 
      answerOptions: [], 
      correctAnswer: '',
      weightage: 0,
      category: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Form Value Changed -> ', this.state);
  }

  handleToUpdateParentByChild = (someArg) => {
    console.log('We pass argument from Child to Parent: ' , someArg);
    this.setState({
      answerOptions: someArg
    });
  }
    
    render() {
        return (
            <div className="bucket">
              <form onSubmit={this.handleSubmit} onChange={(e) => {this.handleChange(e)}}>
                <div className="form-group">
                  <label htmlFor="question" className="pull-left">Question</label>
                  <textarea className="form-control" name="question" />
                </div>
                <FormItems handleToUpdateParentByChild = {this.handleToUpdateParentByChild}/>

                <div className="form-group">
                  <label htmlFor="correctAnswer" className="pull-left">Correct Answer</label>
                  <input type="text" className="form-control" name="correctAnswer" />
                </div>
                <div className="form-group">
                  <label htmlFor="weightage" className="pull-left">Weightage</label>
                  <input type="number" className="form-control" name="weightage" />
                </div>
                <div className="form-group">
                  <label htmlFor="category" className="pull-left">Question Category</label>
                  <input type="number" className="form-control" name="category" />
                </div>

                <button type="submit" className="btn btn-outline-primary btn-sm" >Submit</button> 

                </form>
            </div>
        )
    }
}
