import { faker } from '@faker-js/faker/locale/ko';
import { useEffect, useState } from 'react';
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2';
import tw from 'twin.macro'

const ResponsiveTable = (props) => {

  const { data, columns } = props;

  const column = ["번호", "제목", "작성자", "추천", "작성일", "조회수"];

  const tableData = {
    writer: faker.person.fullName(),
    title: faker.lorem.paragraph(2),
    comment: faker.number.int({min:0, max:1000}),
    read: faker.number.int({min:0, max:5000}),
    like: faker.number.int({min:0, max:5000}),
    //createDate: new Date()
  }

  const [review, setReview] = useState([]);

  useEffect(() => {
    setReview(Array(20).fill(tableData))
  },[])

  return (
    <table tw="table rounded-lg overflow-hidden">
      <thead>
        <tr tw="bg-sky-300 text-white font-bold border-b hidden lg:table-row">
          {column.map((column, i) => (
            <th scope="row" tw="px-4 py-2" key={i}>{column}</th>       
          ))}
        </tr>       
      </thead>
      <tbody>
      {review.map((row, i) => (
        <tr tw="border-b" key={i}>
          <td tw="hidden lg:(table-cell) px-4 py-2">{Number(i+1)}</td>
          <td tw="flex-1 px-4 py-2">
            <div tw="flex items-center">
              <div tw="flex flex-col">
                <div tw="w-[381px] text-base truncate pr-4">{row.title}</div>
                <div tw="block lg:hidden text-sm text-gray-400">
                  {row.writer} | 조회 {row.read} | 추천 {row.like} | 0000-00-00
                </div>
              </div>
            <div tw="flex items-center"><HiOutlineChatBubbleOvalLeft tw="w-4 h-4 stroke-gray-400"/>{row.comment}</div>
            </div>
          </td>
          <td tw="hidden lg:(table-cell) px-4 py-2">{row.writer}</td>
          <td tw="hidden lg:(table-cell) px-4 py-2">{row.like}</td>
          <td tw="hidden lg:(table-cell) px-4 py-2">0000-00-00</td>
          <td tw="hidden lg:(table-cell) px-4 py-2">{row.read}</td>         
        </tr>
        ))} 
      </tbody>     
    </table>
  )
}

export default ResponsiveTable;