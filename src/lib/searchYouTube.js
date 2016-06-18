// var searchYouTube = (data) => {
//   return callAPI(":list", "GET", JSON.stringify(data), "application/json")//need a url
//     .then(
//       function onSuccess(resp) {
//         console.log("Successfully got videos from youtube");
//         console.log("Response video list is ", resp);
//       }
//     )
//     .catch(
//       function onFailure(err) {
//         console.log("YOU DONE FUCKED UP", err);
//       }
//     )
// };
//
// var callAPI = (endpoint, type, data, datatype) => {
//   return new Promise(function executor(resolve, reject) {
//     $.ajax("https://www.googleapis.com/youtube/v3/search" + endpoint, {//need a url
//       type: type,
//       data: data,
//       datatype: datatype,
//       cache: false,
//       success: resolve,
//       error: reject
//     });
//
//   });
// }

var searchYouTube = ({key, query, max=5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: "video",
    videoEmbeddable: true
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({reponseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    )
  });
};

window.searchYouTube = searchYouTube;
