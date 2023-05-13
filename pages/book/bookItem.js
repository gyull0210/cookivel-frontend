import { faker } from '@faker-js/faker';
import Image from 'next/image';
import { HiBookmark, HiHeart, HiUser } from 'react-icons/hi2';
import tw from 'twin.macro'


const BookItem = () => {

  const dummyData = {
    bookImageUrl: faker.image.city(208, 240, true),
    bookTitle: faker.lorem.paragraph(1),
    bookChapters: faker.datatype.number({min:1, max:500}),
    bookWriter: faker.name.firstName(),
    read: faker.datatype.number({min:1, max:100000}),
    like: faker.datatype.number({min:1, max:10000}),
    subscribe: faker.datatype.number({min:1, max:10000}),
    tags:[
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word(),
      faker.lorem.word(),
    ]
  }

  return (
    <article tw="flex gap-4 py-6">
      <div tw="relative px-2">
        <a tw="relative block w-28 h-36 md:w-32 md:h-40 rounded-lg overflow-hidden">
          <Image tw="flex items-center justify-center w-full h-full object-cover" src={dummyData.bookImageUrl} width={208} height={240} alt="책표지"/>
        </a>
      </div>
      <div tw="overflow-hidden flex flex-col items-stretch pr-2">
        <header tw="">
          <div tw="flex justify-between items-center">
            <div>
              <div tw="md:flex gap-2 hidden">
                <span tw="bg-sky-500 text-sm text-white px-1 rounded-tl-lg rounded-r-lg">최신</span>
                <span tw="bg-amber-500 text-sm text-white px-1 rounded-tl-lg rounded-r-lg">인기</span>
                <span tw="bg-lime-500 text-sm text-white px-1 rounded-tl-lg rounded-r-lg">단편</span>
                <span tw="bg-purple-500 text-sm text-white px-1 rounded-tl-lg rounded-r-lg">완결</span>
              </div>
                  
              <h1 tw="text-xl font-bold truncate max-w-[500px]">{dummyData.bookTitle}</h1>
            </div>
            <div tw="ml-2 md:inline-flex gap-4 text-gray-400 hidden">
              <div tw="flex items-center">
                <HiUser tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{dummyData.read}</span>
              </div>
              <div tw="flex items-center">
                <HiHeart tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{dummyData.like}</span>
              </div>
              <div tw="flex items-center">
                <HiBookmark tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{dummyData.subscribe}</span>
              </div>
            </div>  
          </div>                       
          <span tw="text-base font-semibold">{dummyData.bookWriter}</span>
          <span tw="ml-2 text-base text-gray-400">{dummyData.bookChapters}화</span>
        </header>
        <p tw="w-full flex-1 break-words line-clamp-2 text-sm md:text-base text-gray-400 mb-2">
        {faker.lorem.sentences(5)}      
        </p>
        <div tw="flex justify-between">
          <div tw="flex flex-wrap gap-2">
          {dummyData.tags.map((tag, index)=>(
          <a tw="bg-gray-100 rounded px-2 py-0.5 hover:bg-gray-200 cursor-pointer" key={index}>
            <span tw="text-sm text-gray-400">{tag}</span>
          </a>
          ))}
          </div>
            <div tw="ml-2 md:inline-flex gap-4 text-gray-400 hidden">
              <div tw="flex items-center">
                <HiUser tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{dummyData.read}</span>
              </div>
              <div tw="flex items-center">
                <HiHeart tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{dummyData.like}</span>
              </div>
              <div tw="flex items-center">
                <HiBookmark tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{dummyData.subscribe}</span>
              </div>
            </div>                
        </div>
      </div>
    </article>
  )
}

export default BookItem;