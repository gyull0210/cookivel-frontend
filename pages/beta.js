import tw from 'twin.macro'

const Beta = () => {

  const [colorName, setColorName] = useState("");

  const handleColor = () => {
    setColorName()
  }
  const solidStyle = {
    primary: `bg-gray-100`,

    secondary: `bg-gray-200`
  }

  const checkColors = () => {
    
    if(){return solidStyle.match(primary)}
  }

  return (
    <div>
      <input onChange={handleColor} value={color}/>
      <div tw="border w-64 h-64"
      css={[
        colorName && solidStyle.match(color)
      ]}></div>
    </div>
  )
}

export default Beta