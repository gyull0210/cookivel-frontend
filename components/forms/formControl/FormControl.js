import React from 'react'
import propTypes from 'prop-types'
import { jsx } from '@emotion/react'
import tw from 'twin.macro'
import Input from '../input/inputs'

const FormControlContext = React.createContext();

const useFormControlContext = () => React.useContext(FormControlContext);

const FormControl = React.forwardRef((props, ref) => {

  const { children, className, required, disabled, invalid, readOnly, id, ...rest } = props;

  return (
    <FormControlContext.Provider value={FormControlContext}>
      <div
        className={className}
        ref={ref}
        css={[
          tw`w-full relative`
        ]}
        {...rest}
      >
        {children}
      </div>
    </FormControlContext.Provider>
  )
})

FormControl.propTypes = {
  required: propTypes.bool,
  disabled: propTypes.bool,
  invalid: propTypes.bool,
  readOnly: propTypes.bool,
  id: propTypes.string
}

FormControl.defaultProps = {

}

export default FormControl;