import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'

const Table = React.forwardRef((props, ref) => {

  const { variant } = props;

  return (
    <table
    css={[
      tw``,
      variant === "" && tw``,
      variant === "" && tw``,
      variant === "" && tw``,
      styled === "" && tw``,
      styled === "" && tw``
    ]}
    >

    </table>
  )
})

Table.displayName = "Table"

export default Table;