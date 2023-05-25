import { useEffect, useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import tw from 'twin.macro'

/**
 * @description
 * TagsInput + dropdown select 컴포넌트
 * Input에 focus가 주어지면 dropdown select를 펼친다
 * 직접 태그를 입력할 수도 있고
 * dropdown 에서 태그를 선택할 수도 있다
 * 
 * 개선점
 * 1. 최소 태그 갯수와 최대 태그 갯수를 고정해야 한다
 * 2. 중복 태그에 대한 에러메세지 추가
 * 3. 선택한 태그는 dropdown 리스트에서 제거, 태그 삭제시 다시 복구
 * 4. 오류 방지를 위해 특수문자를 패턴으로 제거
 */

const TagsInput = (props) => {

  //const { value, onChange } = props;

  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");

  const [focus, setFocus] = useState(false);

  const onFocus = () => {
    setFocus(true)
  }
  
  const onBlur = () => {
    setFocus(false);
  }

  const whitelist = ['판타지', '현대판타지', '로맨스', '로맨스판타지', 'BL', 'GL', '호러'];
  
  
  const handleSelect = (e) => {
    const { innerText } = e.target;
    
    setTags([...tags, innerText]);
  };

  const removeTag = (i) => {
    const clonetags = tags.slice();
    clonetags.splice(i, 1);
    setTags(clonetags);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && tag.trim() !== '') {
      e.preventDefault();
      
      setTags([...tags, tag.trim()]);
      setTag('');
    }

    if (e.key === 'Backspace' && tag.trim() === '') {
      e.preventDefault();
      setTags(tags.slice(0, tags.length - 1));
    }
  }

  const handleChange = (e) => {
    setTag(e.target.value);
  };

  useEffect(()=>{
    console.log(tags)
  },[tags])

  return (
    <>
      <div 
      tw="relative flex flex-wrap w-full px-2 py-2 rounded-md border border-gray-300 shadow shadow-gray-100 placeholder:text-gray-400 overflow-hidden focus-within:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])"
      
      >
        <div tw="relative flex flex-wrap gap-2">
        {tags && tags.map((tag, i) => (
          <div 
            key={i}
            tw="flex items-center gap-4 bg-gray-200 text-gray-500 text-sm px-2 py-2 rounded-md shadow shadow-gray-100 hover:(bg-red-200 border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])"
          >
            <span tw="pl-2">{tag}</span>
            <button 
              tw=""
              type="button"
              onClick={() => removeTag(i)}
            >
              <HiXMark tw="w-6 h-6 stroke-gray-300"/>
            </button>
          </div>
        ))}
        <input
          tw="w-64 border-none focus:(outline-none border-transparent ring-transparent)"
          type="text"
          value={tag}
          placeholder="태그를 입력해주세요(2개 이상)"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={onFocus}
          onBlur={onBlur}
          pattern=""
          required
        />
        </div>
      </div>
      {
      <div tw="relative w-full z-10">  
        <div
          tw="absolute w-full bg-white border border-gray-300 rounded-lg overflow-hidden"
          css={focus ? null : tw`invisible duration-150`}
        >
          <ul tw="w-full h-72 overflow-y-auto overflow-x-hidden">
            {whitelist.map((whitelist, i) => (
              <div 
                tw="w-full hover:bg-[#E6CEA0] p-2" 
                key={i} 
                onClick={(e) => handleSelect(e)} 
                data-value={whitelist}
              >
                {whitelist}
              </div>
            ))}           
          </ul>
        </div>
      </div> 
      } 
    </>
  )
}

export default TagsInput;