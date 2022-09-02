import { useState } from 'react'
import { HiX } from 'react-icons/hi'

/** 
 * 
 * @version 1.0.0
 * @file 카테고리 구분을 위해 해시태그를 입력하는 Input
*/

export default function TagsInput(){
  const [tags, setTags] = useState([])

  function handleKeyDown(e){
    if(tags.length < 0 || tags.length > 10) { 
      alert("태그는 최대 10개까지 등록가능합니다.")
    } else {
      if(e.key !== 'Enter') return
      const value = e.target.value
      if(!value.trim()) return
      setTags([...tags, value])
      e.target.value=""
    }


  }

  function removeTag(index){
    setTags(tags.filter((el, i) => i !== index))
  }

  return (
    <div className="relative input input-bordered h-auto">
      {tags.map((tag, index) => (
      <div className="inline-flex items-center text-black bg-base-200 hover:bg-base-300 rounded-lg px-2 py-1 m-2 border-none top-0 left-0" key={index}>
        <span className="text-base">{tag}</span>
        <span className="text-lg text-gray-600" onClick={()=> removeTag(index)}><HiX/></span>
      </div>  
      ))}  
      <input id="tag" type="text" placeholder="태그를 입력해주세요" className="w-full input focus:outline-none" onKeyDown={handleKeyDown}/>
    </div>
  )
}