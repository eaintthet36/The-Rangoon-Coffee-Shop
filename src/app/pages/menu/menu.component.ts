import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  cart: any[] = [];
  cartList: any[] = [];
  allProduct: any[] = [];
  products = [
    {
      id: '1',
      title: 'Chocolate Cappuccino',
      description: 'Description of Product B',
      categories: 'hot',
      price: 30,
      image: 'assets/images/homepage/cappuccino.png',
    },
    {
      id: '2',
      title: 'Caramel Latte',
      description: 'Description of Product B',
      categories: 'cold',
      price: 29.99,
      image: 'assets/images/homepage/caramel.png',
    },
    {
      id: '3',
      title: 'Mocha Latte',
      description: 'Description of Product B',
      categories: 'dessert',
      price: 18.99,
      image: 'assets/images/homepage/mocha.png',
    },
    {
      id: '4',
      title: 'Mocha Latte',
      description: 'Description of Product B',
      categories: 'dessert',

      price: 29.99,
      image: 'assets/images/homepage/mocha.png',
    },
    {
      id: '4',
      title: 'Mocha Latte',
      description: 'Description of Product B',
      categories: 'dessert',
      price: 29.99,
      image: 'assets/images/homepage/mocha.png',
    },
    {
      id: '2',
      title: 'Caramel Latte',
      description: 'Description of Product B',
      categories: 'cold',
      price: 29.99,
      image: 'assets/images/homepage/caramel.png',
    },
    {
      id: '2',
      title: 'Caramel Latte',
      description: 'Description of Product B',
      categories: 'cold',
      price: 29.99,
      image: 'assets/images/homepage/caramel.png',
    },
    {
      id: '2',
      title: 'Caramel Latte',
      description: 'Description of Product B',
      categories: 'hot',
      price: 29.99,
      image: 'assets/images/homepage/caramel.png',
    },
  ];
  constructor(private menuService: MenuService, private _router: Router) {}

  ngOnInit(): void {
    this.allProduct.push(this.products);
    this.menuService.aProducts(this.products);
  }
  addToCart(product: { id: any }) {
    this.cart.push(product.id);
    const itemNumber = this.cart.length;

    this.cartList.push(product);
    this.menuService.updateItemNumber(itemNumber);
    this.menuService.updateCartList(product);
  }

  toProductDetail(product: any) {
    this.menuService.detailProduct(product);
    this._router.navigate(['product-detail']);
  }
}
