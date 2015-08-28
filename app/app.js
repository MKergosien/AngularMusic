var app = angular.module("MusicApp", ['ngRoute', 'firebase']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/songs', {
        templateUrl: 'partials/song-list.html',
        controller: 'songCtrl'
      }).
      when('/songs/addSong', {
        templateUrl: 'partials/add-song.html',
        controller: 'addCtrl'
      }).
      when('/songs/:songId', {
        templateUrl: 'partials/song-detail.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);