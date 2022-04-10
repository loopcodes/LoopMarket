import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  home = [
    { 'id': 1, 'name': 'Tomatoes',  'price':200, 'image': '../../assets/tomato.webp' },
    { 'id': 2, 'name': 'Carrots',  'price':200, 'image': '../../assets/carrot.jpg' },
    { 'id': 3, 'name': 'Bell Peppers', 'price':200, 'image': '../../assets/sweet-pepper-colorful-sweet-bell-peppers-natural-royalty-free-image-1611355757_.jpg' },
    { 'id': 4, 'name': 'Onions', 'price':200, 'image': '../../assets/onion.jpg' },
  ]
}
