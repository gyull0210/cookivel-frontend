import tw from 'twin.macro'
import { css } from '@emotion/react'
import propTypes from 'prop-types'
import React, { useCallback } from 'react';

/**
 * 
 * onChange 관련 버그
 * defaultValue 적용안됨
 */
const TextField = React.forwardRef((props, ref) => {

  const { type, id, name, placeholder, pattern, value, defaultValue, onChange, readOnly, disabled, errorMessage } = props;

  const handleChange = useCallback(
    (e) => {
      if(onChange){
        onChange(e.target.value, e);
      }
    }, [onChange]
  )

  return (
    <div tw="relative">
      <input
        ref={ref}
        type={type}
        name={name} 
        id={id} 
        placeholder={placeholder} 
        className="peer" 
        tw="w-full rounded-md border border-gray-300 px-3 py-3 shadow shadow-gray-100 placeholder:text-transparent 
            focus:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0]) 
            valid:[&:not(:placeholder-shown)]:(border-green-500 border-2) 
            [&:not(:placeholder-shown):not(:focus):invalid~span]:block 
            invalid:[&:not(:placeholder-shown):not(:focus)]:(border-red-400 border-2)"
        css={disabled && tw`bg-gray-200`}
        required 
        pattern={pattern} 
        disabled={disabled}
        autocomplete="off"
        value={value}
        defaultValue={defaultValue}
        readOnly={readOnly}
        onChange={handleChange}
      />
      <label 
        htmlFor={id} 
        tw="pointer-events-none absolute top-0 left-0 ml-3 origin-left -translate-y-1/2 transform bg-white px-1 text-sm text-gray-500 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:ml-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-0 peer-focus:ml-3 peer-focus:text-sm peer-focus:text-gray-800"
        css={disabled && tw`bg-gray-200`}
      >
        {placeholder}
      </label>
      <span 
        tw="mt-2 hidden text-sm text-red-400">
          {errorMessage}
      </span>
    </div>
  )
})

TextField.propTypes = {

}

TextField.defaultProps = {

}

TextField.displayName = "TextField"

export default TextField;