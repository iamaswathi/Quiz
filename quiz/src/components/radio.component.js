// import React from 'react';
// import PropTypes from 'prop-types';

// export const RadioButton = ({ type = 'radio', name, checked = false, onChange }) => (
//   <input type={type} name={name} checked={checked} onChange={onChange} />
// );

// RadioButton.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   checked: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
// }
import React from "react";
export default class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
   this.handleChange = this.handleChange.bind(this);
   }
   handleChange(event){
     var value = event.target.value;
		 if(this.props.checked ==='on'){
      value = false;
     }
     console.log(value);
     this.props.handleChange(value,this.props.index)
   }

	render() {
  return (
  <div>
  	<input
            name="test"
            type="radio"
            checked={this.props.checked}
            onChange={this.handleChange} />
            </div>
  )
 }
}