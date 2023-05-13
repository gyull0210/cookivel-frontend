import { useEffect, useRef, useState } from 'react';
import { HiArrowLeft, HiBookmark, HiChevronLeft, HiChevronRight, HiCog8Tooth, HiHeart, HiOutlineBars3, HiOutlineBell, HiOutlineBookmark, HiOutlineChatBubbleOvalLeft, HiOutlineCog8Tooth, HiOutlineEllipsisHorizontal, HiOutlineHeart, HiOutlineMinus, HiOutlinePlus, HiOutlineShare, HiOutlineXMark } from 'react-icons/hi2';
import tw from 'twin.macro'
import Avatar from '../../components/core/avatar/Avatar';
import Toast from '../../components/overlay/toast/Toast';
import { Slide,ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Portal } from './portal';
import { ThemeProvider, css } from '@emotion/react';
import CommentList from './commentList';
import ViewSettingModal from './viewSettingModal';
import ChapterList from './chapterList';
import ShareModal from './shareModal';

const ViewTest = () => {

  const dummyData = 
  {title:"제목입니다", 
  subTitle:"1화 - 세부제목인데 조금 깁니다 더 길 수도 있습니다", 
  content:["토마스는 창밖을 내다보며 깊은 한숨을 내쉬었다. 이제는 정말로 모든 게 끝났다. 그동안 끊임없이 연구해온 내용이 실패로 돌아간 것이다. 그러나 그는 이런 낙오자같은 자신을 비난하지 않았다. 대신에 내일은 더 나은 결과를 얻기 위해 더 열심히 노력해야 한다고 다짐했다.\r\n토마스는 미래를 위한 대비책을 세우고자 했다. 그래서 그는 자신이 개발한 인공지능 로봇을 이용해 새로운 기술을 개발하기로 결심했다. 그는 이로 인해 자신의 연구에 대한 새로운 방향을 찾을 수 있을 것이라고 믿었다. \r\n 그러나 그의 계획에는 예기치 않은 문제가 있었다. 그는 자신의 인공지능 로봇이 다른 개발자들에게도 공개될 수 있다는 것을 간과했다. 그래서 그의 로봇은 다른 사람들의 손에 넘어가면서 예상치 못한 결과를 초래했다.\r\n 그리고 그 결과는 인류의 운명을 좌우하는 것일 수도 있었다.\r\n 토마스는 이를 바로잡기 위해 본격적인 연구를 시작했다. 그는 자신의 로봇이 다른 사람들의 손에 넘어가는 것을 막기 위해 많은 시간과 노력을 기울였다. 그리고 그는 결국 성공했다.\r\n그의 로봇은 세상을 변화시키는 대단한 기술로 자리잡았다. 하지만 그의 성공은 이제 그의 손에서 벗어나게 된다. 그리고 토마스는 또다시 자신이 어디로 가야 할지 모르게 되었다.\r\n하지만 그는 이전보다는 자신감을 가지고 이를 받아들일 수 있었다. 그는 이제 새로운 도전에 대한 강한 의지를 가지고 있었다. 그리고 그는 또 다른 혁신을 이루어낼 수 있을 것이라는 확신을 가졌다. 토마스는 창밖을 내다보며 깊은 한숨을 내쉬었다. 이제는 정말로 모든 게 끝났다. 그동안 끊임없이 연구해온 내용이 실패로 돌아간 것이다. 그러나 그는 이런 낙오자같은 자신을 비난하지 않았다. 대신에 내일은 더 나은 결과를 얻기 위해 더 열심히 노력해야 한다고 다짐했다. \r\n토마스는 미래를 위한 대비책을 세우고자 했다. 그래서 그는 자신이 개발한 인공지능 로봇을 이용해 새로운 기술을 개발하기로 결심했다. 그는 이로 인해 자신의 연구에 대한 새로운 방향을 찾을 수 있을 것이라고 믿었다. \r\n 그러나 그의 계획에는 예기치 않은 문제가 있었다. 그는 자신의 인공지능 로봇이 다른 개발자들에게도 공개될 수 있다는 것을 간과했다. 그래서 그의 로봇은 다른 사람들의 손에 넘어가면서 예상치 못한 결과를 초래했다.\r\n 그리고 그 결과는 인류의 운명을 좌우하는 것일 수도 있었다.\r\n 토마스는 이를 바로잡기 위해 본격적인 연구를 시작했다. 그는 자신의 로봇이 다른 사람들의 손에 넘어가는 것을 막기 위해 많은 시간과 노력을 기울였다. 그리고 그는 결국 성공했다.\r\n그의 로봇은 세상을 변화시키는 대단한 기술로 자리잡았다. 하지만 그의 성공은 이제 그의 손에서 벗어나게 된다. 그리고 토마스는 또다시 자신이 어디로 가야 할지 모르게 되었다.\r\n하지만 그는 이전보다는 자신감을 가지고 이를 받아들일 수 있었다. 그는 이제 새로운 도전에 대한 강한 의지를 가지고 있었다. 그리고 그는 또 다른 혁신을 이루어낼 수 있을 것이라는 확신을 가졌다. \r\n 토마스는 창밖을 내다보며 깊은 한숨을 내쉬었다. 이제는 정말로 모든 게 끝났다. 그동안 끊임없이 연구해온 내용이 실패로 돌아간 것이다. 그러나 그는 이런 낙오자같은 자신을 비난하지 않았다. 대신에 내일은 더 나은 결과를 얻기 위해 더 열심히 노력해야 한다고 다짐했다.\r\n토마스는 미래를 위한 대비책을 세우고자 했다. 그래서 그는 자신이 개발한 인공지능 로봇을 이용해 새로운 기술을 개발하기로 결심했다. 그는 이로 인해 자신의 연구에 대한 새로운 방향을 찾을 수 있을 것이라고 믿었다. \r\n 그러나 그의 계획에는 예기치 않은 문제가 있었다. 그는 자신의 인공지능 로봇이 다른 개발자들에게도 공개될 수 있다는 것을 간과했다. 그래서 그의 로봇은 다른 사람들의 손에 넘어가면서 예상치 못한 결과를 초래했다.\r\n 그리고 그 결과는 인류의 운명을 좌우하는 것일 수도 있었다.\r\n 토마스는 이를 바로잡기 위해 본격적인 연구를 시작했다. 그는 자신의 로봇이 다른 사람들의 손에 넘어가는 것을 막기 위해 많은 시간과 노력을 기울였다. 그리고 그는 결국 성공했다.\r\n그의 로봇은 세상을 변화시키는 대단한 기술로 자리잡았다. 하지만 그의 성공은 이제 그의 손에서 벗어나게 된다. 그리고 토마스는 또다시 자신이 어디로 가야 할지 모르게 되었다.\r\n하지만 그는 이전보다는 자신감을 가지고 이를 받아들일 수 있었다. 그는 이제 새로운 도전에 대한 강한 의지를 가지고 있었다. 그리고 그는 또 다른 혁신을 이루어낼 수 있을 것이라는 확신을 가졌다. 토마스는 창밖을 내다보며 깊은 한숨을 내쉬었다. 이제는 정말로 모든 게 끝났다. 그동안 끊임없이 연구해온 내용이 실패로 돌아간 것이다. 그러나 그는 이런 낙오자같은 자신을 비난하지 않았다. 대신에 내일은 더 나은 결과를 얻기 위해 더 열심히 노력해야 한다고 다짐했다. \r\n토마스는 미래를 위한 대비책을 세우고자 했다. 그래서 그는 자신이 개발한 인공지능 로봇을 이용해 새로운 기술을 개발하기로 결심했다. 그는 이로 인해 자신의 연구에 대한 새로운 방향을 찾을 수 있을 것이라고 믿었다. \r\n 그러나 그의 계획에는 예기치 않은 문제가 있었다. 그는 자신의 인공지능 로봇이 다른 개발자들에게도 공개될 수 있다는 것을 간과했다. 그래서 그의 로봇은 다른 사람들의 손에 넘어가면서 예상치 못한 결과를 초래했다.\r\n 그리고 그 결과는 인류의 운명을 좌우하는 것일 수도 있었다.\r\n 토마스는 이를 바로잡기 위해 본격적인 연구를 시작했다. 그는 자신의 로봇이 다른 사람들의 손에 넘어가는 것을 막기 위해 많은 시간과 노력을 기울였다. 그리고 그는 결국 성공했다.\r\n그의 로봇은 세상을 변화시키는 대단한 기술로 자리잡았다. 하지만 그의 성공은 이제 그의 손에서 벗어나게 된다. 그리고 토마스는 또다시 자신이 어디로 가야 할지 모르게 되었다.\r\n하지만 그는 이전보다는 자신감을 가지고 이를 받아들일 수 있었다. 그는 이제 새로운 도전에 대한 강한 의지를 가지고 있었다. 그리고 그는 또 다른 혁신을 이루어낼 수 있을 것이라는 확신을 가졌다."]
  }
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
      content: "1마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
      created_at: "2023-04-13",
      likes: 2,
      replies:[
        {
          id: 1,
          parent_id: 3,
          user_id: 2,
          nickName: "Jane Smith",
          profile_img: "https://i.pravatar.cc/150?img=3",
          content: "2마치 다른 세계에 들어간 것 같아요. 이 소설에서는 판타지 세계관이 상세하게 그려져 있고, 이야기 속에서 등장하는 마법, 요정, 용 등의 요소들이 매우 독특하고 흥미로웠습니다. 작가는 이러한 판타지 요소들을 잘 활용해서, 독자로 하여금 마치 이야기 속에 들어간 것 같은 느낌을 주었습니다.",
          created_at: "2023-04-13",
          likes: 0
        }
      ]
    },
    ]

  const parentComment = dummyComment.filter(comment => comment.parent_id === null);
  const childComment = (parent_id) => {
    const childComments = dummyComment.filter(comment => comment.parent_id === parent_id);
    return childComments;
  }

  const dummyChapters = [ 
    {
      chapter_id: 1,
      book_id:1,
      chapter_title:"임시 제목입니다"
    } 
  ]

  const [isClose, setIsClose] = useState(false);

  const [isAlert, setIsAlert] = useState(false);
  const [isShowToast, setIsShowToast] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);
  const [isCommentListOpen, setIsCommentListOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  const handleFavorite = () => {
    if(!isFavorite){
      setIsFavorite(!isFavorite)
      toast.success("선호작품에 등록되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    } else {
      setIsFavorite(false)
      toast.success("선호작품에서 삭제되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    }    
  }

  const handleBar = () => {
    setIsClose(!isClose);
    console.log(isClose)
  }

  const handleAlert = () => {
    if(!isAlert){
      setIsAlert(true)
      toast.success("구독 알림이 설정되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    }
    else {
      setIsAlert(false)
      toast.success("구독 알림이 취소되었습니다", {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar: true,
        autoClose: 2500
      })
    }
  }

  const handleChapterListOpen = () => {
    setIsCommentListOpen(false)
    setIsSettingOpen(false)
    setIsChapterListOpen(!isChapterListOpen)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen, "open")
  }

  const handleCommentListOpen = () => {
    setIsChapterListOpen(false)
    setIsSettingOpen(false)
    setIsCommentListOpen(!isCommentListOpen)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen, "open")
  }

  const handleShareOpen = () => {
    setIsShareOpen(!isShareOpen)
  }

  const handleSettingOpen = () => {
    setIsChapterListOpen(false)
    setIsCommentListOpen(false)
    setIsSettingOpen(!isSettingOpen)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen, "open")
  }

  const handleSidebar = () => {
    setIsChapterListOpen(false)
    setIsCommentListOpen(false)
    setIsSettingOpen(false)
    console.log(isChapterListOpen, isCommentListOpen, isSettingOpen, "open")
  }

  //뷰어 설정
  const [fontSize, setFontSize] = useState(1.25);
  const [themeName, setThemeName] = useState("light");

  const theme = {
    light: {
      bgColor: "#FFF",
      textColor: "#000",
      borderColor: "#e5e7eb"
    },
    dark: {
      bgColor: "#000",
      textColor: "#F6F6F6",
      borderColor: "#e5e7eb"
    },
    green: {
      bgColor: "#CCEDDB",
      textColor: "#000",
      borderColor: "#e5e7eb"
    },
  };

  const articleRef = useRef(null);

  const fontStyle = css`
  background-color:${theme[themeName].bgColor};
  font-size: ${fontSize}rem;
  color: ${theme[themeName].textColor};
  border-color: ${theme[themeName].borderColor};
  transition: color 0.4s, border-color 0.4s, background-color 0.4s;`;

  const [settingValue, setSettingValue] = useState(themeName, fontSize);

  const handleThemeChange = (themeName) => {
    setThemeName(themeName);
  };

  useEffect(() => {
    if (articleRef.current) {
      articleRef.current.style.fontSize = `${fontSize}rem`;
    }
  }, [fontSize, fontStyle]);

  const maxSize = 1.75;
  const minSize = 1;

  const decreaseFontSize = () => {
    if(fontSize > minSize){
      setFontSize((prevFontSize) => prevFontSize - 0.125);
    }
  };

  const increaseFontSize = () => {
    if(fontSize < maxSize){
      setFontSize((prevFontSize) =>  prevFontSize + 0.125);
    }   
  };
  
  const handleSettingSave = () => {
    const storedSetting = {themeName, fontSize};
    localStorage.setItem("viewerSetting", JSON.stringify(storedSetting));
    setSettingValue(storedSetting);
    setIsSettingOpen(false);
  };

  useEffect(() => {
    const storedSetting = JSON.parse(localStorage.getItem('viewerSetting'));
    if (storedSetting) {
      setSettingValue(storedSetting);
      setThemeName(storedSetting.themeName);
      setFontSize(storedSetting.fontSize)
    }
  }, []);

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <ThemeProvider theme={theme[themeName]}>
    <div css={[tw`relative`, fontStyle]}>
      <header css={[tw`flex justify-center fixed top-0 z-30 w-full border-b py-1.5 bg-white`, isClose ? tw`hidden`: tw`` ]}>
        <nav tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-between items-center overflow-hidden px-2.5 sm:px-4">
          <div tw="relative">
            <button type="button" tw="p-3" onClick={()=>history.go(-1)}>
              <HiArrowLeft tw="w-6 h-6 text-gray-400"/>
            </button>
          </div>
          <div tw="max-w-[280px] lg:max-w-lg relative">
            <div tw="max-w-full text-lg font-semibold truncate text-ellipsis overflow-hidden text-gray-400 whitespace-nowrap">{dummyData.title}</div>
          </div>
          <div tw="relative">
            <button type="button" tw="p-3" onClick={handleAlert}>
              <HiOutlineBell css={[tw`w-6 h-6 stroke-gray-400`, isAlert ? tw`fill-amber-200 stroke-amber-200 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`]}/>
            </button>
            <button type="button" tw="p-3" onClick={handleChapterListOpen}>
              <HiOutlineBars3 tw="w-6 h-6 stroke-gray-400"/>
            </button>
          </div>     
        </nav>
      </header>

      <main css={[tw`min-h-screen`]}>
        <div tw="flex min-h-screen">
          <div tw="w-[425px] md:w-[675px] lg:w-[800px] mx-auto" onClick={handleBar}>
            <section tw="relative">
              <div tw="pt-24 pb-16 px-6 sm:px-4 break-all h-screen overflow-y-scroll overscroll-none scrollbar-hide">
                <article ref={articleRef} css={[tw`whitespace-pre-line select-none`, fontStyle]}>
                  <h1 tw="max-w-full font-semibold text-center truncate text-ellipsis overflow-hidden whitespace-nowrap mb-16">{dummyData.subTitle}</h1>
                  {dummyData.content}
                </article>
                <div tw="w-full h-48 overflow-hidden"></div>
              </div>            
            </section>
          </div>
          {/* 회차목록 */}
          <aside css={[tw`fixed bg-white w-full h-full z-[60] top-0 border-l border-gray-200 shadow-sm`, isChapterListOpen ? tw``:tw`hidden`]}>
            <div tw="relative flex justify-center fixed w-full border-b py-1.5 bg-white">
              <div tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-between items-center overflow-hidden px-2.5 sm:px-4">
                <div tw="relative">
                  <button type="button" tw="p-3" onClick={handleSidebar}>
                    <HiArrowLeft tw="w-6 h-6 text-gray-400"/>
                  </button>
                </div>
                <div tw="max-w-[280px] lg:max-w-lg relative">
                  <div tw="max-w-full text-lg font-semibold truncate text-ellipsis overflow-hidden text-gray-400 whitespace-nowrap">회차 목록 </div>
                </div>
                <div tw="relative">
                  <button type="button" tw="p-3" onClick={handleAlert}>
                    <HiOutlineBell css={[tw`w-6 h-6 stroke-gray-400`, isAlert ? tw`fill-amber-200 stroke-amber-200 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`]}/>
                  </button>
                  <button type="button" tw="p-3" onClick={handleChapterListOpen}>
                    <HiOutlineBars3 tw="w-6 h-6 stroke-gray-400"/>
                  </button>
                </div>
              </div>
            </div>          
            <div tw="w-[425px] md:w-[675px] lg:w-[800px] h-screen overflow-y-scroll overscroll-none scrollbar-hide mx-auto px-8 sm:px-4 bg-white text-black">
              <ChapterList/>
            </div>
            <div tw="fixed flex justify-center items-center bottom-0 w-full py-4 bg-white border-t border-gray-200">        
              <div tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-around items-center px-2 sm:px-4">
                <button type="button" onClick={handleFavorite}>
                  <HiOutlineHeart css={[
                    tw`w-6 h-6 stroke-gray-400`, 
                    isFavorite ? tw`stroke-red-400 fill-red-400 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`
                    ]}
                  />
                </button>   
                <button type="button" onClick={handleCommentListOpen}><HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400"/></button>
                <button type="button" onClick={handleShareOpen}><HiOutlineShare tw="w-6 h-6 stroke-gray-400"/></button>
                <button type="button" onClick={handleSettingOpen}><HiOutlineCog8Tooth tw="w-6 h-6  stroke-gray-400"/></button>
              </div>           
             </div>
          </aside> 
          {/* 댓글 */}
          <aside css={[tw`fixed bg-white w-full h-full z-[60] right-0 border-l border-gray-200 shadow-sm`, isCommentListOpen ? tw``:tw`hidden`]}>
            <div tw="relative flex justify-center w-full border-b py-1.5 bg-white">
              <div tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-between items-center overflow-hidden px-2.5 sm:px-4">
                <div tw="relative">
                  <button type="button" tw="p-3" onClick={handleSidebar}>
                    <HiArrowLeft tw="w-6 h-6 text-gray-400"/>
                  </button>
                </div>
                <div tw="max-w-[280px] lg:max-w-lg relative">
                  <div tw="max-w-full text-lg font-semibold truncate text-ellipsis overflow-hidden text-gray-400 whitespace-nowrap">댓글 {dummyComment?.length}</div>
                </div>
                <div tw="relative">
                  <button type="button" tw="p-3" onClick={handleAlert}>
                    <HiOutlineBell css={[tw`w-6 h-6 stroke-gray-400`, isAlert ? tw`fill-amber-200 stroke-amber-200 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`]}/>
                  </button>
                  <button type="button" tw="p-3" onClick={handleChapterListOpen}>
                    <HiOutlineBars3 tw="w-6 h-6 stroke-gray-400"/>
                  </button>
                </div> 
              </div>
            </div>
            <div tw="max-w-screen-lg mx-auto px-8 sm:px-4 bg-white text-black">           
              <div tw="w-[425px] md:w-[675px] lg:w-[800px] h-screen overflow-y-scroll overscroll-none scrollbar-hide px-2.5 sm:px-4 mx-auto  py-14">
                <CommentList/>
              </div>
            </div>
            <div tw="fixed flex justify-center items-center bottom-0 w-full py-4 bg-white border-t border-gray-200">        
              <div tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-around items-center px-2 sm:px-4">
                <button type="button" onClick={handleFavorite}>
                  <HiOutlineHeart css={[
                    tw`w-6 h-6 stroke-gray-400`, 
                    isFavorite ? tw`stroke-red-400 fill-red-400 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`
                    ]}
                  />
                </button>   
                <button type="button" onClick={handleCommentListOpen}><HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400"/></button>
                <button type="button" onClick={handleShareOpen}><HiOutlineShare tw="w-6 h-6 stroke-gray-400"/></button>
                <button type="button" onClick={handleSettingOpen}><HiOutlineCog8Tooth tw="w-6 h-6  stroke-gray-400"/></button>
              </div>           
             </div>
          </aside>
          {/* 공유하기 */}
          <div css={[tw`fixed w-full h-full top-0 left-0 z-10`, isShareOpen ? tw`` : tw`hidden`]}>
            <ShareModal 
            isOpen={isShareOpen}
            onClose={()=> setIsShareOpen}
            onClick={handleShareOpen}
            />
          </div>
          {/* 설정 */}
          <div css={[tw`fixed w-full h-full top-0 left-0 z-10`, isSettingOpen ? tw`` : tw`hidden`]}>
            <ViewSettingModal 
              isOpen={isSettingOpen} 
              onClose={()=> setIsSettingOpen}
              lightTheme={() => handleThemeChange("light")}
              darkTheme={() => handleThemeChange("dark")}
              greenTheme={() => handleThemeChange("green")}
              decreaseFontSize={decreaseFontSize}
              increaseFontSize={increaseFontSize}
              fontStyle={fontStyle}          
              onClick={handleSettingSave}
            />
          </div>
        </div>
      </main>

      <footer css={[tw`flex flex-col justify-center fixed bottom-0 z-30 w-full border-t bg-white`, isClose ? tw`hidden`: tw`` ]}>
        <div tw="flex justify-center w-full border-b py-2">
          <div tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-between px-2 sm:px-4">
            <div tw="text-lg font-semibold text-gray-400">
            {dummyData.title+` 1화`}
            </div>
            <div tw="flex justify-end items-center gap-6">
              <button tw="flex items-center">
                <HiChevronLeft tw="w-6 h-6 text-gray-400"/>
                <span tw="text-lg text-gray-400">이전</span>
              </button>
              <button tw="flex items-center">
                <span tw="text-lg text-gray-400">다음</span>
                <HiChevronRight tw="w-6 h-6 text-gray-400"/>
              </button>
            </div>
          </div>          
        </div>
        <div tw="flex justify-center items-center w-full py-4">        
          <div tw="w-[425px] md:w-[675px] lg:w-[800px] flex justify-around items-center px-2 sm:px-4">
            <button type="button" onClick={handleFavorite}>
              <HiOutlineHeart css={[
                tw`w-6 h-6 stroke-gray-400`, 
                isFavorite ? tw`stroke-red-400 fill-red-400 active:scale-50 duration-300 ease-in-out` : tw`active:scale-50 duration-300 ease-in-out`
                ]}
              />
            </button>   
            <button type="button" onClick={handleCommentListOpen}><HiOutlineChatBubbleOvalLeft tw="w-6 h-6 stroke-gray-400"/></button>
            <button type="button" onClick={handleShareOpen}><HiOutlineShare tw="w-6 h-6 stroke-gray-400"/></button>
            <button type="button" onClick={handleSettingOpen}><HiOutlineCog8Tooth tw="w-6 h-6  stroke-gray-400"/></button>
          </div>           
        </div>
      </footer>
      <ToastContainer transition={Slide}/>    
    </div>
    </ThemeProvider>
  )
}

export default ViewTest;