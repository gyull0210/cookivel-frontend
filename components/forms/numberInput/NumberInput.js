import React from 'react'
import { jsx } from '@emotion/react'
import propTypes from 'prop-types'
import tw from 'twin.macro'

const NumberInput = React.forwardRef((props, ref) => {

  const {} = props;

  return (
    <input 
      type="number"
      ref={ref}
      className={className}
      css={[]}
    />
  )
})

NumberInput.displayName = "NumberInput"

export default NumberInput;