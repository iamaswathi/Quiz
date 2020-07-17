import React from 'react';

function AnswerOptions(props) {

  console.log('Ans props', props)
    return (
      
      <li className="clearfix col-xs-12 ">
        {props.answerContent ? (
          (props.minAnswers > 1) ? (
            <div className="options" onClick={props.onAnswerSelected} >
              <label>
                <input type="checkbox" value={props.answerContent} id={props.answerContent}
                  onChange={(e)=>{props.onAnswerSelected(e)}}/><span>{props.answerContent}</span>
              </label>
            </div>
          ) : (
            <div className="options" onClick={props.onAnswerSelected}>
              <label>
                <input type="radio" name="options" value={props.answerContent} id={props.answerContent} 
                /><span>{props.answerContent}</span>
              </label>
            </div>

          // <button 
          //   type="button"
          //   id={props.index}
          //   key = {props.index}
          //   value={props.index}
          //   className={(props.selectedAnswer === props.index) ? 'answerOption selected-btn' : 'answerOption' }
          //   onClick={props.onAnswerSelected}>
          //   <i className={(props.selectedAnswer === props.index) ? 'fa fa-check-circle' : 'fa' }></i>
          //   {props.answerContent}
          // </button>
          ) 
        ) : (<span></span>)}
      </li> 
    );
}

export default AnswerOptions;