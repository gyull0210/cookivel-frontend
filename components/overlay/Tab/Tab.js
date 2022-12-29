import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';

const Tab = React.forwardRef((props, ref) => {

  const {} = props;

  const [index, setIndex] = useState(0);

  const handleTabClick = () => {
    setIndex(item.id);
  }

  return (
    <div
      ref={ref}
      className=""
    >
      {data.map(item => (
        <div
          key={item.id}
          tw=""
          css={[
            index === item.id ? tw`bg-sky-100` : tw``
          ]}
          onClick={handleTabClick}
        >
          {item.title}
        </div>
      ))}

      {data.filter(item => index === item.id).map(item => (
        <div
          tw=""
        >
          {item.description}
        </div>
      ))}
    </div>
  )
})

Tab.propTypes = {

}

Tab.defaultTypes = {
  
}

export default Tab;