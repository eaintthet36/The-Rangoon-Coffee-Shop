import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  ngOnInit(): void {
  
  }
  cart: any[] = [];
 cartList: any[] =[];
  
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
  },{
    "id": "2",
    "title": "Caramel Latte",
    "description": "Description of Product B",
    "price": 29.99,
    "image": "assets/images/homepage/caramel.png"
    }
]
constructor(private menuService: MenuService) {}
addToCart(product: {id: any}) {
  this.cart.push(product.id);
  const itemNumber = this.cart.length;

  this.cartList.push(product);
  const cartLists = this.cartList;

  console.log(cartLists, 'Cart Listsss');
  
  console.log('Current cart:', this.cart, 'Length', itemNumber);
  this.menuService.updateItemNumber(itemNumber); 
}

}
