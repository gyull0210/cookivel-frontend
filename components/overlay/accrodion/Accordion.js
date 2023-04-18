import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import { HiChevronDown } from 'react-icons/hi';

const Accordion = React.forwardRef((props, ref) => {

  const { variants, header, children, key } = props;

  // const ref = useRef(null);

  // const parentRef = useRef(null);

  // const childRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div
      ref={ref}
      key={key}
      tw="flex flex-col relative"
      css={[
        variants === "default" && tw`border border-gray-400 rounded-l-lg rounded-r-lg`,
        variants === "flush" && tw`border-b border-gray-400`
      ]}
    >
      <div 
        tw="flex justify-between items-center"
        css={[

        ]}
      >
        {header}
        <button
          type="button"
          onClick={handleClick}
        >
          <span className="text-2xl">
            {<HiChevronDown 
              tw="shrink-0 duration-300" 
              css={[
                isOpen && tw`-rotate-180 duration-300`,
                !isOpen && tw`duration-300`
              ]}
            />}
          </span>
        </button>
      </div>
      {isOpen && 
      <div className="p-4 mb-6">
      { children }
      </div>
      }
    </div>
  )
})

Accordion.propTypes = {

}

Accordion.defaultProps = {
  variants: "flush"
}

Accordion.displayName = "Accordion"

export default Accordion;