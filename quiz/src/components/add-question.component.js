import React, { useState } from "react";
function QuestionAnswers(props)  {
  const [inputList, setInputList] = useState([{ optionItem: "" , key: ''}]);
  
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    list[index].key = index + 1;
    validateOptions(list);
    setInputList(list);
    console.log("Input List", inputList);
  };

  const validateOptions = (list) => {
    // let validOptions = false;
    console.log(list);
    if (list) {
      console.log(list);
    }
  }
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { optionItem: "", key: ""}]);
    console.log(inputList);
  };

  return (
    <div onChange={() => {props.handleToUpdateParentByChild(inputList)}} >
        {inputList.map((x, idx) => {
          let optionId = `Option-${idx}`
          return (
            <div key={idx}>
              <div className="form-group" >
                {/* <label className="pull-left" htmlFor={optionId}>{`Option #${idx + 1}`}</label> */}
                
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">{idx + 1}</span>
                  </div>
                  <input type="text" name="optionItem" id={optionId} value={x.optionItem}
                  onChange={e => handleInputChange(e, idx)} className="option form-control" 
                  aria-describedby="basic-addon2" autoFocus required={inputList.length <= 2}/>
                  <div className="input-group-append">
                    {inputList.length !== 1 && 
                      <span className="input-group-text" id="basic-addon2" onClick={() => handleRemoveClick(idx)}>
                        <i className="fa fa-trash fa-trash"></i>
                      </span>}
                  </div>
                </div>
              </div>
    
              <div className="form-group">
                {inputList.length - 1 === idx && inputList.length < 5 &&
                <button onClick={handleAddClick} type="button" className="btn btn-outline-primary btn-sm">+ Options
                </button>}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default QuestionAnswers;