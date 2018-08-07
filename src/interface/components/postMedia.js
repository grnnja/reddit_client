import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

import './postMedia.css'
import YouTubeEmbed from './youTubeEmbed'

const PostMedia = (props) => {
  function getYouTubeId(url) {
    let ID = '';
    const newURL = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if (newURL[2] !== undefined) {
      ID = newURL[2].split(/[^0-9a-z_\-]/i);
      [ID] = ID;
    } else {
      ID = newURL;
    }
    return ID;
  }
  switch (props.post.post_hint) {
    case 'image':
      return (
        <img className='postMedia' src={props.post.url} alt=""/>
      )
    case 'link':
      if (props.post.domain === 'i.imgur.com' || props.post.domain === 'imgur.com') {
        return (
            <video preload="auto" autoPlay="autPlay" loop="loop">
              <source src={`${props.post.url.slice(0, -5)}.mp4`} type="video/mp4" />
            </video>
        )
      }
      return (
        <CardContent>
          <a href={props.post.url}>
            {props.post.url}
          </a>
        </CardContent>
      )
    case 'hosted:video':
      return (
        <video className='postMedia' preload="auto" autoPlay="autoPlay" loop="loop" controls={true} >
          <source src={props.post.secure_media.reddit_video.fallback_url} type="video/mp4" />
        </video>
      )
    case 'rich:video':
      if (props.post.media.type === 'gfycat.com') {
        const gfycatUrl = new URL(props.post.url)
        return (
          <iframe title={gfycatUrl.pathname} className="postMedia" src={`https://gfycat.com/ifr${gfycatUrl.pathname}`} frameBorder="0" scrolling="no" allowFullScreen />
        )
      }
      if (props.post.media.type === 'youtube.com') {
        return (
          <div className='postMedia'>
            <YouTubeEmbed id={getYouTubeId(props.post.url)} />
          </div>
        )
      }
      return (
        <div>
          Error: Unsupported rich:video type
        </div>
      )
    case 'self':
      return (
        <div />
      )
    case undefined:
      return (
        <CardContent>
          <Typography>
            {props.post.selftext}
          </Typography>
        </CardContent>
      )
    default:
      return (
        <CardContent>
          {props.post.post_hint}
          {props.post.url}
        </CardContent>
      )
  }
}
// const gfycatGif(){

// }

export default PostMedia
