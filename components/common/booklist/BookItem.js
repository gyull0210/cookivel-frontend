import Image from 'next/image'

export default function BookItem(){
  return (
    <div className="flex gap-4">
      <div className="relative overflow-hidden">
        <Image className="rounded" src="https://random.imagecdn.app/100/150" width={100} height={150} alt="bookcover"/>
      </div>
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-row items-center mb-4">
          <span className="text-lg">연재제목</span>
          <span>닉네임</span>
        </div>
        <div className="flex flex-col">
          <p>작품 소개</p>
          <div className="flex">
            <span>조회 10</span>
            <span>추천 1</span>
          </div>
        </div>
      </div>
    </div>
  )
}