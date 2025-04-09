import { default as PropTypes } from 'prop-types';
import React from "react";
import "./index.css";

const AuthInput = ({ field, name, type, value, onChange, hint, handleKeyDown, length }) => {
 return (
  <div className="form-group">
   <label className='label-auth-field'>{field}</label>
   <input
    name={name}
    type={type}
    placeholder={hint}
    className="auth-input"
    value={value}
    onChange={onChange}
    onKeyDown={handleKeyDown}
    maxLength={length}
    required
   />
  </div>
 );
};


AuthInput.propTypes = {
 field: PropTypes.string,
 name: PropTypes.string,
 type: PropTypes.string,
 hint: PropTypes.string,
 value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
 onChange: PropTypes.func,
 handleKeyDown: PropTypes.func,
 length: PropTypes.number
};

export default AuthInput;