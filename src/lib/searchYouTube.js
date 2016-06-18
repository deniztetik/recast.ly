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

var searchYouTube = (options, callback) => {
  options.part = "snippet";
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    data: options,
    dataType: "json",
    success: function(data) {
      callback(data)
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("searchYouTube Error: ", errorThrown);
    }
  })
};

window.searchYouTube = searchYouTube;
