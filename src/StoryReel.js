import React from 'react';
import "./StoryReel.css";
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel">
       <Story 
       image="https://media-public.canva.com/Rl7uE/MAECoFRl7uE/1/tl.png"
       profileSrc="https://media-public.canva.com/DMnuw/MADch0DMnuw/2/tl.png"
       title="Bumbie"

       /> 
       <Story 
       image="https://template.canva.com/EAE2vxQueTc/1/0/400w-NWNJkp-a5LM.jpg"
       profileSrc="https://media-public.canva.com/Ycgeg/MAEjjNYcgeg/1/tl.png"
       title="Alesha"

       /> 
       <Story 
       image="https://media-public.canva.com/MADQ5LuYpCI/1/thumbnail_large-1.jpg"
       profileSrc="https://media-public.canva.com/3qBRE/MADch63qBRE/2/tl.png"
       title="Sam"

       /> 
       <Story 
       image="https://media-public.canva.com/MADIzeyi0Rk/1/thumbnail_large.jpg"
       profileSrc="https://media-public.canva.com/VomL4/MADch-VomL4/2/tl.png"
       title="Chris"

       /> 

    </div>
  )
}

export default StoryReel