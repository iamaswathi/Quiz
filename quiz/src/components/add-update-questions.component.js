import React, { Component } from "react";
import QuestionAnswers from "./add-question.component";
import { Multiselect } from 'multiselect-react-dropdown';
import {QUIZCATEGORY} from "../shared/constants";

export default class AddNewQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields : {},
      errors: {},
      question: '', 
      answerOptions: [], 
      correctAnswer: [],
      correctAnswers: [],
      weightage: 0,
      category: '',
      questionsList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onSelectAnswers = this.onSelectAnswers.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.callAPI = this.callAPI.bind(this);
  }

  callAPI() {
    fetch("https://8f462d07-eef9-44bf-8290-2b2d9a3dd6f5.mock.pstmn.io/listQuestions")
      .then(res => res.json())
      .then(qList => {
        this.setState({ questionsList: qList.questions });
        console.log(this.state);
    });
  }


  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    if (this.handleValidation()) {
      console.log("Valid Form");
    } else {
      console.log("Invalid Form", this.state.errors);
    }
  }

  handleToUpdateParentByChild = (someArg) => {
    console.log('We pass argument from Child to Parent: ' , someArg);
    this.setState({
      answerOptions: someArg
    });
    console.log("Options ->", this.state.answerOptions);
  }

  handleDropDownChange = (event) => {
    this.setState({
      correctAnswers: event.target.value
    });
  }

  onSelectAnswers(selectedList) {
    console.log("values ->", selectedList);
    const values = selectedList.map(opt => opt.optionItem);
    console.log("values ->", values);
    this.setState({
      correctAnswers: values
    });
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if(!fields["question"]){
      formIsValid = false;
      errors["question"] = "Cannot be empty";
    }

    if(!fields["correctAnswer"]){
          formIsValid = false; 
          errors["question"] = "Cannot be empty";  
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  // componentDidMount(){
  //   this.state.question.focus(); 
  // }

    
    render() {
        return (

          <div className="auth-wrapper">
          {/* <div className="auth-inner"> */}
            <div className="bucket">
              <button onClick={this.callAPI}>CLick</button>
              {this.state.questionsList.length > 0 && (
                <ul>
                  {this.state.questionsList.map((book) => (
                      <li key={book.questionId}>{book.questionId} - {book.question}</li>
                  ))}
                </ul>
              )}
              <form onSubmit={this.handleSubmit} onChange={(e) => {this.handleChange(e)}}>
                <div className="form-group required">
                  <label htmlFor="question" className="pull-left">Question</label>
                  <textarea className="form-control" name="question" autoFocus required/>
                </div>
                {/* {this.state.question.length > 1 ?<div> */}
                <div className="form-group">
                  <label htmlFor="question" className="pull-left">Options</label>
                </div>
                <QuestionAnswers handleToUpdateParentByChild = {this.handleToUpdateParentByChild}/> 
                {/* </div> : null} */}
                <div className="form-group required multiSelectLabel">
                  <label className="pull-left">Correct Answer(s)</label>
                </div>
                <div className="form-group required multiSelectContainer">
                  <Multiselect name="correctAnswer" options={this.state.answerOptions} 
                    displayValue="optionItem" required
                    showCheckbox={true} 
                    onSelect={this.onSelectAnswers} onChange={this.handleChange}/>
                </div>
                <div className="form-group required">
                  <label htmlFor="weightage" className="pull-left">Weightage</label>
                  <input type="number" className="form-control" name="weightage" min="1" max="5" required/>
                </div>
                <div className="form-group">
                  <label htmlFor="category" className="pull-left">Category</label>
                  <select className="form-control" name="category"
                    onChange={this.handleChange} required>
                    {QUIZCATEGORY.map((e, key) => {
                        return <option key={key} value={e.key}>{e.value}</option>;
                    })}
                  </select>
                </div>

                <button type="submit" className="btn btn-outline-primary btn-sm" >Submit</button> 

                </form>
            </div>
            </div>
        )
    }
}
