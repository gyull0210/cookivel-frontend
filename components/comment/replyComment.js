import { HiOutlineChatBubbleOvalLeft, HiOutlineEllipsisHorizontal, HiOutlineHeart } from 'react-icons/hi2';
import tw from 'twin.macro'
import Avatar from '../core/avatar/Avatar';
import { useState } from 'react';
import CommentForm from './commentForm';

const ReplyComment = ({comment, id}) => {

  return (
    <div tw="flex px-2 py-2" key={id}>
      <div tw="mr-2">
        <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
      </div>
      <div tw="flex flex-col w-full">
        <div tw="mb-2 overflow-hidden">
          <div tw="max-w-full align-top inline-block">
            <h3 tw="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{comment.nickName}</h3>
          </div>
        </div>
        <div tw="">
          <div>
            {comment.content}
          </div>
          <div>
            더보기
          </div>
          <div tw="text-right text-sm text-gray-400">
            {comment.created_at}
          </div>               
        </div>
        <div tw="mt-4 flex justify-end">
          <div tw="flex gap-4">
            <button type="button" tw="flex items-center">
              <HiOutlineHeart tw="w-6 h-6 stroke-gray-400 hover:stroke-red-400" />
              {comment.likes > 0 ? <span tw="text-gray-400 ml-2">{comment.likes}</span> : null}
            </button>
            <button type="button" tw="flex items-center">
              <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400"/>
              {comment.replies?.length > 0 ? <span tw="text-gray-400 ml-2">{comment.replies.length}</span> : null}
            </button>
            <button type="button">
              <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
            </button>
          </div>
        </div>            
      </div>
    </div>
  )
}

export default ReplyComment;