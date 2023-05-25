import { faker } from '@faker-js/faker';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiBookmark, HiHeart, HiUser } from 'react-icons/hi2';
import tw from 'twin.macro'


const BookItem = ({id, book}) => {

  return (
    <article tw="flex gap-4 py-6">
      <div tw="hidden lg:block font-bold" css={id > 10 ? tw`w-2` : tw`w-3`}>{Number(id)}</div>
      <div tw="relative px-2">
        <a tw="relative block w-28 h-36 md:w-32 md:h-40 rounded-lg overflow-hidden">
          <Image tw="flex items-center justify-center w-full h-full object-cover" src={book.bookImageUrl} width={208} height={240} alt="책표지"/>
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
                  
              <h1 tw="text-xl font-bold truncate max-w-[280px] lg:max-w-[500px]">{book.bookTitle}</h1>
            </div>
              
          </div>                       
          <span tw="text-base font-semibold">{book.bookWriter}</span>
          <span tw="ml-2 text-base text-gray-400">{book.bookChapters}화</span>
        </header>
        <p tw="w-full flex-1 break-words line-clamp-2 text-sm md:text-base text-gray-400 mb-2">
        {book.description}      
        </p>
        <div tw="flex justify-between">
          <div tw="flex flex-wrap gap-2">
          {book.tags.map((tag, j)=>(
          <Link tw="bg-gray-100 rounded px-2 py-0.5 hover:bg-gray-200 cursor-pointer" key={j} href={`/book/nextpage?tags=${tag}`}>
            <span tw="text-sm text-gray-400">{tag}</span>
          </Link>
          ))}
          </div> 
            <div tw="ml-2 md:inline-flex gap-4 text-gray-400 hidden">
              <div tw="flex items-center">
                <HiUser tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{book.read}</span>
              </div>
              <div tw="flex items-center">
                <HiHeart tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{book.like}</span>
              </div>
              <div tw="flex items-center">
                <HiBookmark tw="w-6 h-6 stroke-1 stroke-gray-400 fill-white"/>
                <span tw="text-sm">{book.subscribe}</span>
              </div>
            </div>                
        </div>
      </div>
    </article>
  )
}

export default BookItem;