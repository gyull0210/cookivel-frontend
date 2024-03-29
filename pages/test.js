import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Avatar from '../components/core/avatar/Avatar'
import Badge from '../components/core/badge/Badge'
import Button from '../components/core/button/Button'
import Tag from '../components/core/tag/Tag'
import Textarea from '../components/forms/textarea/Textarea'
import Checkbox from '../components/forms/checkbox/Checkbox'
import Input from '../components/forms/input/Input'
import Radio from '../components/forms/radio/Radio'
import TextInput from '../components/forms/textinput/TextInput'
import FormHelperText from '../components/forms/formHelperText/FormHelperText'
import FormControl from '../components/forms/formControl/FormControl'
import FormLabel from '../components/forms/formLabel/FormLabel'
import Inputs from '../components/forms/input/inputs'
import Accordion from '../components/overlay/accrodion/Accordion'
import tw from 'twin.macro'

const Test = () => {

  const [isChecked, setIsChecked] = useState(false);

  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="h-12 mb-4">
        얍
      </header>

      <main tw="max-w-screen-lg gap-4 flex flex-col justify-center items-center mx-auto mb-4">
        <div>
          <Button label="하늘색" size="xs" variant="solid" color="primary"/>
          <Button label="하늘색" size="sm" variant="solid" color="primary"/>
          <Button label="하늘색" size="md" variant="solid" color="primary"/>
          <Button label="하늘색" size="lg" variant="solid" color="primary"/>
          <Button label="하늘색" size="xl" variant="solid" color="primary"/>

          <Button label="하늘색" size="md" variant="outline" color="primary" /> 
          <Button label="하늘색" size="md" variant="ghost" color="primary"/>
          <Button label="하늘색" size="md" variant="solid" color="primary" disabled={true}/>
          <Button label="하늘색" size="md" variant="solid" color="primary" isLoading={true}/>
        </div>
        <div className="max-w-screen-lg gap-4 flex justify-center items-center mx-auto">
          <Button label="하늘색" size="xs" variant="solid" color="primary" styled="circle"/>
          <Button label="하늘색" size="sm" variant="solid" color="primary" styled="circle"/>
          <Button label="하늘색" size="md" variant="solid" color="primary" styled="circle"/>
          <Button label="하늘색" size="lg" variant="solid" color="primary" styled="circle"/>
          <Button label="하늘색" size="xl" variant="solid" color="primary" styled="circle"/>

          <Button label="하늘색" size="md" variant="outline" color="primary"  styled="circle"/> 
          <Button label="하늘색" size="md" variant="ghost" color="primary" styled="circle"/>
          <Button label="하늘색" size="md" variant="solid" color="primary" styled="circle" disabled={true}/>
          <Button label="하늘색" size="md" variant="solid" color="primary" styled="circle" isLoading={true}/>
          <Button label="하늘색" size="md" variant="solid" color="primary" styled="circle" isLoading={true} loadingText="loading"/>
          <Button label="하늘색" size="md" variant="solid" color="primary" styled="circle" isLoading={true} loadingText="로딩중"/>
        </div>

        <div className="max-w-screen-lg flex flex-col mb-6 mx-auto">
          <h1 className="text-3xl">뱃지</h1>
          <div className="flex gap-4">
            <Badge variant="solid" size="sm" color="primary" styled="rounded" label="뱃지"/>
            <Badge variant="subtle" size="sm" color="primary" styled="rounded" label="뱃지"/>
            <Badge variant="outline" size="sm" color="primary" styled="rounded" label="뱃지"/>
            <Badge variant="subtle" size="sm" color="primary" styled="circle" label="뱃지"/>
          </div>
        </div>
        <div className="max-w-screen-lg mb-4 mx-auto">
          <Checkbox onChange={handleChange} size="sm"/>
          <Checkbox onChange={handleChange} size="md"/>
          <Checkbox onChange={handleChange} size="lg"/>

          <Radio/>
        </div>
        <div className="max-w-screen-lg flex flex-col mb-4 mx-auto">
          <Avatar size="md" styled="circle" status={true}/>
        </div>

        <div className="max-w-screen-lg flex flex-col mb-4 mx-auto">
          <Input id="test" className="mb-4" variant="" size="md" label="Input"  />
          <Input id="test2" className="mb-4" variant="" size="md" label="Input" error="에러입니다" />
          
          <Textarea id="ex1" className="mb-4"/>
          <Textarea id="ex2" error="에러입니다"/>
          <Textarea id="ex3" resize={true}/>
        </div>

        <div className="max-w-screen-lg flex mb-4 mx-auto">
          <FormControl>
            <FormLabel>FormLabel</FormLabel>
            <Inputs size="md" color="primary" />
            {error && <FormHelperText className="text-error">FormHelperText</FormHelperText>}
          </FormControl>
        </div>

        <div className="max-w-screen-lg flex flex-col mb-4 mx-auto">
          <h1 className="tex-2xl">아코디언 메뉴</h1>
          <Accordion header={"헤더"}>
            내용
          </Accordion>
        </div>
        
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Test;