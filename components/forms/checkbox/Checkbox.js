import React, { useCallback, useRef, useState } from 'react';
import propTypes from 'prop-types';
import { jsx } from '@emotion/react'
import tw from 'twin.macro';

/**
 * Primary UI component for user interaction
 */
const Checkbox = React.forwardRef((props, ref) => {

  const {id, label, className, size, name, value, disabled, onChange, children, ...rest} = props;

  const checkboxRef = useRef(null);

  // const handleCheck = useCallback(
  //   (e) => {
  //     if(onChange){
  //       onChange(e.target.value, e);
  //     }
  //   }, [onChange]
  // )

  return (
    <label 
      htmlFor={id}
      css={[
        tw`inline-flex items-center`      
      ]}
    >
    <input
      type="checkbox"
      id={id}
      className={className}
      css={[
        tw`border border-gray-300 rounded text-sky-400 form-checkbox focus:ring-transparent`,
        size === "sm" && tw`w-4 h-4`,
        size === "md" && tw`w-6 h-6`,
        size === "lg" && tw`w-8 h-8`,
      ]}
      ref={ref}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...rest}  
    />
      <span css={[tw`ml-2`]}>{label}</span>
    </label>
  );
});

Checkbox.propTypes = {

  size: propTypes.oneOf(['sm', 'md', 'lg']),

  label: propTypes.string,

  onChange: propTypes.func,

  disabled: propTypes.bool
};

Checkbox.defaultProps = {
  id: 'checkbox-input',
  size: 'md',
  disabled: false,
};

export default Checkbox;