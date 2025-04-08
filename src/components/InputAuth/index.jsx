import PropTypes from 'prop-types';


const InputAuth = ({ type, placeholder, value, onChange }) => {
 return (
  <input
   type={type}
   placeholder={placeholder}
   value={value}
   onChange={onChange}
  />
 );
}

InputAuth.propTypes = {
 type: PropTypes.string.isRequired,
 placeholder: PropTypes.string.isRequired,
 value: PropTypes.string.isRequired,
 onChange: PropTypes.func.isRequired,
};

export default InputAuth;