import React, { createContext, useContext } from 'react';
import propTypes from 'prop-types';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

const RadioContext = createContext({});

const Radio = React.forwardRef((props, ref) => {

  const {id, className, name, size, label, value, defaultChecked, disabled, ...rest} = props;
  const group = useContext(RadioContext);

  return (
    <div>
      <input
        type="radio"
        id={id}
        className={className}
        css={[
          tw`border border-gray-300 form-radio text-sky-400 focus:ring-transparent`,
          size === "sm" && tw`w-4 h-4`,
          size === "md" && tw`w-6 h-6`,
          size === "lg" && tw`w-8 h-8`
        ]}
        name={name}
        defaultChecked={defaultChecked}
        checked={group.value !== undefined ? value === group.value : undefined }
        disabled={disabled || group.disabled}
        value={value}
        {...rest}
      />
      <label
        htmlFor={id}
        className=""
      >
        {label}
      </label>
    </div>
  )
})

Radio.propTypes = {
 size: propTypes.oneOf(["sm", "md","lg"])
}

Radio.defaultProps = {
 size: "md"
}

export default Radio;