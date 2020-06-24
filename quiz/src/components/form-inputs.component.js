// import React from "react"

// const FormInputs = (props) => {
//   // export default class FormInputs extends Component {
//   //   constructor(props) {
//   //     super(props);
//   //   }
    
//   return (
//     props.answerOptions.map((val, idx)=> {
      
//       let optionId = `Option-${idx}`
//       return (
        
//         <div key={idx}>
//           <div className="form-group">
//             <label className="pull-left" htmlFor={optionId}>{`Option #${idx + 1}`}</label>
            
//             <div className="input-group mb-3">
//               <input
//                 type="text"
//                 name={optionId}
//                 data-id={idx}
//                 id={optionId} 
//                 className="option form-control" aria-describedby="basic-addon2" />
//               <div className="input-group-append">
//                 <span className="input-group-text" id="basic-addon2" onClick={this.removeRow(optionId)}><i className="fa fa-trash fa-trash"></i></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     })
//   )
// }
// export default FormInputs
