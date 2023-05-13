import Image from 'next/image'
import tw from 'twin.macro'
import { faker } from '@faker-js/faker'
import Button from '../../components/core/button/Button'
import { router } from 'next/router'
import { useState } from 'react'


const StoryItem = (props) => {

  const { story, onDelete } = props;

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  return (
    <div tw="w-full flex flex-col lg:flex-row gap-6 px-4 py-6 justify-between items-center border-b border-gray-200">
      <div tw="flex flex-col lg:flex-row gap-6">
        <div tw="w-[100px] h-[140px] lg:(w-[125px] h-[175px]) rounded-lg overflow-hidden">
          <Image tw="min-w-[100px] min-h-[140px] lg:(min-w-[125px] min-h-[175px]) object-cover" src={story.coverUrl} alt="책표지" width={125} height={175}/>
        </div>
              
        <div tw="flex flex-col justify-between mb-4">
          <div tw="max-w-[600px] mb-4">
            <h1 tw="text-lg font-bold">{story.title}</h1>
            <span tw="text-sm text-gray-400">총 {story.chapters}화 </span>
            <p tw="text-sm text-gray-400">{story.description}</p>
          </div>
          <div tw="flex flex-wrap gap-2">
            {story.tags.map((tag, index)=> (
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
        <Button variant="outline" size="md" label="작품 삭제" onClick={()=>onDelete}/>               
      </div>
    </div>
  )
}

export default StoryItem;