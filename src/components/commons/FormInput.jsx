/* eslint-disable react/prop-types */
import React from 'react';

function FormInput({ label, name, type, value = {}, setValue, placeholder }) {
  const handleChange = (event) => {
    setValue({
      ...value,
      [name]: event.target.value,
    });
  };
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <input
        type={type}
        name={name}
        id={name}
        value={value[name]}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </label>
  );
}

export default FormInput;
