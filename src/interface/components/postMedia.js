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
        <CardMedia>
          <img src={props.post.url} alt="" className="postMedia" />
        </CardMedia>
      )
    case 'link':
      if (props.post.domain === 'i.imgur.com' || props.post.domain === 'imgur.com') {
        return (
          <CardMedia>
              <video preload="auto" autoPlay="autPlay" loop="loop" className="postMedia">
                <source src={`${props.post.url.slice(0, -5)}.mp4`} type="video/mp4" />
              </video>
          </CardMedia>
        )
      }
      return (
        <CardContent className={props.classes.cardContent}>
          <a href={props.post.url}>
            {props.post.url}
          </a>
        </CardContent>
      )
    case 'hosted:video':
      return (
        <CardMedia>
          <video className="postMedia" preload="auto" autoPlay="autoPlay" loop="loop" controls={true} >
            <source src={props.post.secure_media.reddit_video.fallback_url} type="video/mp4" />
          </video>
        </CardMedia>
      )
    case 'rich:video':
      if (props.post.media.type === 'gfycat.com') {
        const gfycatUrl = new URL(props.post.url)
        return (
          <CardMedia>
            <iframe title={gfycatUrl.pathname} className="postMedia" src={`https://gfycat.com/ifr${gfycatUrl.pathname}`} frameBorder="0" scrolling="no" allowFullScreen />
          </CardMedia>
        )
      }
      if (props.post.media.type === 'youtube.com') {
        return (
          <CardMedia className="postMedia">
            <YouTubeEmbed id={getYouTubeId(props.post.url)} />
          </CardMedia>
        )
      }
      return (
        <CardContent className={props.classes.cardContent}>
          Error: Unsupported rich:video type
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
          {props.post.post_hint}
          {props.post.url}
        </CardContent>
      )
  }
}

export default withStyles(styles)(PostMedia)
