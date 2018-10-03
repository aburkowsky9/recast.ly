import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options = {key: YOUTUBE_API_KEY, max: 5, query: 'pitbull puppies'}, callback = () => {}) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search`,
    type: 'GET',
    data: {key:  options.key, maxResults: options.max, q: options.query, part: 'snippet', type: 'video'},
    success : function(data) {
      callback(data.items);
    },
    error : function (error) {console.error('no dice - ', error)}
  })
};

export default searchYouTube;