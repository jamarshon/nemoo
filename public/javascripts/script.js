// script.js
    var app = angular.module('App');

    var MAX_QUEUE_LENGTH = 25;

    var scrollBottom = function() {
        var scrollContainer = document.getElementById('scrollable-container');
        $(scrollContainer).scrollTop(scrollContainer.scrollHeight);
    };

    // For the user
    app.controller('MainCtrl', ['$scope', function($scope) {
        var that = this;
        this.socket = io();
        this.socket.on('user connected', function(){
            $scope.$apply(function(){ that.currentNumOnline++; });
        });
        this.socket.on('user disconnected', function(){
            $scope.$apply(function(){ that.currentNumOnline--; });
        });
    }]);

    app.controller('DiscussionCtrl', ['$routeParams', '$timeout', '$scope', '$templateCache',
                        function($routeParams, $timeout, $scope, $templateCache) {
        var that = this;
        var page = $routeParams.page;
        console.log(page);
        $templateCache.remove('/partials/' + page);
        // Scroll the container to the bottom
        var scrollContainer = document.getElementById('scrollable-container');
        $timeout(function(){ scrollBottom(); }, 0);

        this.init = function(main){
            main.page = page;
            this.main = main;
            this.main.socket.on('message received', function(msg, user){
                var message = {
                    displayName: user.displayName,
                    profilePic: user.profilePic,
                    backgroundColor: user.backgroundColor,
                    created: user.created,
                    message: msg
                };
                if(that.data.length > MAX_QUEUE_LENGTH) {
                    that.data.shift();
                }
                that.data.push(message);
                $scope.$apply();
            });
        };
        
    }]);

    app.animation('.animate-message', [function() {
        return {
            enter: function(element) {
                $(element).addClass('animated bounce');
                scrollBottom();
            }
        };
    }]);

    

    