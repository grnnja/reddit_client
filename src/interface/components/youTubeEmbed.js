import React, {Component} from 'react'
import './youTubeEmbed.css'

export default class YouTubeEmbed extends Component {
  constructor(props) {
    super(props)
    this.state = { playVideo: false }
  }

  handleClick = () => {
    this.setState({
        playVideo: true
    })
  }
  render(){
    console.log('handleclick state:\t', this)
    if (this.state.playVideo) {
      return(
        <div className='youtube-player-wrapper'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${this.props.id}?rel=0`} 
            title={this.props.id}
            frameBorder="0" 
            allow="encrypted-media" 
            allowFullScreen="allowFullScreen" />
        </div>  
      )
    } else {
      return(
        <div className='youtube-player' onClick={this.handleClick}>
          <img src={`https://i.ytimg.com/vi/${this.props.id}/mqdefault.jpg`} />
          <div className='play' />
        </div>
      )
    }
  }
}

// /* Light YouTube Embeds by @labnol */
// /* Web: http://labnol.org/?p=27941 */

// document.addEventListener("DOMContentLoaded",
//     function() {
//         var div, n,
//             v = document.getElementsByClassName("youtube-player");
//         for (n = 0; n < v.length; n++) {
//             div = document.createElement("div");
//             div.setAttribute("data-id", v[n].dataset.id);
//             div.innerHTML = labnolThumb(v[n].dataset.id);
//             div.onclick = labnolIframe;
//             v[n].appendChild(div);
//         }
//     });

// function labnolThumb(id) {
//     var thumb = `<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg">`,
//         play = '<div class="play"></div>';
//     return thumb + play;
// }

// function labnolIframe() {
//     var iframe = document.createElement("iframe");
//     var embed = "https://www.youtube.com/embed/ID?autoplay=1";
//     iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
//     iframe.setAttribute("frameborder", "0");
//     iframe.setAttribute("allowfullscreen", "1");
//     this.parentNode.replaceChild(iframe, this);
// }