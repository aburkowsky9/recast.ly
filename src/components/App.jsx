import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import Search from './Search.js'
import searchYouTube from '../lib/searchYouTube.js'
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super(props);
    
    this.state = {
      currentVideo: exampleVideoData[0],
      listVideos: exampleVideoData
    };
    
    this.videoClick = this.onVideoListClick.bind(this);
    
    this.searchInput = this.onSearchInput.bind(this);
    
    this.handleSearchInput = this.handleChange.bind(this);
  }
  
  onSearchInput(searchedItem) {
    this.props.searchYouTube({key: YOUTUBE_API_KEY, max: 5, query: searchedItem}, (data) => { 
    if (data) {
      this.setState({
        currentVideo:data[0],
        listVideos: data
      });
    }
   })
  }
  
  handleChange(event) {
    console.log(event);
    this.onSearchInput(event.target.value);
  }
  
  onVideoListClick (clickedVideo) {
    if(clickedVideo !== this.state.currentVideo) {
      this.setState({currentVideo: clickedVideo});
    }
  }
  

  componentDidMount() {
    this.props.searchYouTube(undefined, (data) => { 
      if (data) {
        this.setState({
          currentVideo:data[0],
          listVideos: data
        });
      }
    })
  }
  
  render() {
    return(
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInput={this.handleSearchInput}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.listVideos} newOnClick={this.videoClick}  />
          </div>
        </div>
      </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

    // this.onClick = (clickedVideo) => {
    //   this.onVideoListClick(clickedVideo);
    // }

  // onVideoListClick(clickedVideo) => {
  //     if(clickedVideo !== this.state.currentVideo) {
  //       this.setState({currentVideo: clickedVideo});
  //       }
  //   