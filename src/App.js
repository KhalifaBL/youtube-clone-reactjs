import React from 'react';
import SearchBar from './SearchBar';
import youtube from './API/Youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import './App.css';

class App extends React.Component {

  state = { videos: [] }
  onSearchSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });

  }
  render() {
    return (
      <div className="App" >
        <div className="navbar">
          <SearchBar onSearchSubmit={this.onSearchSubmit}></SearchBar></div>
        <div className="body">
          <div className="main-body">
            <div className="left-part">
              <VideoDetail videoList={this.state.videos}></VideoDetail>
            </div>
            <div className="right-part" >
              <VideoList onSearchSubmit={this.onSearchSubmit} videoList={this.state.videos}></VideoList>

            </div>
          </div>
        </div>


      </div>
    );
  }

}

export default App;
