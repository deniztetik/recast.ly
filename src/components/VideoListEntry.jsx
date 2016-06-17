var VideoListEntry = ({entry}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={entry.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{entry.snippet.title}</div>
      <div className="video-list-entry-detail">{entry.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
