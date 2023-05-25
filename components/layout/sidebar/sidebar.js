import tw from 'twin.macro'
import Avatar from '../../core/avatar/Avatar';
import { HiXMark } from 'react-icons/hi2';
import { faker } from '@faker-js/faker'

const Sidebar = (props) => {

  const {isOpen, onClick} = props;

  faker.seed(42);

  const dummyData = {
    avatar: faker.image.avatar(),
    userName: faker.person.firstName(),
    email: faker.internet.email()

  }

  const loginMenu = {};

  const anonymousMenu = {};

  return (
    <aside tw="absolute w-[300px] lg:hidden h-screen bg-gray-50 top-0 z-50 duration-300 transition-all ease-in-out shadow" css={[isOpen ? tw``: tw`-translate-x-[300px]`]}>
      <nav tw="">
        <div tw="flex justify-end border-b border-gray-400 p-3">
          <button type="button" onClick={onClick}><HiXMark tw="w-8 h-8"/></button>
        </div>
        <div tw="flex items-center p-3">
            <Avatar size="md" alt="avatar" src={dummyData.avatar} width={48} height={48}/>
            <div tw="ml-4">
              <p tw="text-xl font-bold">{dummyData.userName} 님</p>
              <span tw="text-gray-400">{dummyData.email}</span>
            </div>
        </div>
        <div tw="flex flex-col p-3">
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">알림</a>
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">내 서재</a>
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">작품 쓰기</a>
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">스토리룸</a>
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">이벤트</a>
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">고객센터</a>
          <a tw="px-4 py-2 w-full hover:bg-gray-100 font-semibold text-lg">공지사항</a>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar;