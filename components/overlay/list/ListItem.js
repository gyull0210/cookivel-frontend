import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const ListItem = React.forwardRef((props, ref) => {

  const { children } = props;

  return (
    <div
      tw=""
      css={[

      ]}
    >
      {children}
    </div>
  )
})

ListItem.displayName = "ListItem"

export default ListItem;