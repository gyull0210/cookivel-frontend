import tw from 'twin.macro'
import { useRef, useState } from 'react'


const ScrollList = (props) => {

  const {children} = props;

  const scrollRef = useRef(null);
  const [isScroll, setScroll] = useState(false);
  const [startX, setStartX] = useState();

  const onScrollStart = () => {

  }

  const onScrollEnd = () => {

  }

  const onScrollMove = () => {

  }
  
  return (
    <div ref={scrollRef}>
      {children}
    </div>
  )
}

export default ScrollList;