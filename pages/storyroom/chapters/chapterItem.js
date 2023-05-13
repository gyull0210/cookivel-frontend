import Link from 'next/link';
import { router } from 'next/router';
import { HiOutlineEye, HiOutlinePencilSquare, HiOutlineTrash } from 'react-icons/hi2';
import tw from 'twin.macro';


const ChapterItem = (props) => {

  const { chapter, id, onDelete } = props;

  return (
    <div tw="flex justify-between items-center w-full border rounded px-4 py-2 shadow hover:(border-l-4 border-l-amber-400) duration-200">
      <div tw="flex items-center gap-4">
        <div tw="text-lg">{id}</div>
        <Link href={`/storyroom/chapters`} tw="max-w-[200px] lg:max-w-[400px] block text-lg truncate">{chapter.title}</Link>
      </div>
      <div tw="relative flex items-center">
        <button tw="p-3 rounded-full hover:bg-gray-100" onClick={() => router.push("/storyroom/chapters/createChapter")}>
          <HiOutlineEye tw="w-6 h-6 stroke-gray-400 hover:stroke-sky-400"/>
        </button>
        <button tw="p-3 rounded-full hover:bg-gray-100" onClick={() => router.push("/storyroom/chapters/createChapter")}>
          <HiOutlinePencilSquare tw="w-6 h-6 stroke-gray-400 hover:stroke-green-400"/>
        </button>
        <button tw="p-3 rounded-full hover:bg-gray-100" onClick={() => onDelete}>
          <HiOutlineTrash tw="w-6 h-6 stroke-gray-400 hover:stroke-red-400"/>
        </button>
      </div>
    </div>
  )
}

export default ChapterItem;