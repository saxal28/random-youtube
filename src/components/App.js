import React, { Component } from 'react';
import Navbar from "./Navbar";
import "../../public/styles/style.css";
import Video_Player from "./Video_Player";
import Video_List from "./Video_List";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm : "pirates",
      videoList: [],
      videoUrl: [],
    }
  }

  getVideoList() {
    const that = this;

    const searchTerm = that.state.searchTerm;
    const apiKey = "AIzaSyC3gY6wpailWpJB2DfbkJammzuKWbL8KvA";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${searchTerm}&key=${apiKey}`;
    axios.get(url)
      .then(function(response) {
        that.setState({videoList : response.data.items})
    });
  }

  componentWillMount() {
    this.getVideoList();
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-8">
              <Video_Player />
              {console.log(this.state.videoList)}
            </div>
            <div className="col-sm-4">
              <Video_List videoList={this.state.videoList}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


// YOUTUBE URL BREAKDOWN
//   https://www.googleapis.com/youtube/v3/search?      search query string
//   part=snippet&                                      gets snippet of video
//   maxResults=10                                      max number of search results that it returns
//   &q=alan                                            search term
//   &key=AIzaSyC3gY6wpailWpJB2DfbkJammzuKWbL8KvA       api key
