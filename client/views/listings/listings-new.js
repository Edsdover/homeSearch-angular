/* jshint camelcase: false*/
'use strict';

angular.module('homeListings')
.controller('ListingsNewCtrl', function($scope, $state, $window, Listing, Map){

  $scope.update = function(obj){
    Map.geocode(obj.address, function(results){
      if(results && results.length){
        obj.address = results[0].formatted_address;
        obj.lat = results[0].geometry.location.lat();
        obj.lng = results[0].geometry.location.lng();
        var listing = new Listing(obj);
        listing.save(obj)
        .then(function(){
          $window.swal({title: 'Listing Posted', text: 'Congratulations, your listing is now live.', type: 'success'});
          $state.go('home');
        })
        .catch(function(){
          $window.swal({title: 'Listing Save Error', text: 'Warning, there was a problem saving your listing.', type: 'error'});
        });
      }
    });
  };
});
