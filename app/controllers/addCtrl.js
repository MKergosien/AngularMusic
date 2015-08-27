app.controller("addCtrl",
["$scope", "$q", 
function($scope, $q) {

  $scope.songs = [];
  $scope.newMusic={name: "", artist:"", album:""};

  $scope.addMusic = function(){
    $scope.songs.push({
      name: $scope.newMusic.name, 
      artist: $scope.newMusic.artist,
      album: $scope.newMusic.album
       });
    $scope.newMusic = "";
  };

}]);
