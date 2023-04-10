import React from 'react'
import './Widgets.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed'


//declare your functions below

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets__input'>
    <SearchSharpIcon className='widgets__searchIcon'/>
      <input placeholder='Search for...' type='text' />
      </div>
      <div className='widgets__widgetContainer'>
        <h2>What's Happening</h2>

        <TwitterTweetEmbed tweetId = {'1644754389347758081'} />
        
        <TwitterTweetEmbed tweetId = {'1645500413305659404'} />

        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='ShaunPa30032006'
        options={{height: 400}}
        />

      </div>
    </div>
  )
}

export default Widgets