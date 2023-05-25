import tw from 'twin.macro'
import StoryItem from './storyItem';
import { useState } from 'react';


const StoryList = (props) => {

  const {offset, limit, stories} = props;

  return (
    <div tw="border-t border-gray-200">
    {stories.slice(offset, offset + limit).map((story, i) => (
      <StoryItem key={i} story={story}/>
    ))}
    </div>
  )
}

export default StoryList;