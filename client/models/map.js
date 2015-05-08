'use strict';

angular.module('homeListings')
.factory('Map', function($window){

  function Map(){
  }

  Map.addMarker = function(map, lat, lng, name){
    var latLng = new $window.google.maps.LatLng(lat, lng);
    var marker = new $window.google.maps.Marker({
      map: map,
      position: latLng,
      title: name,
      animation: $window.google.maps.Animation.DROP
    });
    return marker;
  };

  Map.geocode = function(address, cb){
    var geocoder = new $window.google.maps.Geocoder();
    geocoder.geocode({address: address}, cb);
  };

  Map.create = function(selector, lat, lng, zoom){
    var options = {
      center: new $window.google.maps.LatLng(lat, lng),
      zoom: zoom,
      mapTypeId: $window.google.maps.MapTypeId.HYBRID
    };
    selector = angular.element(selector).get(0);
    var map = new $window.google.maps.Map(selector, options);
    return map;
  };

  return Map;
});
