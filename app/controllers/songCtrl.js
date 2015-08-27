app.controller("songCtrl",
["$scope", "$q","song-storage", 
function($scope, $q, song_storage ) {

  $scope.songSearchText = "";
  // $scope.theArtist = "";
  // $scope.theAlbum = "";
  $scope.songs = [];
 

  $scope.killMusic = function(song) {
    var songIndex = $scope.songs.indexOf(song);
    if (songIndex >= 0) {
      $scope.songs.splice(songIndex, 1);
    }
  };

  song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });

}]);

  // $scope.searchMusic = function() {
  //   var selectedArtist = $scope.theArtist;
  //   var artistName = $.grep($scope.songs, function(artist) {
  //     return artist.artist == selectedArtist;
  //   }); [0].artist;

  //   var selectedAlbum =  $scope.theAlbum;
  //   var albumName = $.grep($scope.songs, function(album){
  //     return album.album == selectedAlbum;
  //   }); [0].album;

  //   $window.alert("Selected Artist: " + selectedArtist + "\nSelected Album: " + selectedAlbum);
  // };


//   function getFirstList(){
//     return $q(function(resolve,reject){
//       $.ajax({
//         url:"./data/songs.json"
//       })
//       .done(function(response){
//         resolve(response.songs);
//         console.log("songs", response.songs);
//       })
//       .fail(function(xhr, status, error){
//         reject(error);
//       });
//     });
//   }

//   getFirstList()
//     .then(
//       function(songs){
//         for (var i = 0; i< songs.length; i++){
//           $scope.songs.push(songs[i]);
//         }
//       },
//       function(error){
//        console.log("error", error);
//       });


//   function getMoreSongList(){
//     return $q(function(resolve,reject){
//       $.ajax({
//         url:"./data/moreSongs.json"
//       })
//       .done(function(response){
//         resolve(response.moreSongs);
//         console.log("moresongs", response.moreSongs)
//       })
//       .fail(function(xhr, status, error){
//         reject(error);
//       });
//     });
//   }

//     getMoreSongList()
//     .then(
//       function(songs){
//         for (var i = 0; i< songs.length; i++){
//           $scope.songs.push(songs[i]);
//         }
//       },
//       function(error){
//         console.log("error", error);
//       });
// });
