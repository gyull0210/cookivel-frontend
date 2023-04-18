import { useRef, useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'
import tw from 'twin.macro'

export const Portal = (props) => {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    ref.current = document.querySelector<HTMLElement>("#portal")
    setMounted(true)
  }, [])

  return (mounted && ref.current) ? createPortal(<div tw="block fixed left-0 top-0 w-full h-full overflow-auto bg-black opacity-20 z-10">{props.children}</div>, ref.current) : null;
}