import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Toggle = React.forwardRef((props, ref) => {

  const { variant, size, label } = props;

  return (
    <div
    >
      {label}
    </div>
  )
})
