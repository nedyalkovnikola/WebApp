app.directive('appInfo', function() {
    return {
        restrict: 'E',
        scope: {
            info: '=',
            plusOne: '&'
        },

        templateUrl: 'js/directives/appInfo.html'
    };
});