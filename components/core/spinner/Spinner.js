import React from 'react'
import propTypes from 'prop-types'
import tw from 'twin.macro'

const Spinner = React.forwardRef((props, ref) => {

  const { size, color, position } = props;

  const checkColors = () => {
    if(color.match("sky")){return tw`border-sky-100`}
  }
  
  return (
      <span 
        tw="animate-spin inline-block rounded-full border-t-sky-300 border-gray-100 opacity-70"
        css={[
          size === "xs" && tw`w-4 h-4 border-2`,
          size === "sm" && tw`w-6 h-6 border-[3px]`,
          size === "md" && tw`w-10 h-10 border-[4px]`,
          size === "lg" && tw`w-12 h-12 border-[5px]`,
          color && checkColors
        ]}
      >
      </span>
  )
})

Spinner.propTypes = {
  size: propTypes.oneOf(["xs", "sm", "md", "lg"]),
}

Spinner.defaultProps = {
  size: "md",
};

Spinner.displayName = "Spinner"

export default Spinner;