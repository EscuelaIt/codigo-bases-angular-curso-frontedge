angular
  .module("peliculas", [])
  .controller("MiAppController", function(){
    console.log("Inicializo mi App");
    var scope = this;
    scope.algo = "Esto es algo y otra cosa";
    scope.nuevaPeli = "Lo que el vi...";
    scope.peliculas = [];

    scope.agregaPeli = function(){
      console.log('agregando...');
      scope.peliculas.push(scope.nuevaPeli);
    }
  });
