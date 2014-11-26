/**
 * AMD module for main controller.
 *
 * Created by Alex Gusev <flancer64@gmail.com>
 */
(function (define) {
    'use strict';
    define(function (require) {
        /* AMD dependencies */
        var ng = require('angular')
        var cfg = require('config')

        /**
         * @function directiveNavigatorCtrl
         *
         * @param $scope
         */
        function controller($scope, $http) {
            /* pin current context and save NG-scope inside... */
            var ctx = this
            ctx.scope = $scope
            /* ... create shortcut for the NG-scope through the pinned context */
            var scope = ctx.scope
            scope.$$$teqDbgScopeName = 'mainController'
            scope.locales = [{name: 'bg (Bulgarian) by Kouber Saparev', value: 'bg'},
                {name: 'cs (Czech) by Petr \'PePa\' Pavel', value: 'cs'},
                {name: 'de (German) by Piotr Klaban', value: 'de'},
                {name: 'dk (Danish) by Jesper Veggerby', value: 'dk'},
                {name: 'en_100 (Donald Knuth system, English) by Piotr Klaban', value: 'en_100'},
                {name: 'en_GB (British English) by Piotr Klaban', value: 'en_GB'},
                {name: 'en_IN (Indian English) by Piotr Klaban', value: 'en_IN'},
                {name: 'en_US (American English) by Piotr Klaban', value: 'en_US'},
                {name: 'es (Spanish Castellano) by Xavier Noguer', value: 'es'},
                {name: 'es_AR (Argentinian Spanish) by Martin Marrese', value: 'es_AR'},
                {name: 'es_MX (Mexican Spanish) by Martin Marrese and Pavel Oropeza', value: 'es_MX'},
                {name: 'es_VE (Venezuelan Spanish) by Martin Marrese and Pavel Oropeza', value: 'es_VE'},
                {name: 'et (Estonian) by Erkki Saarniit', value: 'et'},
                {name: 'fr (French) by Kouber Saparev', value: 'fr'},
                {name: 'fr_BE (French Belgium) by Kouber Saparev and Philippe Bajoit', value: 'fr_BE'},
                {name: 'he (Hebrew) by Hadar Porat', value: 'he'},
                {name: 'hu_HU (Hungarian) by Nils Homp', value: 'hu_HU'},
                {name: 'id (Indonesian) by Ernas M. Jamil and Arif Rifai Dwiyanto', value: 'id'},
                {name: 'it_IT (Italian) by Filippo Beltramini and Davide Caironi', value: 'it_IT'},
                {name: 'lt (Lithuanian) by Laurynas Butkus', value: 'lt'},
                {name: 'lv (Latvian) by Andrius Virbicianskas', value: 'lv'},
                {name: 'nl (Dutch) by WHAM van Dinter', value: 'nl'},
                {name: 'pl (Polish) by Piotr Klaban', value: 'pl'},
                {name: 'pt_BR (Brazilian Portuguese) by Igor Feghali', value: 'pt_BR'},
                {name: 'ro_RO (Romanian) by Bogdan Stancescu', value: 'ro_RO'},
                {name: 'ru (Russian) by Andrey Demenev', value: 'ru'},
                {name: 'sv (Swedish) by Robin Ericsson', value: 'sv'},
                {name: 'tr_TR (Turkish) by Shahriyar Imanov', value: 'tr_TR'},
                {name: 'ua (Ukrainian) by Andrey Demenev and Vital Leshchyk', value: 'ua'}]
            scope.selectedLocale = scope.locales[20]
            document.getElementById('input_number').focus()

            scope.sendRequest = function () {
                var num = ng.isDefined(scope.number) ? scope.number : '1000000'
                var locale = ng.isDefined(scope.selectedLocale) ? scope.selectedLocale.value : 'en_US'


                console.log('Input: num = ' + num + '; locale = ' + locale + ';')
                $http.get('app/api/num2words.php?num=' + num + '&locale=' + locale).success(function (data, status) {
                    var output_result = document.getElementById('output_result')
                    //                    scope.words = data.words;
                    output_result.value = data.words;

                    output_result.select();
                }).error(function (data, status) {
                    scope.words = data || "Request failed";
                })
            }
        }

        /**
         * AMD interface
         *
         * @class amdReturn
         */
        return {
            controller: controller
        };

    });
}(window.define));
