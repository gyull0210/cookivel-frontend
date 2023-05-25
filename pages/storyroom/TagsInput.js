import { useEffect, useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import tw from 'twin.macro'

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
    //setTag('');
  };

  const addTag = (e) => {
    setTag(e.target.value);
  }

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
      tw="flex flex-wrap w-full px-2 py-2 rounded-md border border-gray-300 shadow shadow-gray-100 placeholder:text-gray-400 overflow-hidden focus-within:(border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])"
      
      >
        <div tw="relative flex flex-wrap gap-2">
        {tags && tags.map((tag, i) => (
          <div 
            key={i}
            tw="flex items-center gap-4 bg-gray-200 text-gray-500 text-sm px-2 py-2 rounded-md shadow shadow-gray-100 hover:(bg-red-200 border-gray-500 outline-none border-transparent ring-2 ring-[#E6CEA0])"
          >
            {tag}
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
        />
        </div>
      </div>
      {   
        <div
          tw="w-full border border-gray-300 rounded-lg overflow-hidden"
          css={focus ? null : tw`h-[-9999px]`}
        >
          <ul tw="w-full">
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
      } 
    </>
  )
}

export default TagsInput;