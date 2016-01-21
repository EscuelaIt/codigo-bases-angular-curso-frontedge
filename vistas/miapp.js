angular
  .module("miApp", ["ngRoute"])
  .config(["$routeProvider", function($routeProvider){
    $routeProvider
      .when("/", {
        controller: "MiAppController",
        controllerAs: "vm",
        templateUrl: "home.html"
      })
      .when("/otra", {
        controller: "MiAppController",
        controllerAs: "vm",
        templateUrl: "otra.html"
      })
  }])
  .factory("peliculasFactory", function(){
    var pelis = [];
    return {
      peliculas: pelis,
      crearPelicula: function(nueva){
        pelis.push(nueva);
      }
    }
  })
  .controller("MiAppController", ["peliculasFactory", function(peliculasFactory){
    console.log("Inicializo mi App");
    var scope = this;
    scope.nuevaPeli = "Lo que el vi...";
    scope.peliculas = peliculasFactory.peliculas;

    scope.agregaPeli = peliculasFactory.crearPelicula;
  }])
  .controller("NavController", function(){
    var vm = this;
    vm.enlace = "otra seccion";
  });
