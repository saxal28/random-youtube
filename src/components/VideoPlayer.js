import React, { Component } from 'react';
let videoId;
let url;

class VideoPlayer extends Component {

  componentWillUpdate(nextProps) {
    videoId = nextProps.selectedVideo.id.videoId || `eh7lp9umG2I&t=1629s`;
    url = `https://www.youtube.com/v/${videoId}&autoplay=1`;
  }
  render() {
    return (
      <div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              type="text/html" 
              src={url}></iframe>
          </div>
      </div>
    )
  }
}

export default VideoPlayer;
