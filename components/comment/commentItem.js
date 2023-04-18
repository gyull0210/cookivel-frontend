import { HiOutlineChatBubbleOvalLeft, HiOutlineEllipsisHorizontal, HiOutlineHeart } from "react-icons/hi2";
import Avatar from "../../components/core/avatar/Avatar";
import tw from 'twin.macro'
import { useState } from "react";

const CommentItem = ({comment, replies}) => {

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleCommentDetailMenu = () => {
    setIsOpenDropdown(!isOpenDropdown)
  }

  return (
    <div tw="flex px-2 py-2 border-b border-gray-200">
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
          <div>
            {comment.nickName}
          </div>
          <div>
            {comment.createdAt}
          </div>
          <div>
            {comment.content}
          </div>
        </div>
        <div tw="mt-4 flex justify-between">
          <div tw=""></div>
          <div tw="flex gap-4">
            <button type="button">
              <HiOutlineHeart tw="w-6 h-6 stroke-gray-400 hover:stroke-red-400"/>
            </button>
            <button type="button">
              <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400"/>
            </button>
            <button type="button" onClick={handleCommentDetailMenu}>
              <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
            </button>
          </div>
        </div>
      </div>
      <div tw="">
      {replies.length > 0 && (
        <div tw="">
          {replies.map(reply => (
            <CommentItem
              comment={reply} 
              key={reply.id} 
              replies={[]}
              parentId={comment.id}
            />
          ))}
        </div>
      )}
      </div>            
    </div>
  )
}

export default CommentItem;