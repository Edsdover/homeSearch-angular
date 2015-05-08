'use strict';

angular.module('homeListings')
.controller('NavCtrl', function($rootScope, $scope, $state, User, $http){

  $scope.afAuth.$onAuth(function(data){
    if(data){
      $rootScope.activeUser = data;
      $rootScope.displayName = getDisplayName(data);
      $http.defaults.headers.common.Authorization = 'Bearer ' + data.token;
      $state.go('home');
    }else{
      $rootScope.activeUser = null;
      $rootScope.displayName = null;
      $http.defaults.headers.common.Authorization = null;
      $state.go('listings.show');
    }
  });

  $scope.logout = function(){
    User.logout();
    $state.go('listings.show');
  };

  function getDisplayName(data){
  switch(data.provider){
    case 'password':
      return data.password.email;
    case 'twitter':
      return data.twitter.displayName;
    case 'github':
      return data.github.displayName;
    case 'google':
      return data.google.displayName;
    case 'facebook':
      return data.facebook.displayName;
    }
  }
});
