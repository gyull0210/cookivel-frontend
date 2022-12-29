import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Tbody = React.forwardRef((props, ref) => {

  const {} = props;

  return (
    <tbody>
      {children}
    </tbody>
  )
})

Tbody.displayName = "Tbody"

export default Tbody;