'use strict';

angular.module('homeListings')
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {url: '/', templateUrl: '/views/general/home.html', controller: 'DashboardCtrl'})
  .state('show-profile', {url: 'profiles/{userId}', templateUrl: '/views/general/home-user.html', controller: 'ProfileViewCtrl'})
  .state('register', {url: '/register', templateUrl: '/views/users/register.html', controller: 'UsersCtrl'})
  .state('profile', {url: '/profile', templateUrl: '/views/users/profile.html', controller: 'ProfileCtrl'})
  .state('login', {url: '/login', templateUrl: '/views/users/login.html', controller: 'UsersCtrl'})
  .state('listings', {url: '/listings', templateUrl: '/views/listings/listings.html', abstract: true})
  .state('listings.new', {url: '/new', templateUrl: '/views/listings/listings-new.html', controller: 'ListingsNewCtrl'})
  .state('listings.edit', {url: '/{listingId}/edit', templateUrl: '/views/listings/listings-edit.html', controller: 'ListingsEditCtrl'})
  .state('listings.show', {url: '', templateUrl: '/views/listings/listings-show.html', controller: 'listingsShowCtrl'});
});
