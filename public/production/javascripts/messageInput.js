var app=angular.module("App");app.controller("MessageInputCtrl",["$timeout","$scope",function(e,s){this.message="",this.rows=1,e(function(){$("#message-input-box").focus()},0),this.send=function(){this.message&&(this.message=this.message.replace(/(?:\r\n|\r|\n)/g,"<br />"),console.log("hi "+this.message),this.main.socket.emit("message sent",this.message,this.main.user),this.message="")},this.init=function(e){this.main=e},this.increaseRows=function(){this.message+="\n"}}]),app.directive("customKeyPress",function(){return function(e,s,t){s.bind("keydown keypress",function(s){if(13===s.which){var n=s.ctrlKey?"onCtrlEnterPressed":"onEnterPressed";e.$apply(function(){e.$eval(t[n])}),s.preventDefault()}})}}),app.directive("nemooMessageInput",function(){return{restrict:"E",templateUrl:"/views/messageInput.ejs",controller:"MessageInputCtrl",controllerAs:"messageCtrl"}});