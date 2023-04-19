import { HiOutlineChatBubbleOvalLeft, HiOutlineEllipsisHorizontal, HiOutlineHeart } from "react-icons/hi2";
import Avatar from "../../components/core/avatar/Avatar";
import tw from 'twin.macro';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CommentForm from "../../components/comment/commentForm";
import ReplyComment from "../../components/comment/replyComment";

const CommentList = () => {

  const dummyComment = [{
    id: 1,
    parent_id: null,
    user_id: 1,
    nickName: "John Doe",
    profile_img:"https://i.pravatar.cc/150?img=2",
    content: "판타지 소설을 좋아해서 이 소설을 읽게 되었는데, 소설의 세계관과 이야기가 너무 멋져서 한번 읽고 나서도 여러 번 다시 읽고 있습니다. 이 소설에서는 매우 독특하고 흥미로운 등장인물들이 등장하는데, 그들의 이야기들이 다양하고 깊이있게 표현되어 있습니다. 또한, 작가가 그들의 상황과 감정을 매우 자세하게 묘사해주어서 독자로서의 공감도가 높아져서 더욱 이 소설의 세계에 빠져들게 되었습니다. 이 소설을 읽으면서, 전혀 다른 세계에 감탄할 수 있게 되었고, 이 소설이 마음에 들어서 같은 작가의 다른 작품도 읽어보려고 합니다.",
    created_at: "2023-04-10",
    likes: 3,
    replies: null
  },
  {
    id: 2,
    parent_id: null,
    user_id: 2,
    nickName: "Jane Smith",
    profile_img: "https://i.pravatar.cc/150?img=3",
    content: "마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
    created_at: "2023-04-13",
    likes: 0,
    replies:[
      {
        id: 1,
        parent_id: 2,
        user_id: 2,
        nickName: "Jane Smith",
        profile_img: "https://i.pravatar.cc/150?img=3",
        content: "마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
        created_at: "2023-04-13",
        likes: 12
      },
      {
        id: 2,
        parent_id: 2,
        user_id: 2,
        nickName: "Jane Smith",
        profile_img: "https://i.pravatar.cc/150?img=3",
        content: "마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
        created_at: "2023-04-13",
        likes: 1
      }
    ]
  },
  {
    id: 3,
    parent_id: null,
    user_id: 2,
    nickName: "Jane Smith",
    profile_img: "https://i.pravatar.cc/150?img=3",
    content: "마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
    created_at: "2023-04-13",
    likes: 2,
    replies:[
      {
        id: 1,
        parent_id: 3,
        user_id: 2,
        nickName: "Jane Smith",
        profile_img: "https://i.pravatar.cc/150?img=3",
        content: "마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
        created_at: "2023-04-13",
        likes: 0
      }
    ]
  },
  ]

  

  const [isMoreText, setIsMoreText] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);


  const parentComment = dummyComment.filter(comment => comment.parent_id === null);
  const childComment = (parent_id) => {
    const childComments = dummyComment.filter(comment => comment.parent_id === parent_id);   
    return childComments;
  }

  // const [isReplyOpen, setIsReplyOpen] = useState(-1);

  // // 댓글 열기
  // const handleReplyOpen = (id) => {
  //   if (isReplyOpen === id) {
  //     setIsReplyOpen(-1);
  //   } else {
  //     setIsReplyOpen(id);
  //   }
  // }
  
  // useEffect(() => {
  //   console.log(isReplyOpen);
  // }, [isReplyOpen]);

// 댓글 열기
const [isReplyOpen, setIsReplyOpen] = useState(null);

const handleReplyOpen = (id) => {
  setIsReplyOpen((prevId) => (prevId === id ? null : id));
};

  //댓글 팝오버 (수정, 삭제)


  //댓글 전송
  const handleCommentSubmit = () => {

  }


  //좋아요순 최신순 정렬

  return (
    <div tw="max-w-screen-lg py-4 mx-auto">
      
      <div tw="mt-4 pt-4 pb-2 border-t border-gray-400">
        <h3 tw="font-bold text-xl">댓글 목록</h3>
        <div tw="flex gap-6 py-4">
          <a tw="font-bold">좋아요</a>
          <a tw="">최신순</a>
        </div>
        <div tw="">
          {parentComment.map((comment) => (
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
                  <button type="button" tw="flex items-center" onClick={() => {setIsLike(!isLike);}}>
                    <HiOutlineHeart tw="w-6 h-6 stroke-gray-400 hover:stroke-red-400" />
                    {comment.likes > 0 ? <span tw="text-gray-400 ml-2">{comment.likes}</span> : null}
                  </button>
                  <button type="button" tw="flex items-center" onClick={()=> handleReplyOpen(comment.id)}>
                    <HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400 hover:stroke-blue-400" />
                    {comment.replies?.length > 0 ? <span tw="text-gray-400 ml-2">{comment.replies.length}</span> : null}
                  </button>
                  <button type="button">
                    <HiOutlineEllipsisHorizontal tw="w-6 h-6 stroke-gray-400"/>
                  </button>
                </div>
              </div>
              {comment.replies && comment.replies.length > 0 && isReplyOpen === comment.id ?             
              <div tw="font-semibold mb-4 cursor-pointer" onClick={()=> handleReplyOpen(comment.id)}>
                {comment.replies?.length > 0 ? "접기" : null}
              </div> 
              :
              <div tw="font-semibold mb-4 cursor-pointer" onClick={()=> handleReplyOpen(comment.id)}>
                {comment.replies?.length > 0 ? comment.replies.length+"개의 댓글 더 보기" : null}
              </div>
              }
              {isReplyOpen === comment.id && 
              (<div tw="mb-4">
                <CommentForm id={comment.id}/>
                {comment.replies?.length > 0 && childComment(comment.id).map((reply) => (
                <ReplyComment key={reply.id} comment={reply} />
              ))}             
              </div>)}
            </div>
          </div>))}
        </div>
      </div>
    </div>
  )
}

export default CommentList;