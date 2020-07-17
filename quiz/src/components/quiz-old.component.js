import React, { Component } from "react";
import { API_URL } from  "../shared/constants";

export default class Quizz extends Component {
    constructor() {
      super();
  
      this.state = {
        questions: [],
        currentQuestion: 0
      }
  
      this.nextQuestion = this.nextQuestion.bind(this);
      this.previousQuestion = this.previousQuestion.bind(this);
    //   this.callAPI();
    }
    // callAPI() {
    //     fetch(API_URL + '/listQuestions', {
    //         method: 'get',
    //         mode: 'cors',
    //         headers: {
    //             'Accept': 'application/json, text/plain, */*',
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result);
    //         this.setState({questions: response.questions});
    //     })
    //     .catch(error => console.log('error', error));
    // }
    componentDidMount() {
    //   fetchQuestions().then(questions => this.setState({ questions }))
    fetch(API_URL + '/listQuestions', {
        method: 'get',
        mode: 'cors',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })
    .then(response => response.json())
    .then(result => {
        console.log(result);
        this.setState({questions: result.questions});
    })
    .catch(error => console.log('error', error));
    }
  
    nextQuestion() {
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion + 1
      }))
    }
  
    previousQuestion() {
      this.setState(prevState => ({
        currentQuestion: prevState.currentQuestion - 1
      }))
    }
    
  
    render() {
      if (!this.state.questions.length) return <div>Loading…</div>        
  const optionsList = this.state.questions[this.state.currentQuestion].options;
      return (
        <div className="auth-wrapper">
            <div className="bucket">
                <p>{this.state.questions[this.state.currentQuestion].question}</p>
                <ul>
                  {optionsList.map(i => {
                    return <li className="col-xs-12 col-sm-6 col-md-6">
                      {  <p>{this.state.questions[this.state.currentQuestion].options}</p>
                        ? (<button type="button" className={ 'answerOption' }
                        >{i}</button> ) : (<span></span>)}
                      </li>;
                    })}
                </ul>
                {/* <li className="col-xs-12 col-sm-6 col-md-6">
                    {                <p>{this.state.questions[this.state.currentQuestion].options}</p>
 ? (<button 
                    type="button"
                    id={props.answerType}
                    value={props.index}
                    className={(props.selectedAnswer === props.index) ? 'answerOption selected-btn' : 'answerOption' }
                    onClick={props.onAnswerSelected}>
                    <i className={(props.selectedAnswer === props.index) ? 'fa fa-check-circle' : 'fa' }></i>
                    {props.answerContent}
                    </button>) : (<span></span>)}
                </li>  */}
                <button onClick={this.previousQuestion}>Previous</button>
                <button onClick={this.nextQuestion}>Next</button>
            </div>
        </div>
      )
    }
  }