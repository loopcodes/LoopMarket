import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  class = [
    { 'id': 1, 'name': 'Individual', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'image': '../../assets/g.jpg' },
    { 'id': 2, 'name': 'Business', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'image': '../../assets/c.jpg' },
    { 'id': 3, 'name': 'Family', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'image': '../../assets/d.jpg' },
    { 'id': 4, 'name': 'Industrial', 'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry', 'image': '../../assets/e.jpg' },
  ]
}
