import React from 'react'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import propTypes from 'prop-types'
import { HiUser } from 'react-icons/hi2'
import Image from 'next/image'

const Avatar = React.forwardRef((props, ref) => {

  const {variant, id, className, size, src, alt, status, width, height, ...rest} = props;

  return (
    <div css={[tw`inline-flex relative flex-shrink-0`,
        size === "sm" && tw`w-8 h-8`,
        size === "md" && tw`w-10 h-10`,
        size === "lg" && tw`w-12 h-12`,
        size === "xl" && tw`w-14 h-14`,
    ]}>
    <div
      id={id}
      css={[
        tw`inline-flex relative overflow-hidden rounded-full`,
        size === "sm" && tw`w-8 h-8`,
        size === "md" && tw`w-10 h-10`,
        size === "lg" && tw`w-12 h-12`,
        size === "xl" && tw`w-14 h-14`, 
      ]}
    >
      {src &&
      <Image
        id=""
        className={className}
        css={[
          tw`flex items-center justify-center w-full h-full object-cover ring-inherit`        
        ]}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...rest}
      />
      }
      {!src && 
      <div
        css={[
        tw`flex items-center justify-center w-full h-full bg-gray-300 rounded-full`,
        size === "sm" && tw`w-8 h-8`,
        size === "md" && tw`w-10 h-10`,
        size === "lg" && tw`w-12 h-12`,
        size === "xl" && tw`w-14 h-14`, 
        ]}
        alt={alt}
        {...rest}
      >
        <HiUser css={[
          tw`text-gray-400 rounded-full`,
          size === "sm" && tw`w-6 h-6`,
          size === "md" && tw`w-8 h-8`,
          size === "lg" && tw`w-10 h-10`,
          size === "xl" && tw`w-12 h-12`, 
        ]}
        />
      </div>
      }
      
    </div>
    {status && <span css={[tw`absolute right-0 bottom-1 w-3 h-3 rounded-full bg-sky-400 ring-2 ring-sky-200 scale-100 animate-[pulse_2s_infinite] flex-wrap z-10`]}/>}
    </div>
  )
})

Avatar.propTypes = {

}

Avatar.defaultProps = {

}

Avatar.displayName = "Avatar"

export default Avatar;