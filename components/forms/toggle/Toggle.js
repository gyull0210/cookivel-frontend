import React, { useState } from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Toggle = React.forwardRef((props, ref) => {

  const { variant, size, label } = props;

  const [enabled, setEnabled] = useState(true);

  return (
    <div tw="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
      onClick={()=>{setEnabled(!enabled)}}
    >
      <div tw="bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform"
        css={[
          enabled === "true" && tw`transform translate-x-6`
        ]}
      ></div>
    </div>
  )
})

Toggle.displayName = "Toggle"

export default Toggle
