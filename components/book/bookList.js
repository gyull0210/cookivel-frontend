import tw from 'twin.macro'
import BookItem from './bookItem';

const BookList = (props) => {

  const {offset, limit, data} = props;

  return (
    <div tw="flex flex-wrap mx-auto mb-4">      
      {data.slice(offset, offset + limit).map((data, i) => (
        <div tw="border-b border-gray-200" key={i}>
          <BookItem id={i+1} book={data} />
        </div>
      ))}
    </div>
  )
}

export default BookList;