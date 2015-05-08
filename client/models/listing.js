'use strict';

angular.module('homeListings')
.factory('Listing', function($rootScope, $http, nodeUrl){

  function Listing(obj){
    this.address = obj.address;
    this.price = obj.price;
    this.sqft = obj.sqft;
    this.picture = obj.picture;
    this.bedrooms = obj.bedrooms;
    this.bathrooms = obj.bathrooms;
    this._id = obj._id;
    this.lat = obj.lat;
    this.lng = obj.lng;
  }

  Listing.prototype.save = function(){
    return $http.put(nodeUrl + '/listings', this);
  };

  Listing.prototype.update = function(){
    return $http.put(nodeUrl + '/listings/' + this._id, this);
  };

  Listing.find = function(){
    return $http.get(nodeUrl + '/listings/user');
  };

  Listing.destroy = function(listing){
    return $http.delete(nodeUrl + '/listings/' + listing._id);
  };

  Listing.findById = function(listingId){
    return $http.get(nodeUrl + '/listings/' + listingId);
  };

  Listing.show = function(){
    return $http.get(nodeUrl + '/listings');
  };

  Listing.viewProfile = function(userId){
    return $http.get(nodeUrl + '/listings/list/' + userId);
  };

  return Listing;
});
