app.controller("songCtrl", 
function($scope, $q, $firebaseObject, $firebaseArray) {

  $scope.songSearchText = "";
  var ref = new Firebase("https://glaring-torch-7889.firebaseio.com/songs/");
  $scope.songs = $firebaseArray(ref);
    
  $scope.killMusic = function(song) {
    $scope.songs.$remove(song);
  };

});

