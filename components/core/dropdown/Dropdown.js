import { useState, useEffect, useRef } from 'react'
import useDetectClose from '../../hooks/useDetectClose'
import PropTypes from 'prop-types'
import tw from 'twin.macro'
import { jsx } from '@emotion/react'

const Dropdown = ({label, menu}) => {

  const dropDownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(dropDownRef, false);
  
  const handleDropdown = (e) => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 active:bg-gray-200"
        css={[
          size=""
        ]}
        onClick={handleDropdown}
      >
        {label}
      </button>
      <div 
        ref={dropDownRef}
        className={isOpen ? "absolute opacity-0 mt-4 right-0 origin-top-right translate-y-0 duration-50 whitespace-nowrap" : "absolute opacity-100 mt-4 right-0 origin-top-right bg-white w-56 -translate-y-2 rounded-md border shadow-sm duration-150 whitespace-nowrap" }
        css={[
          isOpen ? tw`absolute mt-4 translate-y-0 opacity-0 duration-50 whitespace-nowrap` : `absolute opacity-100 mt-4 bg-white rounded-md border shadow-sm duration-150 translate-y-2 whitespace-nowrap`,
          position === "left" && tw`right-0 origin-top-left`, positon === "right" && tw`right-0 origin-top-right`,
        ]}
        role="menu"
        tabIndex={-1}
        >
          {menu}      
      </div>
    </div>
  )
}

Dropdown.propTypes = {

  label: PropTypes.string.isRequired,

  onClick: PropTypes.func,

};

Dropdown.defaultProps = {

  onClick: PropTypes.func,
};

export default Dropdown;