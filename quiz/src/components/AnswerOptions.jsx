import React from 'react';
// import { Checkbox } from './checbox.component'
// import { RadioButton } from './radio.component'

function AnswerOptions(props) {
  // let alreadySelected = false
  // if(props.selectedAnswer === props.index) {
  //   alreadySelected = true
  // } else {
  //   alreadySelected = false
  // }

  console.log('Ans props', props)
    return (
      
      <li className="clearfix col-xs-12">
        {props.answerContent ? (
          (props.minAnswers > 1) ? (
            // <label key={props.key}>
            //   <Checkbox name={props.answerContent} 
            //   checked={props.checkedItems.get(props.answerContent)} onChange={props.onCheck} />
            //   {props.answerContent}
            // </label>
            <div className="options">
              <label>
                  <input type="checkbox" value={props.answerContent} id={props.answerContent}
                  
                  onChange={()=>{}}/><span>{props.answerContent}</span>
              </label>
            </div>
          ) : (
            // <label key={props.key}>
            //   <RadioButton name={props.answerContent} 
            //   checked={props.checkedItems.get(props.answerContent)} onChange={props.onCheck} />
            //   {props.answerContent}
            // </label>
            <div className="options">
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