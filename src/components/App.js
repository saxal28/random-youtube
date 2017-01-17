import React, { Component } from 'react';
import Navbar from "./Navbar";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import axios from 'axios';
import { setSearchTerm, selectVideo } from "../actions/index.js";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm : "dinosaurs",
      videoList: [],
      selectedVideo: "",
    }
  }

  getVideoList() {
    const that = this;

    const searchTerm = this.state.searchTerm;
    const apiKey = "AIzaSyC3gY6wpailWpJB2DfbkJammzuKWbL8KvA";
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${searchTerm}&key=${apiKey}`;
    axios.get(url)
      .then(function(response) {
        that.setState({
          videoList : response.data.items,
          selectedVideo : response.data.items[0]
        })
    });
  }

  handleButtonPress() {
    const value = document.body.querySelector("input").value;
    this.setState({searchTerm: value}, () =>  this.getVideoList());
  }

  componentWillMount() {
    this.getVideoList();
  }

  render() {
    return (
      <div>
        <Navbar handleButtonPress={this.handleButtonPress.bind(this)}/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <VideoPlayer selectedVideo={this.state.selectedVideo}/>
              {console.log(this.state.videoList)}
            </div>
            <div className="col-md-4">
              <VideoList
                videoList={this.state.videoList}
                selectedVideo={this.state.selectedVideo}
                onVideoSelect={(selectedVideo) => this.setState({ selectedVideo }) } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVideo: state.selectedVideo,
    defaultSearchTerm: state.defaultSearchTerm,

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setSearchTerm,
    selectVideo
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);


// YOUTUBE URL BREAKDOWN
//   https://www.googleapis.com/youtube/v3/search?      search query string
//   part=snippet&                                      gets snippet of video
//   maxResults=10                                      max number of search results that it returns
//   &q=alan                                            search term
//   &key=AIzaSyC3gY6wpailWpJB2DfbkJammzuKWbL8KvA       api key
