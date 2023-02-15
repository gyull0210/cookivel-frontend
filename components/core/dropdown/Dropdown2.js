import { useState, useEffect, useRef } from 'react'
import useDetectClose from '../../hooks/useDetectClose'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { jsx } from '@emotion/react'

const Dropdown2 = ({label, menu}) => {

  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(dropDownRef, false);
  
  const handleDropdown = (e) => {
    setIsOpen(!isOpen);
  }

  return (
    <div tw="flex items-center justify-center p-12">
    <div tw="group relative inline-block text-left" tabindex="-1">
      <span tw="rounded-md shadow-sm">
        <button tw="active:shadow-outline-blue inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-5 text-gray-700 focus-within:outline focus-within:outline-2 focus-within:border-transparent focus-within:outline-blue-500 hover:text-gray-500 active:bg-gray-50 active:text-gray-800" type="button" aria-haspopup="true">
          <span>{label}</span>

          <svg tw="ml-2 -mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </span>
      <div tw="invisible origin-top-right -translate-y-2 scale-95 transform opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:opacity-100">
        <div tw="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md border border-gray-200 bg-white shadow-lg outline-none" role="menu">
          <div tw="px-4 py-3">
            <p tw="text-sm leading-5">Signed in as</p>
            <p tw="truncate text-sm font-medium leading-5 text-gray-900">tom@example.com</p>
          </div>

          <div tw="py-1">
            <a href="javascript:void(0);" tw="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500" role="menuitem">Account settings</a>
            <a href="javascript:void(0);" tw="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500" role="menuitem">Support</a>
            <span role="menuitem" tabindex="-1" tw="flex w-full cursor-not-allowed justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 opacity-50" aria-disabled="true">New feature (soon)</span>

            <a href="javascript:void(0);" tw="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500" role="menuitem">License</a>
          </div>

          <div tw="py-1">
            <a href="javascript:void(0);" tw="flex w-full justify-between px-4 py-2 text-left text-sm leading-5 text-gray-700 focus-visible:outline-1 focus-visible:outline-blue-500" role="menuitem">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

Dropdown2.propTypes = {

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,

};

Dropdown2.defaultProps = {

  onClick: PropTypes.func,
};

export default Dropdown2;