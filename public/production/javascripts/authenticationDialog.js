// authenticationDialog.js
var app=angular.module("App");app.controller("AuthenticationCtrl",["$http","$window",function(t,e){var r=this;this.data={email:"",password:"",password2:""},this.submit=function(i){t.post(i,r.data).success(function(t){t.redirect?e.location.href=t.redirect:r.message=t.message})}}]),app.directive("nemooLogin",function(){return{restrict:"E",templateUrl:"/views/login.ejs",controller:"AuthenticationCtrl",controllerAs:"loginCtrl"}}),app.directive("nemooSignUp",function(){return{restrict:"E",templateUrl:"/views/signup.ejs",controller:"AuthenticationCtrl",controllerAs:"signUpCtrl"}});