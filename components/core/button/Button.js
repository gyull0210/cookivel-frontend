import { css, jsx } from '@emotion/react'
import tw, { theme } from 'twin.macro'
import propTypes from 'prop-types'
import React, { cloneElement } from 'react';
import Spinner from '../spinner/Spinner';
import solidStyle from '../../style/button/solidStyle';
import outlineStyle from '../../style/button/outlineStyle';
import findMatch from '../../util/findMatch';

const Button = React.forwardRef((props, ref) => {

  const { className, type, size, variant, color, styled, onClick, disabled, label, leftIcon, rightIcon, isLoading, loadingText, ...rest } = props;

  const loader = (
    <div 
    tw="flex justify-center items-center"
    css={[
      !loadingText && tw`mr-2`
    ]}
    >
      <Spinner size="xs"/>
      {loadingText && <span tw="ml-2 text-current truncate">{loadingText}</span>}
    </div>
  )
  const content = (
    <div
      tw="!w-full !flex items-center"
      css={[
        loadingText && isLoading ? tw`hidden`: tw`inline-block`
      ]}
    >
      {leftIcon && <span tw="block mr-2">{cloneElement(leftIcon)}</span>}
      <span tw="truncate">{label}</span>
      {rightIcon && <span tw="block ml-2">{cloneElement(rightIcon)}</span>}
    </div>
  )

  const colors = {
    primary: {
      solid: tw`border bg-sky-400 border-sky-400 hover:shadow active:(bg-sky-500 border-sky-500)`,
      outline: tw`text-sky-400 hover:bg-sky-100`,
      ghost: tw`text-sky-400 hover:bg-sky-100`
    },
    cookie: {
      solid:{},
      outline:{},
      ghost:{}
    },
    secondary: {
      solid:{},
      outline:{},
      ghost:{}
    },
    accent: {
      solid:{},
      outline:{},
      ghost:{}
    },
    info: {
      solid:{},
      outline:{},
      ghost:{}
    },
    success: {
      solid: tw`bg-green-400 border border-green-400 hover:shadow active:(bg-green-500 border-green-500)`,
      outline: tw`text-green-400 hover:bg-green-100`,
      ghost: tw`text-green-400 hover:bg-green-100`
    },
    warning: {
      solid: tw`bg-yellow-500 border border-yellow-500 hover:shadow active:(bg-yellow-600 border-yellow-600)`,
      outline: tw`text-yellow-500 hover:bg-yellow-200`,
      ghost: tw`text-yellow-500 hover:bg-yellow-200`
    },
    error: {
      solid: tw`bg-red-500 border-red-500 hover:shadow active:(bg-red-600 border-red-600)`,
      outline: tw`text-red-500 hover:bg-red-200`,
      ghost: tw`text-red-500 hover:bg-red-200`
    }
  }

  return (
    <button
      type={type}
      className={className}
      ref={ref}
      css={[
        tw`inline-flex items-center justify-center select-none`,
        variant === "solid" && !disabled && tw`text-white`,
        variant === "outline" && !disabled && tw`bg-transparent border border-current`,
        variant === "ghost" && !disabled && tw`text-current bg-transparent border border-transparent`,
        styled === "rounded" && tw`rounded-md`,
        styled === "circle" && tw`rounded-full`,
        size === "xs" && tw`px-3 h-7 min-w-[1.75rem] text-xs`,
        size === "sm" && tw`px-4 h-8 min-w-[2rem] text-sm`,
        size === "md" && tw`px-4 h-9 min-w-[2.25rem] text-sm`,
        size === "lg" && tw`px-4 h-11 min-w-[2.5rem] text-base`,
        size === "xl" && tw`px-6 h-12 min-w-[3rem] text-lg`,       
        color && variant === "solid" && colors[color][variant],
        color && variant === "outline" && colors[color][variant],
        color && variant === "ghost" && colors[color][variant],
        disabled === true && tw`cursor-not-allowed`,
        disabled === true && variant === "solid" && tw`text-gray-400 bg-gray-200 border border-gray-200`,
        disabled === true && variant === "outline" && tw`text-gray-400 border border-current`,
        disabled === true && variant === "ghost" && tw`text-gray-400 hover:bg-transparent`,
        ]}    
      onClick={onClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && loader}
      {label && content}
    </button>
  )
})

Button.propTypes = {
  type: propTypes.string,
  label: propTypes.node,
  leftIcon: propTypes.element,
  rightIcon: propTypes.element,
  onClick: propTypes.func,
  variant: propTypes.oneOf([
    "solid",
    "outline",
    "ghost"
  ]),
  color: propTypes.string,
  styled: propTypes.oneOf([
    "rounded",
    "circle"
  ]),
  size: propTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  isLoading: propTypes.bool
}

Button.defaultProps = {
  type:"button",  
  variant: "solid",
  color: "primary",
  size:"md",
  styled: "rounded",
  isLoading: false,
  disabled: false
}

Button.displayName = "Button"

export default Button;