import React from 'react';

const Video_Player = (props) => {
  return (
    <div>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={props.link ? props.link : "https://www.youtube.com/v/eh7lp9umG2I&t=1629s"}></iframe>
        </div>
    </div>
  )
}

export default Video_Player;
