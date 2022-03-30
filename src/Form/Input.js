import React from 'react';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  onBlur,
  error,
  placeholder,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        label={label}
        id={id}
        name={id}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
