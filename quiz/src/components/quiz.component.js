import React from 'react';
import Question from './question.component';
import QuestionCount from './question-count.component';
import AnswerOptions from './answer-options.component';
// import AnswerOptions from './answer-options-new.component';
// import Timer from "./timer.component";

function Quiz(props) {
    console.log('quiz props',props)
    function renderAnswerOptions(key,index) {
        return (
            <AnswerOptions
                index ={index}
                key={key.id}
                counter={props.counter}
                questionId={props.questionId}
                answerContent={key.value}
                selectedAnswer={props.selectedAnswer}
                onAnswerSelected={props.onAnswerSelected}
                onCheck={key.checked}
                minAnswers={props.minAnswers}
                checkedItems={props.checkedItems}
                handleChange={props.handleChange}
                answerOptions ={props.answerOptions}
            />
        );
    }
    
    return (
        <div key={props.questionId} className="col-xs-12 quiz-story">
            
            <QuestionCount
                counter={props.questionId}
                total={props.quizLength}
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
