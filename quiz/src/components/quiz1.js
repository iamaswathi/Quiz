import React, { Component } from 'react';
// import quizQuestions from './api/QuizQuestions';
import Quiz from './Quiz';
// import Result from './components/Result';
// import './App.css';
// import { API_URL } from  "./../shared/constants";
import {result} from "./../shared/api";

class Quiz1 extends Component {
    constructor(props) {
    super(props);

    this.state = {
        counter: 0,
        questionId: 1,
        question: '',
        answerOptions: [],
        answer: '',
        selectedAnswers : [{}],
        // result: '',
        questionsList: [],
        minAnswers: 1,
        // correctAnswer: [],
        weightage: 1,
        category: '',
        checked: false,checkedItems: new Map(),
    };
    console.log(result);
    this.setNextQuestion = this.setNextQuestion.bind(this);
    this.setPreviousQuestion = this.setPreviousQuestion.bind(this);
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.checkboxHandler = this.checkboxHandler.bind(this);
    // this.viewreults = this.viewreults.bind(this);


  }
  handleAnswerSelected(e){
    var _self = this;
    var obj = _self.state.selectedAnswers;
    var index = parseInt(e.target.value);
    console.log("for selected question number " + (_self.state.counter + 1) +  " answer is " + index + " selected");
    var Qindex = (_self.state.counter );
    // create map and store all selecred answers with quiz Questions
    obj[Qindex] = index;
    _self.setState({selectedAnswers : obj})

  }

  componentDidMount() {
    this.setState({
        questionsList: result.questions,
        question: result.questions[0].question,
        minAnswers: result.questions[0].answer.minAnswers,
        answerOptions : result.questions[0].answer.options,
        weightage: result.questions[0].weightage,
        category: result.questions[0].category
    });
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



  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.state.questionsList[counter].question,
      answerOptions: this.state.questionsList[counter].answer.options,
      minAnswers: this.state.questionsList[counter].answer.minAnswers,
      answer: ''
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
      answer: ''
    });
  }
  checkboxHandler(e) {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  }
  renderQuiz() {
    return (
      <Quiz viewreults={this.viewreults}
        setNextQuestion={this.setNextQuestion}
        counter={this.state.counter}
        setPreviousQuestion={this.setPreviousQuestion}
        answer={this.state.answer}
        selectedAnswer = {this.state.selectedAnswers[this.state.counter]}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.state.questionsList.length}
        onAnswerSelected = {this.handleAnswerSelected}
        quizLength = {this.state.questionsList.length}
        minAnswers = {this.state.minAnswers}
        onCheck = {this.checkboxHandler}
        checkedItems = {this.state.checkedItems}
      />
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
export default Quiz1;