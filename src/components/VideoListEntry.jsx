import App from './App.js';

class VideoListEntry extends App {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img onClick={
            super.onVideoListClick.bind(this),
            super.getCurrentVideo.bind(this)
          }
          className="media-object" src={this.props.video.snippet.thumbnails.default.url} 
          alt="{props.video.snippet.channelTitle}" />
        </div>
        <div className="media-body">
          <div onClick={
            super.onVideoListClick.bind(this),
            super.getCurrentVideo.bind(this)
          }
          className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>
    )
  }
  
  propTypes() { 
    video: React.PropTypes.object.isRequired 
  }
  
  
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated

// VideoListEntry.propTypes = {
//   video: React.PropTypes.object.isRequired
// };

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;