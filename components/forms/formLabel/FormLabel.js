import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import FormControl from '../formControl/FormControl'

const FormLabel = React.forwardRef((props, ref) => {

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

FormLabel.propTypes = {

}

FormLabel.defaultProps = {

}

export default FormLabel;