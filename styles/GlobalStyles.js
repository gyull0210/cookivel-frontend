import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    WebkitTapHighlightColor: tw`bg-transparent`,
    ...tw`antialiased overflow-x-hidden min-w-[435px]`,
    Keyframe: tw`animate-fadeIn`,
    fontFamily: tw`font-sans`
  },
  a: {
    color: tw`text-inherit`,
    textDecoration: tw`no-underline`
  }
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
