import React from 'react'
import { jsx } from '@emotion/react'
import propTypes from 'prop-types'
import tw from 'twin.macro'

const Toast = React.forwardRef((props, ref) => {
  
  const {closable, ...rest} = props;

  return (
    <div
      tw=""
      css={[
        variant==="" && tw``,
      ]}
      {...rest}
    >
      <div>

      </div>
      {children}
    </div>
  )
})


export default Toast;