import React from 'react'
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import { withStyles } from '@material-ui/core/styles'

import './postMedia.css'
import YouTubeEmbed from './youTubeEmbed'

const styles = {
  cardContent: {
    paddingTop: 0
  }
}

const PostMedia = (props) => {
  const disableOnClick = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  }
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
        <CardMedia src={props.post.url}>
          <img src={props.post.url} alt="" className="postMedia" />
        </CardMedia>
      )
    case 'link':
      if (props.post.domain === 'i.imgur.com' || props.post.domain === 'imgur.com') {
        return (
          <CardMedia src={props.post.url} onClick={disableOnClick}>
              <video preload="auto" autoPlay="autPlay" loop="loop" className="postMedia" controls>
                <source src={`${props.post.url.slice(0, -5)}.mp4`} type="video/mp4" />
              </video>
          </CardMedia>
        )
      }
      return (
        <CardContent className={props.classes.cardContent} onClick={disableOnClick}>
          <Typography>
            <a href={props.post.url}>
              {props.post.url}
            </a>
          </Typography>
        </CardContent>
      )
    case 'hosted:video':
      return (
        <CardMedia src={props.post.url} onClick={disableOnClick}>
          <video className="postMedia" preload="auto" autoPlay loop controls={true} muted>
            <source src={props.post.secure_media.reddit_video.fallback_url} type="video/mp4" />
          </video>
        </CardMedia>
      )
    case 'rich:video':
      if (props.post.media.type === 'gfycat.com') {
        const gfycatUrl = new URL(props.post.url)
        return (
          <CardMedia src={props.post.url} onClick={disableOnClick}>
            <iframe title={gfycatUrl.pathname} className="postMedia" src={`https://gfycat.com/ifr${gfycatUrl.pathname}`} frameBorder="0" scrolling="no" allowFullScreen />
          </CardMedia>
        )
      }
      if (props.post.media.type === 'youtube.com') {
        return (
          <CardMedia className="postMedia" src={props.post.url} onClick={disableOnClick}>
            <YouTubeEmbed id={getYouTubeId(props.post.url)} />
          </CardMedia>
        )
      }
      return (
        <CardContent className={props.classes.cardContent}>
          <Typography>
            Error: Unsupported rich:video type
          </Typography>
        </CardContent>
      )
    case 'self':
      return (
        <div />
      )
    case undefined:
      return (
        <CardContent className={props.classes.cardContent}>
          <Typography>
            {props.post.selftext}
          </Typography>
        </CardContent>
      )
    default:
      return (
        <CardContent className={props.classes.cardContent}>
          <Typography>
            {props.post.post_hint}
            {props.post.url}
          </Typography>
        </CardContent>
      )
  }
}

export default withStyles(styles)(PostMedia)
