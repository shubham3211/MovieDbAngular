// John Papa [Style Y101] IIFE
(function(){
  'use strict';
  // John Papa [Style Y170] Startup logic
  angular
    .module('app', [
      'components',
      'ngRoute',
      'ui.bootstrap',
      // 'app.login',
      'app.header',
      // 'app.account',
      'app.movies'
    ]);

})();
