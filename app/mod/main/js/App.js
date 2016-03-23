/**
 * Define Main NG module (Application itself).
 * @module teq.core.spa.App
 */
(function (define) {
    'use strict';
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
        var cntrl = require('main/js/inc/cntrl')
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
            $urlRouterProvider.otherwise('/a/flags')
            // Setup states
            $stateProvider.state({
                /* frame for all other states */
                name:        'a',
                url:         '/a',
                templateUrl: 'app/mod/main/tmpl/main.html'
            })

            $stateProvider.state({
                /* homepage states */
                name:        'a.dropdown',
                url:         '/dropdown',
                templateUrl: 'app/mod/main/tmpl/state/dropdown.html'
            })

            $stateProvider.state({
                /* homepage states */
                name:        'a.flags',
                url:         '/flags',
                templateUrl: 'app/mod/main/tmpl/state/flags.html'
            })

        }

        /**
         * Initialise service providers used by this module.
         */
        ngMod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            setupSpaStates($stateProvider, $urlRouterProvider);
        }]);

        ngMod.directive('appNavig', navig.directiveNavigator)
        ngMod.controller('appCntrl', cntrl.controller)

        // remove 'Loading...' indicator
        var msg = angular.element(document.querySelector('#teq_core_spa_loading'));
        msg.remove();
        // Launch main angular module
        angular.bootstrap(document.getElementsByTagName('body')[0], [cfgApp.MODULE.MAIN]);

        /* Return NG-module to RequireJS. */
        return ngMod;
    });
}(window.define));
