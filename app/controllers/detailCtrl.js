app.controller("detailCtrl", 
function($scope, $routeParams, $q, $firebaseObject) {


  var ref = new Firebase("https://glaring-torch-7889.firebaseio.com/songs/" + $routeParams.songId);
  $scope.songdetail = $firebaseObject(ref);
    

});
