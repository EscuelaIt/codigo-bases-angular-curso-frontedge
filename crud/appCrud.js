angular
  .module("appCrud", [])
  .controller("appCrudController", ["$http", function($http){
    var vm = this;
    vm.error = false;
    vm.peliculas = [];
    vm.clasificaciones = [];
    vm.nuevaPelicula = {
      nombre: '',
      director: '',
      clasificacion: 'Drama'
    };
    vm.editando = false;

    function traerPeliculas(){
      $http.get('http://localhost:3000/peliculas')
      .then(function(salida){
        vm.peliculas = salida.data;
      }, function(salida){
        vm.error = "Error: " + salida.status;
      });
    }
    traerPeliculas();

    $http.get('http://localhost:3000/clasificaciones')
      .then(function(res){
        vm.clasificaciones = res.data;
      });

    vm.insertaPelicula = function(){
      $http.post('http://localhost:3000/peliculas', vm.nuevaPelicula)
        .then(function(){
          traerPeliculas();
        });
    }

    vm.borrarPelicula = function(id){
      $http.delete('http://localhost:3000/peliculas/' + id)
        .then(function(){
          traerPeliculas();
        });
    }

    vm.editarPelicula = function(index){
      console.log('editando ', vm.peliculas[index]);
      vm.PeliculaEditar = vm.peliculas[index];
      vm.editando = true;
    }

    vm.guardarPelicula = function(){
      $http.put('http://localhost:3000/peliculas/' + vm.PeliculaEditar.id, vm.PeliculaEditar)
        .then(function(){
          vm.editando = false;
        })
    }
  }]);
