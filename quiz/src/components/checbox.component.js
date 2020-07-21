import React from 'react';
// import PropTypes from 'prop-types';

// const Checkbox = ({ type = 'checkbox', name, checked = false, onChange }) => (
//   <input type={type} name={name} checked={checked} onChange={onChange} />
// );

// Checkbox.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   checked: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
// }
class Checkbox extends React.Component {
  static defaultProps = {
      checked: false
  }
  render() {
      return (
          <input
              type={this.props.type}
              name={this.props.name}
              defaultChecked={this.props.checked}
              onChange={this.props.onChange}
          />
      );
  }
}
export default Checkbox;



