import React from "react"
const FormInputs = (props) => {
  return (
    props.answerOptions.map((val, idx)=> {
      
      let optionId = `Option-${idx}`
      return (
        
        <div key={idx}>
          <label htmlFor={optionId}>{`Option #${idx + 1}`}</label>
          <input
            type="text"
            name={optionId}
            data-id={idx}
            id={optionId} 
            className="option"
          />
          <button><i className="fa fa-trash fa-trash"></i></button>
        </div>
      )
    })
  )
}
export default FormInputs
