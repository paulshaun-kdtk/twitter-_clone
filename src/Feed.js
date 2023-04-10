import React, {useEffect, useState} from 'react';
import './Feed.css';
import ShareBox from './ShareBox';
import Post from './Post';
import { db }  from './firebase' 
import FlipMove from 'react-flip-move'

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className='feed'>
        {/* header */}
        <div className='feed__header'><h3>Home</h3></div>
        

        {/* sharebox */}
    <ShareBox />
<FlipMove>
    {posts.map(post => (
      <Post
      key={post.text}
      displayName={post.displayName}
      username={post.username}
      avatar={post.avatar}
      image={post.image}
      verified={post.verified}
      text={post.text}
      
      />
    )
)
}
</FlipMove>

        {/* shares */}
    
    </div>
  )
}

export default Feed