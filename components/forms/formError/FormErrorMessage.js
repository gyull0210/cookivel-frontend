import React from 'react'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const FormErrorMessage = React.forwardRef((props, ref) => {

  const { className, id, ...rest } = props;

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      css={[
        tw``
      ]}
    />
  )
})

FormErrorMessage.displayName = "FormErrorMessage"

export default FormErrorMessage;