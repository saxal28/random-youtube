import React, { Component } from 'react';
import YouTube from "react-youtube";
let videoId;
let url;

class VideoPlayer extends Component {

  componentWillUpdate(nextProps) {
    videoId = nextProps.selectedVideo.id.videoId || `eh7lp9umG2I&t=1629s`;
    url = `https://www.youtube.com/v/${videoId}`;
  }
  render() {
    return (
      <div>
        <YouTube
          id="youtube-player"
          videoId={videoId} />
      </div>
    )
  }
}

export default VideoPlayer;

// <iframe
//   className="embed-responsive-item"
//   type="text/html"
//   src={url}></iframe>
// <YouTube videoId={videoId}></YouTube>
