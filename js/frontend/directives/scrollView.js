﻿'use strict';

angular.module('AngularJS_Proj')
    .directive('scrollDirective', ['$window', function ($window) {
        return {
            link: function (scope, element, attrs) {
                angular.element($window).bind("scroll", function () {
                    if (this.pageYOffset >= 100) {
                        scope.boolChangeClass = true;
                    }
                    else {
                        scope.boolChangeClass = false;
                    }
                    scope.$apply();
                })
            }
        };
    }]);

