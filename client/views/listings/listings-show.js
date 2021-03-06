/* jshint camelcase: false */

'use strict';

angular.module('homeListings')
.controller('listingsShowCtrl', function($scope, $state, Listing, Map, $window){

  Listing.show()
  .then(function(response){
    $scope.listings = response.data.listings;
    $scope.listings.forEach(function(listing){
      listing.marker = Map.addMarker(map, listing.lat, listing.lng, listing.address);
    });
  });

  $scope.search = function(query){
    Map.geocode(query, function(data){
      var latS = data[0].geometry.location.A;
      var lngS = data[0].geometry.location.F;
      $scope.map = Map.create('#map', latS, lngS, 7);
      var latMin = latS - 0.1;
      var latMax = latS + 0.1;
      var lngMin = lngS - 0.1;
      var lngMax = lngS + 0.1;
      Listing.show()
      .then(function(response){
        $scope.listings = $window._.remove(response.data.listings, function(listing){
          return ((listing.lat > latMax) || (listing.lat < latMin) || (listing.lng > lngMax) || (listing.lng < lngMin));
        });
      });
    });
  };

  var map = Map.create('#map', 0, -30, 2);

  $scope.viewUser = function(userId){
    $state.go('show-profile', {userId:userId});
  };

  $scope.bounceMarker = function(listing){
    if(listing.marker.getAnimation() !== null){
      listing.marker.setAnimation(null);
    }else{
      listing.marker.setAnimation($window.google.maps.Animation.BOUNCE);
    }
  };

  $scope.mapZoom = function(obj){
    Map.geocode(obj.mapZoom, function(results){
      if(results && results.length){
        obj.mapZoom = results[0].formatted_address;
        obj.lat = results[0].geometry.location.lat();
        obj.lng = results[0].geometry.location.lng();
        var location = obj;
        console.log(location);
      }
    });
  };
});
