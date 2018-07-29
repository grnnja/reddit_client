import React from 'react'
import './postMedia.css'

import YouTubeEmbed from './youTubeEmbed'

const PostMedia = (props) => {
  switch(props.post.post_hint){
    case 'image':
      return(
        <img className='postMedia' src={props.post.url} alt=''/>
      )
    case 'link':
      if(props.post.domain==='i.imgur.com') {
        return(
            <video preload="auto" autoPlay="autPlay" loop="loop">
              <source src={`${props.post.url.slice(0,-5)}.mp4`} type="video/mp4" />
            </video>
          )
      } else {
        return(
          <a href={props.post.url}>
            {props.post.url}
          </a>
        )
      }
    case 'hosted:video':
      return(
        <video preload="auto" autoPlay="autoPlay" loop="loop" controls={true} >
          <source src={props.post.secure_media.reddit_video.fallback_url} type="video/mp4" />
        </video>
      )
    case 'rich:video':
      console.log('rich:video case')
      if(props.post.media.type==='gfycat.com') {
        const gfycat_url= new URL(props.post.url)
        console.log('gfycat url\t', gfycat_url.pathname)
        return(
          <iframe src={`https://gfycat.com/ifr/${gfycat_url.pathname}`} frameBorder='0' scrolling='no' allowFullScreen></iframe>
        )
      } else if (props.post.media.type==='youtube.com') {
          return(
            <div className='postMedia'>
              <YouTubeEmbed id={getYouTubeId(props.post.url)} />
            </div>
          )
      } else {
        return(
          <div>Error: Unsupported rich:video type</div>
        )
      }
    case 'self':
      return(
        <div></div>
      )
    case undefined:
      return(
        <div></div>
      )
    default:
      return(
        <div>
          {props.post.post_hint}
          {props.post.url}
        </div>
      )
  }
}
// const gfycatGif(){

// }

function getYouTubeId(url){
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
}

export default PostMedia