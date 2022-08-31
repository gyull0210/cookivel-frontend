import Image from 'next/image'
import BookItem from './BookItem'

export default function BookList(){
  return (
    <article className="flex flex-col flex-wrap md:flex-row lg:flex-row gap-4">
        <BookItem/>       
        <BookItem/>
        <BookItem/>
        <BookItem/>
        <BookItem/>
        <BookItem/>
    </article>
  )
}