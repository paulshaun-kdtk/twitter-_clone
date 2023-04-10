import React, { useState } from 'react'
import './ShareBox.css'
import Diversity2Icon from '@mui/icons-material/Diversity2';
import { Button } from '@mui/material';
import { db } from './firebase';


//declare your functons below


function ShareBox() {
  const [shareMessage, setShareMessage] = useState('');
  const [shareImage, setShareImage] = useState('');
  const sendShare = e => {
    e.preventDefault();
    
    db.collection('posts').add({
      displayName: 'Random User',
      username:'randomgeek',
      verified: false,
      text: shareMessage,
      image: shareImage,
      avatar: '',

    });
    setShareImage('');
    setShareMessage('');
  
  }



  return (
    <div className='shareBox'>
    <form>
        <div className='shareBox__input'>
        < Diversity2Icon className='sidebar_conquest_icon'/>
        <input
        onChange={e => setShareMessage(e.target.value)}
        value={shareMessage} placeholder='How are you feeling today?'type='text'/>
        </div >
        <input 
        onChange={e => setShareImage(e.target.value)}
        value={shareImage} className='shareBox__imageUpload' placeholder='Enter Image URL' type='text' />
        <Button variant='outlined' onClick={sendShare} type='submit' className='shareBox__Button'>Share</Button>
        </form>        
       
    </div>
  )
}

export default ShareBox