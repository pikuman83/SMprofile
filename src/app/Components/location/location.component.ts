import { Component, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html'
})
export class LocationComponent {

  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow; 
  position: google.maps.LatLngLiteral = {lat: 41.410109, lng: 2.209863}; //coordenadas placeholder "SM Barcelona"

  /**
   * @param solicita ubicación
   * si se obtiene permiso, asigna las nuevas coordenadas a la variable position, la cual esta observada
   * por varios elementos en la html.
   */
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: GeolocationPosition) => {
        if (position) {
          this.position = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }
      },
        (error: GeolocationPositionError) => console.error(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

}