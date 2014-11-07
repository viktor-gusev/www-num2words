/**
 * Created by Alex Gusev <flancer64@gmail.com>
 */

/** Configure RequireJS ...  */
require.config({
    baseUrl: 'app/mod',
    paths:   {
        angular:       '../../lib/angular',
        ngUiRouter:    '../../lib/angular-ui-router',
        ngUiBootstrap: '../../lib/ui-bootstrap-tpls',
        angulartics:   '../../lib/angulartics.min',
        angularticsGa: '../../lib/angulartics-ga.min'
    },
    /* TODO: what is 'shim' and 'exports'??? */
    shim:    {
        'angular':       {'exports': 'angular'},
        'ngUiRouter':    {
            deps:      ['angular'],
            'exports': 'angular'
        },
        'ngUiBootstrap': {
            deps:      ['angular'],
            'exports': 'angular'
        },
        'angulartics':   {
            deps:      ['angular'],
            'exports': 'angular'
        },
        'angularticsGa': {
            deps:      ['angular'],
            'exports': 'angular'
        }
    }
});

/**
 * Load application with dependencies and launch it.
 */

require([
    'main/js/App'
], function () {
    /* init ISC */
});

console.log("Get the Tequila shot!");