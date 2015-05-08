'use strict';

angular.module('homeListings')
.controller('ProfileViewCtrl', function($scope, $state, User, Listing){

  var userId = $state.params.userId;

  User.find(userId)
  .then(function(response){
    $scope.user = response.data.user;
  });

  Listing.viewProfile(userId)
  .then(function(response){
    $scope.listings = response.data.listings;
  });

});
