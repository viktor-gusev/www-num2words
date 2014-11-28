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
    // SHIM - Modules and their dependent modules
    // http://stackoverflow.com/questions/23936426/why-do-i-need-to-add-a-shim-for-angularjs-when-using-require-js
    // no need for export
    shim:    {
        'angular':       {'exports': 'angular'},
        'ngUiRouter':  ['angular'],
        'ngUiBootstrap':['angular'],
        'angulartics': ['angular'],
        'angularticsGa':['angular']


    }
});

/**
 * Load application with dependencies and launch it.
 */

require([
    'main/js/App'
], function () {
    /* insert non-Angular init code here */
});
// TODO if unnecessary delete on 12.12.14
// Oh, do we really need this log?
// console.log("Get the Tequila shot!");