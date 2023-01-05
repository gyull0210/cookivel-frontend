import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { jsx } from '@emotion/react';
import tw from 'twin.macro';

export const SelectInput = React.forwardRef((props, ref) => {

  const { variant, size, children, value, defaultValue, readOnly, onChange } = props;
  
  const selectList = [...props];
  const [selected, setSelected] = useState();

  const handleSelect = (e) => {
    setSelected(e.target.value);
  }

  return (
    <select
      id=""
      className="w-full px-3 py-2 rounded-lg"
      css={[
        tw`form-select border border-gray-300 focus:(border border-sky-400 ring-sky-400)`
      ]}
      onChange={handleSelect}
      value={selected}
    >
      {selectList.map((item) => (
      <option
        className=""
        value={item}
        key={item}
      >
        {item}
      </option>  
      ))}
      
    </select>

  )
})

SelectInput.displayName = "SelectInput"

export default SelectInput;