function initMap() { //funcion q se llama en el src del 1er script//
  var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18, //Acercando el mapa //
    center: laboratoriaLima //centro del mapa : Ubicacion en la que se centrara el mapa //
});
// marcador de mapa //
  var markadorLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

  var latitud,longitud;
  var funcionExito = function(posicion){
    latitud = posicion.coords.latitude; //obtendrá la latitud //
    longitud = posicion.coords.longitude; // obtendrá la longitud //
    var miUbicacion = new google.maps.Marker({
      position: {lat: latitud, lng:longitud},
      map: map
    });
    map.setZoom(18);
    map.setCenter({lat:latitud, lng:longitud}); // se asigna nuevo centro del mapa //

  }

  var funcionError = function (error) {
    alert("Tenemos un problema con encontrar tu ubicación");
  }

  function buscar() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
  }
  document.getElementById("encuentrame").addEventListener("click", buscar);
  var inputPartida = document.getElementById("punto-partida");
  var inputDestino = document.getElementById("punto-destino");

  new google.maps.places.Autocomplete(inputPartida);
  new google.maps.places.Autocomplete(inputDestino);

}
