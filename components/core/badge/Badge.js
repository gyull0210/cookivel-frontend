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

  const colors = {
    primary: {
      solid: tw`border bg-sky-400 border-sky-400`,
      outline: tw`text-sky-400`,
      subtle: tw`text-sky-400 bg-sky-200`
    },
    secondary: {
      solid:{},
      outline:{},
      subtle:{}
    },
    accent: {
      solid:{},
      outline:{},
      subtle:{}
    },
    info: {
      solid:{},
      outline:{},
      subtle:{}
    },
    success: {
      solid: tw`bg-green-400 border border-green-400`,
      outline: tw`text-green-400`,
      subtle: tw`text-green-400 bg-green-200`
    },
    warning: {
      solid: tw`bg-yellow-500 border border-yellow-500`,
      outline: tw`text-yellow-500`,
      subtle: tw`text-yellow-500 bg-yellow-200`
    },
    error: {
      solid: tw`bg-red-500 border-red-500`,
      outline: tw`text-red-500`,
      subtle: tw`text-red-500 bg-red-200`
    }
  }

  return (
    <span 
      className={className}
      css={[
        tw`inline-block text-center align-middle whitespace-nowrap`,
        variant === "solid" && tw`text-white`,
        variant === "subtle" && tw`text-sky-400 bg-sky-200`,
        variant === "outline" && tw`text-current bg-transparent border border-current`,
        size === "xs" && tw`px-1 py-1 text-xs`,
        size === "sm" && tw`px-1 py-1 text-sm`,
        size === "md" && tw`px-2 py-1 text-sm`,
        size === "lg" && tw`px-3 py-1 text-base`,
        styled === "rounded" && tw`rounded-lg`,
        styled === "circle" && tw`rounded-full`,
        color && variant && colors[color][variant]
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