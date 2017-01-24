import React from 'react';

const VideoDetail = (props) => {
    const video = props.selectedVideo.snippet;
    return (
      <div className="segment">
         <h3>{video ? video.title : "title"}</h3>
         <hr />
         <p className="block-quote">{video ? video.description : "---"}</p>
      </div>

    )
}

export default VideoDetail;
