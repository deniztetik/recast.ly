class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0],
      searchQuery: ""
    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(video) {
    this.setState({currentVideo: video});
  }

  handleChange(query) {
    console.log("You still did it");
    this.setState({searchQuery: query})
    debugger;
  }
  handleSearchClick(data) {
    var searchObj = {
      query: this.searchQuery,
      max: 5,
      key: window.YOUTUBE_API_KEY
    }
    var youtubeResults = searchYouTube(data);
    this.setState({videos: youtubeResults});
  }

  render() {
    return (
      <div>
       <Nav onChange = {this.handleChange} onClick={this.SearchClickData}/>
       <div className="col-md-7">
         <VideoPlayer video = {this.state.currentVideo}/>
       </div>
       <div className="col-md-5">
         <VideoList data= {this.state.exampleVideoData} onClick = {this.handleClick}/>
       </div>
     </div>
   );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
window.App = App;

// searchYouTube({
//   query: "baby elephant",
//   max: 5,
//   key: window.YOUTUBE_API_KEY
// }, function onSuccess() {
//   debugger;
//   console.log("you did it");
// });
