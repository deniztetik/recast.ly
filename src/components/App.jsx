class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    this.setState({currentVideo: video})
  }

  render() {
    return (
      <div>
       <Nav />
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
