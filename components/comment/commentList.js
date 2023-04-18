import { useState } from "react";
import CommentItem from "./commentItem";
import CommentForm from "./commentForm";
import ReplyComment from "./replyComment";
import { HiOutlineChatBubbleOvalLeft, HiOutlineEllipsisHorizontal, HiOutlineHeart } from "react-icons/hi2";
import Avatar from "../core/avatar/Avatar";

const CommentList = ({comment}) => {

  return (
     <div tw="">
          {parentComment.map((comment, id) => (
          <div tw="flex px-2 py-4 border-b border-gray-200" key={comment.id}>
            <div tw="mr-2">
              <Avatar size="sm" alt="avatar" src={comment.profile_img} width={32} height={32}/>
            </div>
            <div tw="flex flex-col w-full">
              <div tw="mb-2 overflow-hidden">
                <div tw="max-w-full align-top inline-block">
                  <h3 tw="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">{comment.nickName}</h3>
                </div>
              </div>
              <div>
                <div>
                  {comment.content}
                </div>
                <div tw="hidden">
                  더보기
                </div>
                <div tw="mt-4 text-right text-sm text-gray-400">
                  {comment.created_at}
                </div>              
              </div>
              <div tw="mt-4 flex justify-end">
                <div tw="flex gap-4">
                  <button type="button" tw="flex items-center" onClick={() => {
                  setIsLike({ ...isLike, [comment.id]: !isLike[comment.id] });
                }}>
                    <HiOutlineHeart tw="w-6 h-6 stroke-gray-400 hover:stroke-red-400" />
                    {comment.likes > 0 ? <span tw="text-gray-400 ml-2">{comment.likes}</span> : null}
                  </button>
                  <button type="button" tw="flex items-center" onClick={handleReplyOpen(comment.id)}>
                    <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400" />
                    {comment.replies?.length > 0 ? <span tw="text-gray-400 ml-2">{comment.replies.length}</span> : null}
                  </button>
                  <button type="button">
                    <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
                  </button>
                </div>
              </div>
              {comment.replies && comment.replies.length > 0 && isReplyOpen ?             
              <div tw="font-semibold mb-4 cursor-pointer" onClick={handleReplyOpen(comment.id)}>
                {comment.replies?.length > 0 ? "접기" : null}
              </div> 
              :
              <div tw="font-semibold mb-4 cursor-pointer" onClick={handleReplyOpen(comment.id)}>
                {comment.replies?.length > 0 ? comment.replies.length+"개의 댓글 더 보기" : null}
              </div>
              }
              {<div tw="mb-4">
                {isReplyOpen(comment.id) && <CommentForm id={comment.id}/>}
                {isReplyOpen(comment.id) && comment.replies?.length > 0 && comment.replies.map((comment, id) => (
                <ReplyComment key={comment.id} comment={comment} isReplyOpen={isReplyOpen(comment)} />
              ))}
              </div>}
            </div>
          </div>))}
    </div>
  )
}

export default CommentList;