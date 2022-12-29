import React, { useCallback, useRef } from 'react';
import propTypes from 'prop-types';
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Textarea = React.forwardRef((props, ref) => {

  const { size, variant, id, label, className, placeholder, onChange, defaultValue, value, readonly, disabled, error, resize, ...rest } = props;

  const textRef = useRef(null);

  const handleChange = useCallback(
    (e) => {
      if(onChange){      
        
        onChange(e.target.value, e);
      }
      if(resize){
        textRef.current.style.height = "auto";
        textRef.current.style.height = textRef.current.scrollHeight + "px";
      }
    }, [onChange]
  )
  
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea
        type="text"
        id={id}
        ref={textRef}
        className={className}
        css={[
          tw`form-textarea border border-gray-300 rounded-lg focus:(border border-sky-400 ring-2 ring-sky-300) resize-none`,
          size === "sm" && tw`w-full px-3 py-2 `,
          size === "md" && tw`w-full px-3 py-2 `,
          size === "lg" && tw`w-full px-3 py-2 `,
          error && tw`form-textarea border border-red-500 rounded-lg focus:(border border-red-500 ring-2 ring-red-300)`
        ]}
        placeholder={placeholder}
        onChange={handleChange}
        defaultValue={defaultValue}
        value={value}
        readOnly={readonly}
        disabled={disabled}
        rows={resize && 1 }
        {...rest}
      />
      {error && <div className="error" tw="text-error">{error}</div>}
    </div>
  )
})

Textarea.propTypes = {
  
  id: propTypes.string.isRequired,

  label: propTypes.string.isRequired,

  size: propTypes.oneOf(["sm", "md", "lg"]),

  placeholder: propTypes.string,

  readOnly: propTypes.bool,

  disabled: propTypes.bool,
  
  error: propTypes.string,

  variant: propTypes.oneOf(["outline", "flush"])
};

Textarea.defaultProps = {
  size: "md",
  readOnly: false,
  disabled: false
}

Textarea.displayName = "Textarea"

export default Textarea;