'use strict';

angular.module('homeListings')
.controller('DashboardCtrl', function($scope, $state, User, Listing){

  User.show()
  .then(function(response){
    $scope.user = response.data;
  });

  Listing.find()
  .then(function(response){
    $scope.listings = response.data.listings;
  });

  $scope.newListing = function(){
    $state.go('listings.new');
  };

  $scope.destroy = function(listing){
    Listing.destroy(listing)
    .then(function(){
      Listing.find()
      .then(function(response){
        $scope.listings = response.data.listings;
      });
    });
  };

});
