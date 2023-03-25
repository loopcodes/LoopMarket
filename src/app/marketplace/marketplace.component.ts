import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
chart:any;
  constructor() { }

  home = [
    { 'id': 1, 'name': 'Tomatoes',  'price':200, 'image': '../../assets/tomato.webp' },
    { 'id': 2, 'name': 'Carrots',  'price':200, 'image': '../../assets/carrot.jpg' },
    { 'id': 3, 'name': 'Bell Peppers', 'price':200, 'image': '../../assets/sweet-pepper-colorful-sweet-bell-peppers-natural-royalty-free-image-1611355757_.jpg' },
    { 'id': 4, 'name': 'Onions', 'price':200, 'image': '../../assets/onion.jpg' },
  ]

  ngOnInit(): void{
  this.chart = document.getElementById('my_first_chart');
  Chart.register(...registerables);
  this.loadChart();
}

loadChart(): void{
  new Chart(this.chart, {
    type: 'line',
    data: {
      datasets: [{
        data: [30000, 60000, 40000, 50000, 40000, 55000, 75000, 65000, 75000, 50000, 85000],
        label: 'Current Market Value in Naira',
        backgroundColor: '#1ed760',
        tension: 0.2,
        borderColor: '#1ed760',
      }],
      labels:['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    },
    options: {
      responsive: true,
      maintainAspectRatio:false,
      scales: {
        y: {
          grid: {
            borderDash: [1, 2],
            drawBorder: false,
          },
          beginAtZero: true,
        },
        x: {
          grid: {
            drawBorder: false,
          },
        },
      },
    }
  });
}







  foodDetails = [
    {
      id: 1,
      foodName:"Fresh Tomatoes",
      foodDetails:"Funfact: The water content of tomatoes is around 95%. the other 5% consist mainly of carbohydrates and fiber.",
      foodPrice:200,
      foodImg:"../../assets/tomato.webp",
    },

    {
      id: 2,
      foodName:"Fresh Corns",
      foodDetails:"Funfact: Corn is high in carbohydrates and packed with fiber, vitamins and minerals. It is also relatively low in protein and fat.",
      foodPrice:500,
      foodImg:"../../assets/corn.jpg",
    },

    {
      id: 3,
      foodName:"Fresh Bell Peppers",
      foodDetails:"Funfact: Bell peppers are composed of 92% of water. The rest is carbohydrates and small amounts of protein and fat.",
      foodPrice:100,
      foodImg:"../../assets/sweet-pepper-colorful-sweet-bell-peppers-natural-royalty-free-image-1611355757_.jpg",
    },

    {
      id: 4,
      foodName:"Fresh Green Lettuce",
      foodDetails:"Funfact: Lettuce are one of the very low calorie green vegetables. It is also rich in vitamins and minerals.",
      foodPrice:2000,
      foodImg:"../../assets/Iceberg-lettuce.jpg",
    },

    {
      id: 5,
      foodName:"Fresh Carrots",
      foodDetails:"Funfact: Carrots water content ranges from 86-95%, and the edible portion consists of around 10% carbohydrates.",
      foodPrice:100,
      foodImg:"../../assets/carrot.jpg",
    },

    {
      id: 6,
      foodName:"Fresh Green Broccoli",
      foodDetails:"Funfact: Raw broccoli contains almost 90% water, 7% carbohydrates, 3% protein and almost no fat.",
      foodPrice:1500,
      foodImg:"../../assets/Broccoli-florets.jpg",
    },

    {
      id: 7,
      foodName:"Fresh Onions",
      foodDetails:"Funfact: Raw onions are very low in calories, with only 40 calories per 3.5 ounces (100 grams). By fresh weight, they are 89% water, 9% carbohydrates and 1.7% fiber, with tiny amounts of protein and fat.",
      foodPrice:50,
      foodImg:"../../assets/onion.jpg",
    },

    {
      id: 8,
      foodName:"Fresh Green Peas",
      foodDetails:"Funfact: Green peas have an impressive nutrition profile. Their calorie content is fairly low, with only 62 calories per 1/2-cup (170-gram) serving. About 70% of those calories come from carbohydrates.",
      foodPrice:50,
      foodImg:"../../assets/green.jpg",
    },

    {
      id: 9,
      foodName:"Fresh Eggplants",
      foodDetails:"Funfact: Eggplants are a nutrient-dense food, meaning they contain a good amount of vitamins, minerals and fiber in few calories. They also contain small amounts of other nutrients like magnesium and copper.",
      foodPrice:2500,
      foodImg:"../../assets/Eggplant.webp",
    },
  ]

  quantity:number=1;
  i=1
  plus(){
    if(this.i !=1000){
      this.i++;
      this.quantity=this.i;
    }
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity=this.i;
    }
  }
  
}
