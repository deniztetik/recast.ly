
var VideoList = ({data, onClick}) => (
  <div className="video-list media" onClick={onClick}>
     {
       exampleVideoData.map( (item, index) =>
         <VideoListEntry entry = {item} key = {index}/>
       )
    }
  </div>
);

window.VideoList = VideoList;

// class VideoList extends React.Component {
//   constructor(props) {
//     // console.log("Props are", props);
//     super(props);
//   }
//
//   entriesToList() {
//     return exampleVideoData.map((item, index) =>
//       <VideoListEntry entry={item} key={index}/>
//     );
//   }
//
//   render() {
//     let entries = this.entriesToList();
//
//     return (
//       <div className="video-list media">
//         {entries}
//       </div>
//     );
//   }
// }
// var entriesToList() {
//   return exampleVideoData.map((item, index) =>
//     <VideoListEntry entry={item} key={index}/>
//   );
// }
