/**
 * This is AMD module to collect all hardcoded constants used in the Tryton Tequila project.
 * This module should NOT be included into the target Tequila as is (we should use module-level configs or
 * dynamically composed configs (using REST)).
 *
 * @module
 * @main
 */
(function (define) {
    'use strict';
    /* List of AMD modules to be loaded with RequireJS. */
    var amdDepends = [];
    define(amdDepends, function () {
        return {
            /* List of angular modules used in the application. */
            MODULE: {
                _UI_BOOTSTRAP:     'ui.bootstrap',
                _UI_ROUTER:        'ui.router',
                _ANALYTICS:        'angulartics',
                _ANALYTICS_GOOGLE: 'angulartics.google.analytics',
                MAIN:              'main.App'

            }
        };
    });
}(window.define));
