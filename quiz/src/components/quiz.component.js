import React from 'react';
import Question from './question.comonent';
import QuestionCount from './question-count.component';
import AnswerOptions from './answer-options.component';
// import Timer from "./timer.component";

function Quiz(props) {
    console.log('quiz props',props)
    function renderAnswerOptions(key,index) {
        return (
          <AnswerOptions
            index ={index}
            key={key.id}
            answerContent={key.value}
            answer={props.answer}
            questionId={props.questionId}
            selectedAnswer={props.selectedAnswer}
            onAnswerSelected={props.onAnswerSelected}
            onCheck={props.onCheck}
            minAnswers={props.minAnswers}
            checkedItems={props.checkedItems}
          />
        );
    }
    
    return (
        <div key={props.questionId} className="col-xs-12 quiz-story">
            
            
            <QuestionCount viewreults={props.viewreults}
            counter={props.questionId}
            total={props.questionTotal}
            />
            
            <Question  content={props.question} />
            <div className="clearfix" >
                <ul className="answerOptions">
                    {props.answerOptions.map(renderAnswerOptions)}
                </ul>
            </div>
            <div className="clearfix" >
                {props.counter > 0 ? (
                    <div className="button_cont float-left" onClick={props.setPreviousQuestion} >
                        <button className="btn btn-wrap btn-previous" >
                            <span>Previous</span>
                        </button>
                    </div>) : ''}
        
                {props.counter < props.quizLength-1 ? (
                    <div className="button_cont float-right" onClick={props.setNextQuestion} >
                        <button className="btn btn-wrap btn-next" >
                            <span>Next</span>
                        </button>
                    </div>) : (<span></span>)}

                {props.counter === props.quizLength-1 ? (
                    <div className="button_cont float-right" onClick={props.viewreults}>
                        <button className="btn btn-wrap btn-next" >
                            <span>Submit</span>
                        </button>
                    </div>) : (<span></span>)}
            </div>
        </div>
    );
}

  
export default Quiz;
