import React, { useCallback } from 'react'
import { jsx } from '@emotion/react'
import PropTypes from 'prop-types'
import tw from 'twin.macro'

const TextInput = React.forwardRef((props, ref) => {

  const {size, id, label, className, placeholder, onChange, readonly, disabled, error, ...rest} = props;
  
  const handleChange = useCallback(
    (e) => {
      if(onChange){
        onChange(e.target.value, e);
      }
    }, [onChange]
  )
  
  return (
    <div>
      <label htmlFor={id}>
        {label}
      <input
        type="text"
        id={id}
        ref={ref}
        className={className}
        css={[
          tw`form-input focus:(border border-sky-400 ring-1 ring-sky-400)`,
          size === "sm" && tw`w-full px-3 py-2 border border-gray-300 rounded-lg`,
          size === "md" && tw`w-full px-3 py-2 border border-gray-300 rounded-lg`,
          size === "lg" && tw`w-full px-3 py-2 border border-gray-300 rounded-lg`,     
        ]}
        placeholder={placeholder}
        onChange={handleChange}
        readOnly={readonly}
        disabled={disabled}      
        {...rest}
        
      />
      {error && <div className="error">{error}</div>}
      </label>
    </div>
  )
})

TextInput.propTypes = {
  
  id: PropTypes.string.isRequired,

  label: PropTypes.string.isRequired,

  size: PropTypes.oneOf(["sm", "md", "lg"]),

  placeholder: PropTypes.string,

  onChange: PropTypes.func,

  readOnly: PropTypes.bool,

  disabled: PropTypes.bool,
  
  error: PropTypes.string,
};

TextInput.defaultProps = {
  
  size: "md",
  readOnly:false,
  disabled:false
}

TextInput.displayName = "TextInput"

export default TextInput;