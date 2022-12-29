import React from 'react'

const FormHelperText = React.forwardRef((props, ref) => {

  const { className, id, ...rest } = props;

  return (
    <div
      ref={ref}
      id={id}
      className={className}
      {...rest}
    />
  )
})

export default FormHelperText;