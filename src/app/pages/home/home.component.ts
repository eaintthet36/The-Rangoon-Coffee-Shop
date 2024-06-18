import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

products =[ {
        
            "id": "1",
            "title": "Chocolate Cappuccino",
            "description": "Description of Product B",
            "price": 30,
            "image": "assets/images/homepage/cappuccino.png"
        },
        {
            "id": "2",
            "title": "Caramel Latte",
            "description": "Description of Product B",
            "price": 29.99,
            "image": "assets/images/homepage/caramel.png"
        },
        {
          "id": "3",
          "title": "Mocha Latte",
          "description": "Description of Product B",
          "price": 18.99,
          "image": "assets/images/homepage/mocha.png"
      },  {
        "id": "4",
        "title": "Mocha Latte",
        "description": "Description of Product B",
        "price": 29.99,
        "image": "assets/images/homepage/mocha.png"
    },
    {
      "id": "4",
      "title": "Mocha Latte",
      "description": "Description of Product B",
      "price": 29.99,
      "image": "assets/images/homepage/mocha.png"
  },
  {
    "id": "2",
    "title": "Caramel Latte",
    "description": "Description of Product B",
    "price": 29.99,
    "image": "assets/images/homepage/caramel.png"
},
{
  "id": "2",
  "title": "Caramel Latte",
  "description": "Description of Product B",
  "price": 29.99,
  "image": "assets/images/homepage/caramel.png"
},
      ]


  constructor(private router: Router){}

}
