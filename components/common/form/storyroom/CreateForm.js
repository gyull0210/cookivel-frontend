import { BsCardImage } from 'react-icons/bs'
import { HiX } from 'react-icons/hi'
import TagsInput from '../../input/TagsInput'
export default function CreateForm(){

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <form className="" onSubmit={handleSubmit}>
      <div className="max-w-[800px] flex flex-col lg:flex-row justify-between mx-2">
          <div className="mt-6 mr-12">
            <button 
            className="flex flex-col items-center place-content-center 
            w-[168px] h-[224px] bg-base-200 active:bg-base-300 text-gray-400 rounded-lg" htmlFor="cover">
              <span className="text-4xl mb-2"><BsCardImage /></span>
              <span className="text-xl">표지 이미지</span>
            </button>
            <input id="cover" type="file" className="hidden"/>
          </div>
          <div className="flex flex-col">         
                  <div className="mb-4">
                    <label className="block text-lg" htmlFor="title">작품 제목<span className="ml-2 text-base text-red-400">(필수)</span></label>
                    <input id="title" type="text" placeholder="제목은 최대 20자 이내로 입력해주세요" className="input input-bordered w-full" max="20" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg" htmlFor="intro">작품 소개<span className="ml-2 text-base text-red-400">(필수)</span></label>
                    <textarea id="intro" className="w-full textarea textarea-bordered" placeholder="작품 소개는 최대 5000자까지 입력할 수 있습니다"></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="text-lg">작품 장르<span className="ml-2 text-base text-red-400">(필수)</span></label>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="form-control">
                        <label className="label cursor-pointer">                     
                        <input type="radio" className="radio mr-2" name="genre" />
                          <span className="label-text">판타지</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                     
                        <input type="radio" className="radio mr-2" name="genre"  />
                          <span className="label-text">현대판타지</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                     
                        <input type="radio" className="radio mr-2" name="genre" />
                          <span className="label-text">로맨스</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                     
                        <input type="radio" className="radio mr-2" name="genre" />
                          <span className="label-text">로맨스판타지</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                     
                        <input type="radio" className="radio mr-2" name="genre" />
                          <span className="label-text">BL</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                     
                        <input type="radio" className="radio mr-2" name="genre" />
                          <span className="label-text">GL</span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg">연재 종류<span className="ml-2 text-base text-red-400">(필수)</span></label>
                    <div className="flex items-center gap-4">
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="writetype" className="radio mr-2" />
                          <span className="label-text">자유연재</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="writetype" className="radio mr-2" />
                          <span className="label-text">작가연재</span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-lg">연재 상태<span className="ml-2 text-base text-red-400">(필수)</span></label>
                    <div className="flex items-center gap-4">
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="state" className="radio mr-2" />
                          <span className="label-text">연재중</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="state" className="radio mr-2" />
                          <span className="label-text">연재중단</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="state" className="radio mr-2" />
                          <span className="label-text">완결</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="state" className="radio mr-2" />
                          <span className="label-text">단편</span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-10">
                    <label className="block text-lg">공개 여부<span className="ml-2 text-base text-red-400">(필수)</span></label>
                    <div className="flex items-center gap-4">
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="hidden" className="radio mr-2" />
                          <span className="label-text">공개</span> 
                        </label>
                      </div>
                      <div className="form-control">
                        <label className="label cursor-pointer">                          
                          <input type="radio" name="hidden" className="radio mr-2" />
                          <span className="label-text">비공개</span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label className="block text-lg">
                      해시태그
                      <span className="ml-2 text-base text-red-400">(필수)</span>
                    </label>
                    <TagsInput/>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <button className="btn btn-outline" type="button">취소</button>
                      <button className="btn" type="submit">작품 등록</button>
                    </div>
                  </div>              
                </div> 
              </div>
            </form>
  )
}