import { Component, OnInit } from '@angular/core';
declare let Cesium : any; // Cesium variable declaration

@Component({
  selector: 'app-cesium-map',
  templateUrl: './cesium-map.component.html',
  styleUrls: ['./cesium-map.component.css']
})
export class CesiumMapComponent implements OnInit {

  ngOnInit(): void {
    // Cesium default access token
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzNjdhMDRiZC0wNDAwLTRjNjQtYmI1Ni0zMDM3YTQ4Zjk2MGMiLCJpZCI6MTUwNTg0LCJpYXQiOjE2ODgxODU1MDB9.2y5Pp0V0TeMp0YJiuXiDnlsj2FiiVXP3XZdK2tcbAls';

    // Initialize the Cesium Viewer in the element with container ID
    const viewer = new Cesium.Viewer('cesium-container');
  }

}
