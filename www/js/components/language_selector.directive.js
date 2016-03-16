(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('ngTranslateLanguageSelect', ngTranslateLanguageSelect);

    function ngTranslateLanguageSelect() {
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: 'js/components/language_selector.directive.html',
            controller: languageSelector,
            controllerAs: 'vm'
        };
    }

    function languageSelector(LocaleService) {
        /*jshint validthis: true */
        var vm = this;

        vm.changeLanguage = changeLanguage;
        vm.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        vm.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        vm.visible = vm.localesDisplayNames && vm.localesDisplayNames.length > 1;
        
        function changeLanguage(locale) {
            LocaleService.setLocaleByDisplayName(locale);
        }
    }

})();