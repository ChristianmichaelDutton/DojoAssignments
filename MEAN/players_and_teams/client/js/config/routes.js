//Define our routes to render partials
myAppModule.config(function($routeProvider){
   $routeProvider
      .when("/adventurers", {
         templateUrl: "static/partials/adventurers.html"
      })
      .when("/rosters", {
         templateUrl: "static/partials/rosters.html"
      })
      .when("/factions", {
         templateUrl: "static/partials/factions.html"
      })
      .otherwise({
         redirectTo: "/adventurers"
      })
})
