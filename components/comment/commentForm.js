import tw from 'twin.macro'
import Avatar from '../core/avatar/Avatar';

const CommentForm = ({key}) => {

  return (
    <div tw="flex flex-col p-4 border rounded-lg" key={key}>
      <div tw="flex items-center mb-4">
        <Avatar size="sm" alt="avatar" src={"https://api.lorem.space/image/face?w=128&h=128&hash=BDC01094"} width={32} height={32}/>
        <div tw="ml-2 overflow-hidden">
          <div tw="max-w-full align-top inline-block">
            <h3 tw="text-lg font-semibold overflow-hidden whitespace-nowrap text-ellipsis">익명의유저닉네임</h3>
          </div>
        </div>
      </div>
      <textarea tw="h-32 border border-gray-300 rounded-lg" placeholder="내용을 입력하세요"></textarea>
      <div tw="flex justify-end mt-4">
        <button tw="w-full px-6 py-3 rounded-lg bg-sky-400 text-white hover:bg-sky-500 active:bg-sky-600">등록</button>
      </div>
    </div>
  )
}

export default CommentForm;
