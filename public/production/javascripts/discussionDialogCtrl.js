var app=angular.module("App"),options=["Advice","Animals","Automotive","Books","Business","Career","Celebrity","Debate","Entertainment","Environment","Family","Fashion","Finance","Food","Gaming","Health","Hobbies","Humor","Lifestyle","Movies","Music","News","Religion","Science","Sports","Technology","Television","Travel","Weather"];app.controller("DiscussionDialogCtrl",["$mdDialog","$window","$http","$scope","user",function(e,i,t,n,o){var s=this;this.options=options.map(function(e){return{text:e,val:e.toLowerCase()}}),this.hide=function(){e.hide()},this.cancel=function(){e.cancel()},this.redirect=function(e){i.location.href=e},this.data={category:"",name:"",description:"",user:o},this.submit=function(e,n){var o=s.cleanData(s.data);t.post(e,o).success(function(e){e.redirect?i.location.href=e.redirect:s.message=e.message})},this.cleanData=function(e){return{category:e.category,name:e.name.toLowerCase().split(" ").join("-"),description:e.description,user:e.user}}}]);