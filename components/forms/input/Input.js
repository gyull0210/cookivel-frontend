import React, { forwardRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Input = React.forwardRef((props, ref) => {

  const { id, variant, size, styled, type, className, label, placeholder, defaultValue, value, onChange, readOnly, disabled, children, error, ...rest } = props;
  
  const handleChange = useCallback(
    (e) => {
      if(onChange){
        onChange(e.target.value, e);
      }
    }, [onChange]
  )

  return (
    <label
      htmlFor={id}
    >{label}
    <input
      type={type}
      id={id}
      ref={ref}
      className={className}
      css={[
        tw`form-input focus:(border border-sky-400 ring-2 ring-sky-300)`,
        error && tw`border border-red-500 rounded-lg focus:(border border-red-500 ring-2 ring-red-300)`,
        !error && 
        size === "sm" && tw`w-full px-3 py-2 border border-gray-300 rounded-lg`,
        !error && 
        size === "md" && tw`w-full px-3 py-2 border border-gray-300 rounded-lg`,
        !error && 
        size === "lg" && tw`w-full px-3 py-2 border border-gray-300 rounded-lg`,
      ]}
      placeholder={placeholder}
      defaultValue={defaultValue}
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      disabled={disabled}
      {...rest}
    />
    {children}
    {error && <div className="error" css={[tw`text-red-500`]}>{error}</div>}
    </label>
  )
})

Input.displayName = "Input"

export default Input;