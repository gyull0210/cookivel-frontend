import { jsx } from '@emotion/react'
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
      tw="flex"
      css={[
        loadingText && isLoading ? tw`hidden`: tw`inline-block`
      ]}
    >
      {leftIcon && <span tw="mr-2">{cloneElement(leftIcon)}</span>}
      <span tw="truncate">{label}</span>
      {rightIcon && <span tw="ml-2">{cloneElement(rightIcon)}</span>}
    </div>
  )

  const colors = {solidStyle, outlineStyle}

  const checkColors = () => {
    if(variant === "solid"){
      if(disabled === true){
        return tw`text-white bg-primary hover:bg-primary active:bg-primary opacity-60`
      } else {
        solidStyle.find(color => {
          solidStyle.match(color)
        })
      }
    }

    if(variant === "outline"){
      if(disabled === true){
        return tw`text-primary hover:bg-sky-50 active:bg-sky-50`
      } else {
        if(color.match("primary")){return outlineStyle.primary}
        if(color.match("secondary")){return outlineStyle.secondary}
        if(color.match("accent")){return tw``}
        if(color.match("info")){return outlineStyle.info}
        if(color.match("success")){return outlineStyle.success}
        if(color.match("warning")){return outlineStyle.warning}
        if(color.match("error")){return outlineStyle.error}
      }
    }

    if(variant === "ghost"){
      if(disabled === true){
        return tw`hover:(bg-sky-400 opacity-20) active:(bg-sky-500 opacity-20)`
      } else {
        if(color === ""){return tw`hover:bg-gray-100 active:bg-gray-200`}
        if(color.match("primary")){return tw`text-primary hover:(text-white bg-sky-500 opacity-80) active:(text-white bg-sky-600 opacity-80)`}
      }
    }
  };

  return (
    <button
      type={type}
      className={className}
      ref={ref}
      css={[
        tw`inline-flex items-center justify-center select-none`,
        disabled === true && tw`cursor-not-allowed`, 
        variant === "solid" && !disabled && tw`text-white border border-current` ,
        variant === "outline" && !disabled && tw`bg-transparent border border-current`,
        variant === "ghost" && !disabled && tw`text-current bg-transparent border border-transparent`,
        styled === "rounded" && tw`rounded-md`,
        styled === "circle" && tw`rounded-full`,
        size === "xs" && tw`px-3 h-7 min-w-[1.75rem] text-xs`,
        size === "sm" && tw`px-4 h-8 min-w-[2rem] text-sm`,
        size === "md" && tw`px-4 h-9 min-w-[2.25rem] text-sm`,
        size === "lg" && tw`px-4 h-11 min-w-[2.5rem] text-base`,
        size === "xl" && tw`px-6 h-12 min-w-[3rem] text-lg`,
        color && checkColors
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