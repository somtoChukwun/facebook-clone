import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
       <StoryReel />
        <MessageSender />

        <Post
         profilePic="https://media-public.canva.com/VomL4/MADch-VomL4/2/tl.png"
         message="Hey guys check out my new design!"
         timestamp="5:40"
         username="Chris"
         image="https://media-public.canva.com/MADIzeyi0Rk/1/thumbnail_large.jpg"
         />
        <Post
         profilePic="https://media-public.canva.com/Ycgeg/MAEjjNYcgeg/1/tl.png"
         message="It looks great Chris. Good job!"
         timestamp="5:40"
         username="Alesha"
         
        />
        <Post />

    </div>
  );
}

export default Feed