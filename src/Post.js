import React, { forwardRef } from 'react'
import './Post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleSharpIcon from '@mui/icons-material/ChatBubbleSharp';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import PublishSharpIcon from '@mui/icons-material/PublishSharp';

//declare your functions below



const Post = forwardRef (({
    displayName,
    username,
    verified,
    text,
    image,
    avatar

}, ref) => {
  return <div className='post' ref={ref}>
    <div className='post_avatar'>
        <img src={avatar} />

        </div>
        <div className='post__body'>
            <div className='post__header'>
               <div className='post__headerText'>
                <h4>{displayName}{" "}
                    <span className='post__headerSpecial'>
                   {verified && <VerifiedIcon className='post__badge'/>}
                    @{username}</span>
                </h4>
                </div> 
                <div className='post__headerDescription'>
                    <p>
                       {text}
                    </p>
                </div>
            </div>
            <img src={image} alt='a dummy image' />
            <div className='post__footer'>
            <ChatBubbleSharpIcon className='icons'/>
        <RepeatSharpIcon className='icons' />
        <FavoriteBorderSharpIcon className='icons' />
        <PublishSharpIcon className='icons' /> 
            </div> 
        </div>
    </div>
 
}
);

export default Post