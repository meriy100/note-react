import axiosHelper from './axiosHelper'
var youtube = require('youtube-iframe-player');
const playRoom = (videoId) => {
  youtube.init(function() {
    console.log('Youtube API Loaded');

    var youtubePlayer = youtube.createPlayer('sample', {
        width: '720',
        height: '405',
        videoId: videoId,
        playerVars: { 'autoplay': 0, 'controls': 1 },
        events: {
          'onReady': playerReady,
          'onStateChange': onPlayerStateChange
        }
      });

      function playerReady(event) {
          youtubePlayer.playVideo();
      }

      function onPlayerStateChange(event) {
        if(event.data == YT.PlayerState.ENDED) {
          axiosHelper.delete('/api/playlist').then((response) => {
            youtubePlayer.loadVideoById(response.data.video_id)
          })
        }
      }
  });
}
export default playRoom
