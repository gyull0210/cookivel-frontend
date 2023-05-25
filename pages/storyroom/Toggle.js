import React from 'react';
import tw from 'twin.macro'

const Toggle = React.forwardRef((props, ref) => {

  const { id, name, checked, onChange } = props;

  return (
    <label
      htmlFor={id}
      tw="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300"
      css={[checked ? tw`bg-[#E6CEA0]`: null]}
    >
    <input 
      id={id}
      ref={ref} 
      tw="hidden" 
      type="checkbox"
      name={name}
      checked={checked} 
      onChange={onChange}
      />
      <div 
        tw="bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300"
        css={[ checked ? tw`transform translate-x-5 md:translate-x-6` : tw``]}
      ></div>
    </label>
  )
})

Toggle.displayName = "Toggle";

export default Toggle;