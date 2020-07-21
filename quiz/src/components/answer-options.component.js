import React from 'react';
// import Checkbox from './checbox.component';
// function markCheckedOption (inputOptionsList, selectedIndices) {
//   for(let i = 0; i < inputOptionsList.length; i++) {
//     for (let j = 0; j < selectedIndices.length; j++) {
//       if(i === selectedIndices[j]) {
//             return true;
//           } else {return false;}

//     }
//   }
// }
function AnswerOptions(props) {

  console.log('Ans props', props);
   
    return (
      <li className="clearfix col-xs-12 ">
        {props.answerContent ? (
          (props.minAnswers > 1) ? (
            <div className="options">
              <label>
                <input type="checkbox" value={props.answerContent} id={props.answerContent} 
                defaultChecked={props.onCheck}
                onChange={(e) => {props.onAnswerSelected(e, props.answerOptions,props.index, "checkbox")}} />
                
                {/* onChange={(e) => {props.onAnswerSelected(e, props.index, props.counter)}} /> */}
                  <span>{props.answerContent}</span>
              </label>
            </div>
          
          ) : (
            <div className="options">
              <label>
                <input type="radio" name="options" value={props.answerContent} id={props.answerContent} 
                  defaultChecked={props.onCheck}
                  onChange={(e) => {props.onAnswerSelected(e, props.answerOptions,props.index, "radio")}} />
                  <span>{props.answerContent}</span>
              </label>
            </div>
          ) 
        ) : (<span></span>)}
      </li> 
    );
          



 
      // return (
      //     <label key={props.index}>
      //         {props.answerContent}
      //         <Checkbox
      //             name={props.answerContent}
      //             defaultChecked={props.checkedItems.get(props.answerContent) || false}
      //             onChange={props.handleChange}
      //             type="checkbox"
      //         />
      //     </label>
      // );
      

}

export default AnswerOptions;