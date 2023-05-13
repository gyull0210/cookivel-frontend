import Image from 'next/image'
import tw from 'twin.macro'
import { faker } from '@faker-js/faker'
import Button from '../../components/core/button/Button'
import { router } from 'next/router'
import { useState } from 'react'


const StoryItem = (props) => {

  const {  } = props;

  const imgUrl = faker.image.fashion(150,200)

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const dummyData = {
    title: faker.lorem.words(2),
    chapters: faker.datatype.number({min:1, max:500}),
    description:faker.lorem.sentences(3),
    tags:[
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word(),
      faker.random.word()
    ]
  }
  const title = faker.lorem.words(2)

  return (
    <div tw="w-full flex flex-col lg:flex-row gap-6 px-4 py-6 justify-between items-center">
      <div tw="flex flex-col lg:flex-row gap-6">
        <div tw="w-[100px] h-[140px] lg:(w-[125px] h-[175px]) rounded-lg overflow-hidden">
          <Image tw="min-w-[100px] min-h-[140px] lg:(min-w-[125px] min-h-[175px]) object-cover" src={imgUrl} alt="책표지" width={125} height={175}/>
        </div>
              
        <div tw="flex flex-col justify-between mb-4">
          <div tw="max-w-[600px] mb-4">
            <h1 tw="text-lg font-bold">{dummyData.title}</h1>
            <span tw="text-sm text-gray-400">총 {dummyData.chapters}화 </span>
            <p tw="text-sm text-gray-400">{dummyData.description}</p>
          </div>
          <div tw="flex flex-wrap gap-2">
            {dummyData.tags.map((tag, index)=> (
              <a tw="bg-gray-100 rounded px-2 py-0.5 hover:bg-gray-200 cursor-pointer" key={index}>
                <span tw="text-sm text-gray-400">{tag}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div tw="flex lg:flex-col gap-2">  
        <Button variant="solid" size="md" label="회차 쓰기" onClick={()=>router.push("/storyroom/chapters/createChater")}/>
        <Button variant="outline" size="md" label="공지 쓰기" onClick={()=>router.push("/storyroom/chapters/createChater")}/>
        <Button variant="outline" size="md" label="작품 수정" onClick={()=>router.push("/storyroom/chapters/createChater")}/>
        <Button variant="outline" size="md" label="작품 삭제" />               
      </div>
    </div>
  )
}

export default StoryItem;