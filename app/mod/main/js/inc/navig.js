/**
 * AMD module application navigator.
 *
 * Created by Alex Gusev <flancer64@gmail.com>
 */
(function (define, require) {
    'use strict';
    /* List of AMD modules to be loaded with RequireJS. */
    var amdDepends = [
        //@formatter:off
        'angular',
        'ngUiRouter',
        'config'
        //@formatter:on
    ];
    define(amdDepends, function (angular, uirout, cfg) {
        /* load required code sources */
        var ng = angular;


        /**
         * @function directiveNavigatorCtrl
         *
         * @param $scope
         */
        function directiveNavigatorCtrl($scope) {

        }

        /**
         * @function directiveAttrSelect
         *
         * @param directiveNavigator
         * @return {}
         */
        function directiveNavigator() {
            return {
                restrict:    'EA',
                scope:       {},
                controller:  ['$scope', directiveNavigatorCtrl],
                templateUrl: 'app/mod/main/tmpl/dir/navig.html'
            }
        }

        /**
         * AMD interface
         *
         * @class amdReturn
         */
        return {
            directiveNavigator: directiveNavigator
        };

    });
}(window.define, window.require));
