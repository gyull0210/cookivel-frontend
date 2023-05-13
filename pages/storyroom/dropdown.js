import { Menu } from "@headlessui/react";
import tw from 'twin.macro'
import jsx from '@emotion/react'
import { faker } from "@faker-js/faker";
import Image from "next/image";

function Dropdown() {
  return (
    <Menu>
      <Menu.Button>
        
        <Image tw="rounded-full" src={faker.image.avatar()} width={32} height={32} alt="avatar"/>
      </Menu.Button>
      <Menu.Items tw="flex flex-col shadow rounded-lg duration-200 bg-white overflow-hidden">
        <Menu.Item>
          {({ active }) => (
            <a
              tw="px-4 py-2"
              css={active && tw`bg-gray-200`}
              href="/account-settings"
            >
              알림
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              tw="px-4 py-2"
              css={active && tw`bg-gray-200`}
              href="/account-settings"
            >
              스토리룸
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              tw="px-4 py-2"
              css={active && tw`bg-gray-200`}
              href="/account-settings"
            >
              내 서재
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              tw="px-4 py-2"
              css={active && tw`bg-gray-200`}
              href="/account-settings"
            >
              이벤트
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              tw="px-4 py-2"
              css={active && tw`bg-gray-200`}
              href="/account-settings"
            >
              공지사항
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              tw="px-4 py-2"
              css={active && tw`bg-gray-200`}
              href="/logout"
            >
              로그아웃
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default Dropdown