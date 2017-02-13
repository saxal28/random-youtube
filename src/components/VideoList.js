import React, { Component } from 'react';

class VideoList extends Component {

  isSelectedVideo(video) {
    if(this.props.selectedVideo.snippet.title === video) {
      return true;
      console.log(true)
    } else {
      console.log(false)
    }
  }

  render() {
    return (
      <div className="box">
        {/*maps over video list array*/}
        {this.props.videoList.map((video, index) => {
          if(index !== 0 && video.id.videoId) {
            return (
              <div className="side-video row" key={index} onClick={() => this.props.onVideoSelect(video)}>
                {/*this should be remade into individual video component*/}
                <div className="col-xs-6">
                  <img src={video.snippet.thumbnails.default.url} className="img-responsive" role="presentation" />
                </div>
                <div className="col-xs-6">
                  {this.isSelectedVideo(video.snippet.title) ? <i className="fa fa-hand-o-right" aria-hidden="true"></i> : ""}
                  {video.snippet.title}
                  <p className="side-video-author"><strong style={{color:"red"}}>{video.snippet.channelTitle}</strong></p>
                </div>

              </div>
            )
          }
        })}

      </div>
    )
  }
}

export default VideoList;
