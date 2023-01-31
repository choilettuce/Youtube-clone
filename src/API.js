const APIkey = 'AIzaSyAOHSOneqjzeNIQygHQfnu9ivNQikzW_-0'

// async function GetAPI (channelId, APIkey) {
    
//     await axios({
//         method: 'post',
//         url: "/weather/getlocation",
//         data: {
//             latitude: latitude,
//             longitude: longitude
//         }
// }


// function getChannelId(name, APIKey) 
// {
//   $.ajax({
//     type: "GET",
//     url: "https://www.googleapis.com/youtube/v3/search?",
//     data: { part: "snippet", key: APIKey, type: "video", q: name },
//     success: function (response) {
//       channelId = response.items[0].snippet.channelId;
//       getChannelLists(channelId, APIKey);
//     },
//   });
// }



const params ={
    key:'AIzaSyAOHSOneqjzeNIQygHQfnu9ivNQikzW_-0',
    part:'snippet',
    q:{category},
    maxResults: 5,
    type: 'video',
    videoDuration: 'long'
  }