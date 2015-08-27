app.controller("detailCtrl",
["$scope","$routeParams", "$q","song-storage", 
function($scope, $routeParams, $q, song_storage ) {

  $scope.songs = [];
  $scope.Id = $routeParams.songId;

  song_storage.then(
    function(promiseResolutionData) {
      console.log("promiseResolutionData", promiseResolutionData);
      $scope.songs = promiseResolutionData;
    },
    function(promiseRejectionError) {
      console.log("error", promiseRejectionError);
    });

}]);
