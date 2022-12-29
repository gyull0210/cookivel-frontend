import { createContext } from 'react'

const RadioContext = createContext({});

export const RadioGroup = ({orientation, label, children, defaultValue, description, ...props}) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <RadioContext.Provider value={props}/>
    </fieldset>
  )
}