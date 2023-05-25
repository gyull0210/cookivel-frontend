import tw from 'twin.macro'
import { faker } from '@faker-js/faker/locale/ko'
/**
 * 구독은 내 서재에 책을 담는 것
 * 알람설정은 구독한 책 중에 업데이트 시 알람을 띄울 것을 선택하는 것
 * 읽은 작품은 내가 읽은 책을 히스토리로 남긴 것
 * 
 * 구독 컴포넌트는 책 아이템 컴포넌트 또는 스토리 컴포넌트와 유사
 */
const Bookshelf = () => {

  const subscribe = {
    bookTitle: faker.lorem.lines(1),
    writer: faker.person.fullName(),
    description: faker.lorem.lines(3),
    updateDate: 0000-00-00
  }

  return (
    <>
      <main>
        <section>
          <div tw="flex">
            <Link href="/">구독</Link>
            <Link href="/">읽은 작품</Link>
          </div>

        </section>
      </main>
    </>
  )
}

export default Bookshelf;