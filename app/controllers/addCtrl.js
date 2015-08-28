app.controller("addCtrl",
function($scope, $q, $firebaseArray) {


  var ref = new Firebase("https://glaring-torch-7889.firebaseio.com/songs/");
  $scope.songs = $firebaseArray(ref);
  $scope.newMusic={name: "", artist:"", album:""};

  $scope.addMusic = function(){
    $scope.songs.$add({
      name: $scope.newMusic.name, 
      artist: $scope.newMusic.artist,
      album: $scope.newMusic.album
       });
    $scope.newMusic = "";
  };

});
