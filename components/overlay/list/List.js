import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const List = React.forwardRef((props, ref) => {

  const { children } = props; 

  return (
    <div>
      {children}
    </div>
  )
})

List.displayName = "List"

export default List;