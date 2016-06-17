var VideoPlayer = ({video}) => {

  console.log("VideoPlayer: currentVideo is ", video);
  var source = "https://www.youtube.com/embed/" +
    video.id.videoId + "?autoplay=1";

  return <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={source} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
};

window.VideoPlayer = VideoPlayer;
