import React, { cloneElement } from "react"
import { jsx } from '@emotion/react'
import tw from 'twin.macro'


const Tag = React.forwardRef((props, ref) => {

  const { className, variant, styled, size, leftIcon, rightIcon, label } = props;

  const content = (
    <div
      css={[
        tw``
      ]}
    >
      {leftIcon && 
        <span css={[tw`mr-2`]}>{cloneElement(leftIcon)}</span>}
      <span>{label}</span>
      {rightIcon && 
        <span css={[tw`ml-2`]}>{cloneElement(rightIcon)}</span>}
    </div>
  )

  return (
    <div
      className={className}
      css={[
        tw`inline-block whitespace-nowrap align-middle text-center`,
        variant === "solid" && tw`bg-sky-400 text-white`,
        variant === "subtle" && tw`bg-sky-200 text-sky-400`,
        variant === "outline" && tw`bg-transparent border border-gray-400`,
        size === "xs" && tw`text-xs`,
        size === "sm" && tw`px-1 py-0.5 text-sm`,
        size === "md" && tw`px-1 py-0.5 text-sm`,
        size === "lg" && tw`px-1 py-1 text-base`,
        styled === "pill" && tw`rounded-lg`,
        styled === "chip" && tw`rounded-full`
      ]}
    >
      {content}
    </div>
  )
})

Tag.propTypes = {

}

Tag.defaultProps = {

}

Tag.displayName = "Tag"

export default Tag;