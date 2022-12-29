import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import FormControl from '../formControl/FormControl'

const Label = React.forwardRef((props, ref) => {

  const {id, className, htmlFor, children, label, ...rest} = props;
  
  return (
    <label
      ref={ref}
      htmlFor={id}
      className={className}
      {...rest}
    >
      {children}
    </label>
  )
})

Label.propTypes = {

}

Label.defaultProps = {

}

Label.displayName = "Label"

export default Label;