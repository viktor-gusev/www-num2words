/**
 * AMD module application navigator.
 *
 * Created by Alex Gusev <flancer64@gmail.com>
 */
(function (define) {
    'use strict';
    define(function (require) {

        /**
         * @function directiveNavigatorCtrl
         *
         * @param $scope
         */
        function directiveNavigatorCtrl($scope) {
            /* do nothing */
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
}(window.define));
