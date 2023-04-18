import { HiOutlineChatBubbleOvalLeft, HiOutlineEllipsisHorizontal, HiOutlineHeart } from 'react-icons/hi2';
import tw from 'twin.macro'
import Avatar from '../../components/core/avatar/Avatar';
import { useRef, useState } from 'react';


const Comment = ({comment}) => {

  const parentComment = comment.filter(comment => comment.parent_id === null);
  const childComment = (parent_id) => {
    const childComments = comment.filter(comment => comment.parent_id === parent_id);
    return childComments;
  }

  const [isLike, setIsLike] = useState(false);
  const [isReplyOpen, setIsReplyOpen] = useState(false);

  const handleCommentLike = () => {
    setIsLike(!isLike)
  }

  const handleCommentReply = (e) => {
    setIsReplyOpen(!isReplyOpen)
  }

  const replyRef= useRef(null);
  return (
    <>
    {parentComment.map((comment) => (
      <div tw="flex px-2 py-2 border-b border-gray-200" key={comment.id}>
        <div tw="mr-2">
          <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
        </div>
        <div tw="flex flex-col w-full">
          <div tw="mb-2 overflow-hidden">
            <div tw="max-w-full align-top inline-block">
              <h3 tw="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">익명의유저닉네임</h3>
            </div>
          </div>
          <div tw="">
            {comment.content}
            {comment.created_at}
          </div>
          <div tw="mt-4 flex justify-between">
            <div tw=""></div>
            <div tw="flex gap-4">
              <button type="button" onClick={handleCommentLike}>
                <HiOutlineHeart css={[tw`w-6 h-6 stroke-gray-400 hover:stroke-red-400`, isLike ? tw`duration-300 stroke-red-400 fill-red-400 active:scale-50 ease-in-out`:tw`duration-300 active:scale-50 ease-in-out`]}/>
              </button>
              <button type="button" onClick={handleCommentReply}>
                <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400"/>
              </button>
              <button type="button">
                <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
              </button>
            </div>
          </div>
          {isReplyOpen && comment.replies?.length > 0 && comment.replies.map(comment => (
          <div tw="flex px-2 py-2 border-gray-200" key={comment.id}>
        <div tw="mr-2">
          <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
        </div>
        <div tw="flex flex-col w-full">
          <div tw="mb-2 overflow-hidden">
            <div tw="max-w-full align-top inline-block">
              <h3 tw="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">익명의유저닉네임</h3>
            </div>
          </div>
          <div tw="">
            {comment.content}
            {comment.created_at}
          </div>
          <div tw="mt-4 flex justify-between">
            <div tw=""></div>
            <div tw="flex gap-4">
              <button type="button" onClick={handleCommentLike}>
                <HiOutlineHeart css={[tw`w-6 h-6 stroke-gray-400 hover:stroke-red-400`, isLike ? tw`duration-300 stroke-red-400 fill-red-400 active:scale-50 ease-in-out`:tw`duration-300 active:scale-50 ease-in-out`]}/>
              </button>
              <button type="button" onClick={handleCommentReply}>
                <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400"/>
              </button>
              <button type="button">
                <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
              </button>
            </div>
          </div>
          </div>
          </div>
          ))}
        </div>             
      </div>))} 
      </>    
  )
}

export default Comment;