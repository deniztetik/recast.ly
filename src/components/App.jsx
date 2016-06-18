class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      currentVideo: null,
      searchQuery: "react tutorials"
    }
    this.appGlue = this.appGlue.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.appGlue();
  }

  handleClick(video) {
    this.setState({currentVideo: video});
  }

  handleChange(query) {
    console.log("Search query changing to ",query);
    this.setState({searchQuery: query})
    this.appGlue(this.state.searchQuery);
  }

  appGlue() {//formerly handleSearchClick() RIP
    var searchObj = {
      query: this.state.searchQuery,
      max: 5,
      key: window.YOUTUBE_API_KEY
    }

    searchYouTube(searchObj, function onSuccess(resp) {
      console.log("you did it", resp);
      this.setState({videos: resp, currentVideo: resp[0]});
    }.bind(this));

  }

  render() {
    return (
      <div>
       <Nav onChange = {_.debounce(this.handleChange, 200)} appGlue={this.appGlue}/>
       <div className="col-md-7">
         <VideoPlayer video = {this.state.currentVideo}/>
       </div>
       <div className="col-md-5">
         <VideoList data= {this.state.videos} onClick = {this.handleClick}/>
       </div>
     </div>
   );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
window.App = App;

searchYouTube({
  query: "baby elephant",
  max: 5,
  key: window.YOUTUBE_API_KEY
}, function onSuccess(resp) {
  console.log("you did it", resp);
});
