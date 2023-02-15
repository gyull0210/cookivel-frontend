import tw from 'twin.macro'

const disabledColor = {
  'primary': tw`text-white bg-primary hover:bg-primary active:bg-primary opacity-60`,

  'secondary': tw`bg-primary border-primary hover:(bg-sky-500 border-sky-500) active:(bg-sky-600 border-sky-600)`,

  'success': tw`bg-primary border-primary hover:(bg-sky-500 border-sky-500) active:(bg-sky-600 border-sky-600)`,

  'warning': tw`bg-primary border-primary hover:(bg-sky-500 border-sky-500) active:(bg-sky-600 border-sky-600)`,

  'info': tw`bg-primary border-primary hover:(bg-sky-500 border-sky-500) active:(bg-sky-600 border-sky-600)`,

  'error': tw`bg-primary border-primary hover:(bg-sky-500 border-sky-500) active:(bg-sky-600 border-sky-600)`, 
}

export default disabledColor;