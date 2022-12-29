import React, { forwardRef, useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Inputs = React.forwardRef((props, ref) => {

  const { id, variant, size, styled, type, className, placeholder, defaultValue, value, onChange, readOnly, disabled, error, ...rest } = props;
  
  const handleChange = useCallback(
    (e) => {
      if(onChange){
        onChange(e.target.value, e);
      }
    }, [onChange]
  )

  return (
    <input
      type={type}
      ref={ref}
      id={id}    
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
  )
})

Inputs.propTypes = {

}

Inputs.defaultProps = {

}

export default Inputs;