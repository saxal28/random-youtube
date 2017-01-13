import React, { Component } from 'react';

class Video_List extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="box">
        {/*maps over video list array*/}
        {this.props.videoList.map((video, index) => {
          return (
            <div className="side-video row" key={index}>

              <div className="col-xs-6">
                <img src={video.snippet.thumbnails.default.url} className="img-responsive" />
              </div>
              <div className="col-xs-6">
                <p className="text-left">{video.snippet.title}</p>
              </div>
            </div>
          )
        })}

      </div>
    )
  }
}

export default Video_List;
