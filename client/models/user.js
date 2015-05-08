'use strict';

angular.module('homeListings')
.factory('User', function($rootScope, $http, nodeUrl){

  function User(obj){
    this.name = obj.name;
    this.phone = obj.phone;
    this.photo = obj.photo;
    this.email = obj.email;
    this.avatar = obj.avatar;
  }

  User.prototype.save = function(){
    return $http.put(nodeUrl + '/users', this);
  };

  User.show = function(){
    return $http.get(nodeUrl + '/users');
  };

  User.oauth = function(provider){
     return $rootScope.afAuth.$authWithOAuthPopup(provider);
   };

  User.register = function(user){
    return $rootScope.afAuth.$createUser(user);
  };

  User.login = function(user){
    return $rootScope.afAuth.$authWithPassword(user);
  };

  User.logout = function(){
    return $rootScope.afAuth.$unauth();
  };

  User.find = function(userId){
    return $http.get(nodeUrl + '/users/' + userId);
  };

  return User;
});
