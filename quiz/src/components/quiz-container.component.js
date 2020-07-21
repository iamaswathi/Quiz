import React, { Component } from 'react';
import Quiz from './quiz.component';
// import { API_URL } from  "./../shared/constants";
import {result} from "../shared/api";
import Timer from "./timer.component";

class QuizContainer extends Component {
    constructor(props) {
    super(props);

    this.state = {
        counter: 0,
        questionsList: [],
        questionId: 1,
        question: '',
        answerOptions: [],
        minAnswers: 1,
        weightage: 1,
        category: '',
        checked: false,
        checkedItems: new Map(),
        hobbies:[],
        selectedAnswers: [[],[], [],[], [],[], [],[], [],[]]
    };
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
        checkedItems: prevState.checkedItems.set(item, isChecked)
    }));
};

handleAnswerSelected(e, options, index, inputType){
  const isChecked = e.target.checked;
  options.forEach((opt, ind)=>{
    if(inputType === "checkbox"){
      if(isChecked && !opt.checked && (ind===index)) {
        opt.checked = true;
      } else if(!isChecked && opt.checked && (ind===index)){
        opt.checked = false;
      }
    } 
    if(inputType === "radio"){
      if(isChecked && !opt.checked && (ind===index)) {
        opt.checked = true;
      } else {
        opt.checked = false;
      }
    } 
  });
  console.log(" - options", options);
}

  // handleAnswerSelected(e, optionIndex, property){
  //   console.log("property ",property + ", optionIndex " , optionIndex);
  //   const isChecked = e.target.checked;
  //   let selectedAnswers = [...this.state.selectedAnswers];
  //   if(isChecked) {
  //     selectedAnswers[property].push(optionIndex);
  //     this.setState({ selectedAnswers });
  //   } else {
  //     var arr = selectedAnswers[property];
  //     for( var i = 0; i < arr.length; i++){
  //        if ( arr[i] === optionIndex) { 
  //          arr.splice(i, 1); 
  //         }
  //       }
  //       console.log("update - > ", arr);
  //   }
  //   console.log("selectedAnswers -> ",this.state.selectedAnswers);
  // }

  componentDidMount() {
    this.setState({
      questionsList: result.questions,
      question: result.questions[0].question,
      minAnswers: result.questions[0].answer.minAnswers,
      answerOptions : result.questions[0].answer.options,
      weightage: result.questions[0].weightage,
      category: result.questions[0].category,
      // selectedAnswers : new Array(result.questions.length?result.questions.length: 10)
    });
    console.log(this.state);

    // fetch(API_URL + '/listQuestions', {
    //     method: 'get',
    //     mode: 'cors',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json',
    //         'Access-Control-Allow-Origin': '*'
    //     }
    // })
    // .then(response => response.json())
    // .then(result => {
    //     console.log('api', result);
    //     this.setState({
    //         questionsList: result.questions,
    //         question: result.questions[0].question,
    //         // answerOptions:result.questions[0].answer,
    //         minAnswers: result.questions[0].answer.minAnswers,
    //         answerOptions : result.questions[0].answer.options,
    //         // correctAnswer: result.questions[0].answer.correctAnswer,
    //         weightage: result.questions[0].weightage,
    //         category: result.questions[0].category
    //       });
    //       console.log('state',this.state);
    // })
    // .catch(error => console.log('error', error));
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.questionsList[counter].question,
      answerOptions: this.state.questionsList[counter].answer.options,
      minAnswers: this.state.questionsList[counter].answer.minAnswers
    });
  }

  setPreviousQuestion() {
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId - 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.questionsList[counter].question,
      answerOptions: this.state.questionsList[counter].answer.options,
      minAnswers: this.state.questionsList[counter].answer.minAnswers,
    });
  }

  checkboxHandler(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }

  renderQuiz() {
    return (
      <div>
        <Quiz viewreults={this.viewreults}
          counter={this.state.counter}
          quizLength = {this.state.questionsList.length}
          questionId={this.state.questionId}
          question={this.state.question}
          answerOptions={this.state.answerOptions}
          minAnswers = {this.state.minAnswers}
          setNextQuestion={this.setNextQuestion}
          setPreviousQuestion={this.setPreviousQuestion}
          selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
          onAnswerSelected = {this.handleAnswerSelected}
          onCheck = {this.checkboxHandler}
          checkedItems = {this.state.checkedItems}
          handleChange = {this.handleChange}
        />
        <Timer />
      </div>
    );
  }
  render() {
    return (
      <div className="auth-wrapper">
        <div className="bucket col-xs-12 col-sm-6">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      </div>
    );
  }

}

export default QuizContainer;