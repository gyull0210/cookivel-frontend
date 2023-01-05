import { jsx } from '@emotion/react'
import propTypes from 'prop-types'
import React from 'react'
import tw from 'twin.macro'

/**
 * @description
 * 
 */
const Badge = React.forwardRef((props, ref) => {

  const { className, size, variant, styled, color, label, ...rest } = props;

  const checkColors = () => {
    if(variant.match("solid")){
      if(color.match("primary")){return tw`bg-primary`}
      if(color.match("secondary")){return tw`bg-secondary`}
      if(color.match("accent")){return tw``}
      if(color.match("info")){return tw``}
      if(color.match("success")){return tw``}
      if(color.match("warning")){return tw``}
      if(color.match("error")){return tw``}
    }

    if(variant.match("subtle")){
      if(color.match("primary")){return tw``}
      if(color.match("secondary")){return tw``}
      if(color.match("accent")){return tw``}
      if(color.match("info")){return tw``}
      if(color.match("success")){return tw``}
      if(color.match("warning")){return tw``}
      if(color.match("error")){return tw``}
    }

    if(variant.match("outline")){
      if(color.match("primary")){return tw`text-primary border-primary`}
      if(color.match("secondary")){return tw``}
      if(color.match("accent")){return tw``}
      if(color.match("info")){return tw``}
      if(color.match("success")){return tw``}
      if(color.match("warning")){return tw``}
      if(color.match("error")){return tw``}
    }
  }

  return (
    <span 
      className={className}
      css={[
        tw`inline-block whitespace-nowrap align-middle text-center`,
        variant === "solid" && tw`text-white`,
        variant === "subtle" && tw`text-sky-400 bg-sky-200`,
        variant === "outline" && tw`bg-transparent text-current border border-current`,
        size === "xs" && tw`px-1 py-1 text-xs`,
        size === "sm" && tw`px-1 py-1 text-sm`,
        size === "md" && tw`px-2 py-1 text-sm`,
        size === "lg" && tw`px-3 py-1 text-base`,
        styled === "rounded" && tw`rounded-lg`,
        styled === "circle" && tw`rounded-full`,
        color && checkColors
      ]}
      {...rest}
    >
      {label}
    </span>
  )
})

Badge.propTypes = {
  size: propTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: propTypes.oneOf(["solid", "subtle", "outline"]),
  styled: propTypes.oneOf(["rounded", "circle"])
}

Badge.defaultProps = {
  size: "md",
  variant: "solid",
  styled: "rounded"
}

Badge.displayName = "Badge"

export default Badge;