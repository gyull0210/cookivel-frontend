import { forwardRef } from 'react';
import tw from 'twin.macro'


const Textarea = forwardRef.ref((props, ref) => {

  const {id, name, value, defaultValue, onChange, readOnly, disabled, resize } = props;

  return (
    <textarea
    ref={ref}
    id={id}
    name={name}
    value={value}
    defaultValue={defaultValue}
    readOnly={readOnly}
    disabled={disabled}
    onChange={onChange}
    resize={resize}
    tw="overflow-y-hidden"
    />
  )
})

export default Textarea;