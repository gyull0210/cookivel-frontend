import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const CheckboxGroup = React.forwardRef((props, ref) => {

  const { onChange, color, size, defaultValue, inline, value, children, ...rest} = props;

  
  
  return (
    <div
      css={[
        
      ]}
    >
      {content}
    </div>
  )
})

CheckboxGroup.propTypes = {

}

CheckboxGroup.defaultProps = {

}

CheckboxGroup.displayName = "CheckboxGroup"

export default CheckboxGroup;