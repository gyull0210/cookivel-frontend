import { Global, css } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css({
  body: {
    //theme.colors.primary
    WebkitTapHighlightColor: tw`bg-transparent`,
    ...tw`antialiased overflow-x-hidden min-w-[435px]`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
