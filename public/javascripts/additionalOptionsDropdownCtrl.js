var app = angular.module('App');

app.controller('AdditionalOptionsDropdownCtrl', function($scope) {
    $scope.ddSelectOptions = [
        {
            text: 'Emoticon (People)',
            pageKey: 'people'
        },
        {
            text: 'Emoticon (Nature)',
            pageKey: 'nature'
        },
        {
            text: 'Emoticon (Object)',
            pageKey: 'object'
        },
        {
            text: 'Emoticon (Places)',
            pageKey: 'places'
        },
        {
            text: 'Emoticon (Symbol)',
            pageKey: 'symbol'
        },
    ];

    $scope.ddSelectSelected = {
        text: 'Emoticon (People)',
        pageKey: 'people'
    };

    $scope.selectHandler = function(selected) {
        $scope.$parent.handlePageChange(selected);
    };
});

app.directive('nemooAdditionalOptionsDropdown', function(){
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/views/additionalOptionsDropdown.ejs',
        controller: 'AdditionalOptionsDropdownCtrl',
    };
});