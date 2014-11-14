/**
 * Define Main NG module (Application itself).
 * @module teq.core.spa.App
 */
(function (define) {
    'use strict';
    /* List of AMD modules to be loaded with RequireJS. */
    var amdDepends = [
        //@formatter:off
        '+angular',
        '+ngUiRouter',
        '+config',
        '+ngUiBootstrap',
        'angulartics',
        'angularticsGa',
        'main/js/inc/navig'
        //@formatter:on
    ]

    define(function (require, exports, module) {
        /**
         * AMD dependencies:
         */
        /* RequireJS modules. */
        var ng = require('angular')
        require('ngUiRouter')
        require('ngUiBootstrap')
        require('angulartics')
        require('angularticsGa')
        /* Application and module configs. */
        var cfgApp = require('config')
        /* This module includes. */
        var navig = require('main/js/inc/navig')

        /**
         * Angular module definition:
         */
        /* NG modules dependencies. */
        var ngDepends = [
            //@formatter:off
            cfgApp.MODULE._UI_ROUTER,
            cfgApp.MODULE._UI_BOOTSTRAP,
            cfgApp.MODULE._ANALYTICS,
            cfgApp.MODULE._ANALYTICS_GOOGLE
            //@formatter:on
        ]
        /**
         * Angular module
         * @class main.App
         * @type {*|module}
         */
        var ngMod = ng.module(cfgApp.MODULE.MAIN, ngDepends)

        /**
         * Setup module's states.
         *
         * @method
         * @private
         * @param $stateProvider
         * @param $urlRouterProvider
         */
        function setupSpaStates($stateProvider, $urlRouterProvider) {
            // setup default route
            $urlRouterProvider.otherwise('/state/about')
            // Setup states
            $stateProvider.state({
                name:        'a',
                url:         '/state',
                templateUrl: 'app/mod/main/tmpl/main.html'
            })

            $stateProvider.state({
                name:        'a.about',
                url:         '/about',
                templateUrl: 'app/mod/main/tmpl/state/about.html'
            })



            $stateProvider.state({
                name:        'a.home',
                url:         '/home',
                templateUrl: 'app/mod/main/tmpl/state/home.html'
            })

             }

        /**
         * Initialise service providers used by this module.
         */
        ngMod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            setupSpaStates($stateProvider, $urlRouterProvider);
        }]);


        ngMod.directive('appNavig', navig.directiveNavigator)


        function CarouselDemoCtrl($scope) {
            $scope.myInterval = 5000;
            var slides = $scope.slides = [];
            $scope.addSlide = function () {
                var newWidth = 600 + slides.length;
                slides.push({
                    image: 'http://placekitten.com/' + newWidth + '/300',
                    text:  ['More', 'Extra', 'Lots of', 'Surplus'][slides.length % 4] + ' ' + ['Cats', 'Kittys',
                        'Felines', 'Cutes'][slides.length % 4]
                });
            };
            for (var i = 0; i < 4; i++) {
                $scope.addSlide();
            }
        }

        ngMod.controller('CarouselDemoCtrl', CarouselDemoCtrl)

        // remove 'Loading...' indicator
        var msg = angular.element(document.querySelector('#teq_core_spa_loading'));
        msg.remove();
        // Launch main angular module
        angular.bootstrap(document.getElementsByTagName('body')[0], [cfgApp.MODULE.MAIN]);

        /* Return NG-module to RequireJS. */
        return ngMod;
    });
}(window.define));
