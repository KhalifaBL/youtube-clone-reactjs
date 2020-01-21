import React from 'react';
import SearchBar from './SearchBar';
import youtube from './API/Youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import './App.css';

class App extends React.Component {

  state = { videos: [], selectedVideo: null }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }
  onSearchSubmit = async  (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    
    const firstelement = response.data.items[0];
    response.data.items.shift();
    this.setState({
      videos: response.data.items,
      selectedVideo: firstelement
    });
  }

  componentDidMount() {
    this.onSearchSubmit('wiz boys');
  }
  render() {
    return (
      <div className="App" >
        <div className="navbar">
          <SearchBar onSearchSubmit={this.onSearchSubmit}></SearchBar></div>
        <div className="body">
          <div className="main-body">
            <div className="left-part">
              <VideoDetail selectedVideo={this.state.selectedVideo}></VideoDetail>
            </div>
            <div className="right-part" >
              <VideoList onVideoSelect={this.onVideoSelect} videoList={this.state.videos}></VideoList>

            </div>
          </div>
        </div>


      </div>
    );
  }

}

export default App;
