import React from 'react'
import { jsx } from '@emotion/react'
import propTypes from 'prop-types'
import tw from 'twin.macro'

const Toast = React.forwardRef((props, ref) => {
  
  const {position, status, message, onClick, ...rest} = props;
  
  return (
    <div css={[
      tw`flex items-center justify-between max-w-xs p-4 bg-white border rounded-md shadow-sm z-50 animate-[bounce_1s_ease-in-out]`,
      position === "top-center" && tw`absolute top-16 left-[50%] -translate-x-[50%]`,
      position === "top-right" && tw`absolute top-16 right-0`,
      position === "center" && tw`absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]`,
      position === "bottom-center" && tw`absolute bottom-16 left-[50%] -translate-x-[50%]`,
      position === "bottom-right" && tw`absolute bottom-16 right-0`,
    ]}>
      <div tw="flex items-center">
        {status && status === "success" &&
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-8 h-8 text-green-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd" />
        </svg>
        }
        {status && status === "info" &&
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-8 h-8 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd" />
        </svg>
        }
        {status && status === "warning" &&
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-8 h-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
           d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd" />
        </svg>
        }
        {status && status === "error" &&
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-8 h-8 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
          clipRule="evenodd" />
        </svg>
        }
        <p css={[
          tw`ml-3 text-sm font-bold`, 
          status === "success" && tw`text-green-600`,
          status === "info" && tw`text-blue-600`,
          status === "warning" && tw`text-yellow-600`,
          status === "errror" && tw`text-red-600`
          ]}>{message}</p>
      </div>
      <span tw="ml-2 inline-flex items-center cursor-pointer" onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" tw="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </span>
    </div>
  )
})

Toast.displayName = "Toast"

export default Toast;