
angular.module('healthCalculators', ['ionic', 'healthCalculators.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.bmi-calculator', {
    url: '/bmi-calculator',
    views: {
      'menuContent': {
        templateUrl: 'templates/bmi-calculator.html',
        controller: 'BmiCtrl'
      }
    }
  })

  .state('app.ffmi-calculator', {
      url: '/ffmi-calculator',
      views: {
        'menuContent': {
          templateUrl: 'templates/ffmi-calculator.html',
          controller: 'FfmiCtrl'
        }
      }
    })

  .state('app.bmr-calculator', {
      url: '/bmr-calculator',
      views: {
        'menuContent': {
          templateUrl: 'templates/bmr-calculator.html',
          controller: 'BmrCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
