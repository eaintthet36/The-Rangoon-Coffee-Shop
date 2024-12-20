import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
})
export class CoffeeComponent implements OnInit {
  coffees = [
    {
      name: 'Americano',
      image: 'assets/images/menu/americano.png',
      des: 'long black',
      star: 'assets/images/menu/star.png',
      rating: '5.0',
      price: '$ 12.00',
    },
    {
      name: 'Affogato',
      image: 'assets/images/menu/Affogato.png',
      star: 'assets/images/menu/star.png',
      des: 'Espresso poured over Gelato',
      rating: '4.8',
      price: '$ 17.00',
    },
    {
      name: 'Greek Frappe',
      image: 'assets/images/menu/Greek.png',
      star: 'assets/images/menu/star.png',
      des: 'with Vanilla',
      rating: '5.0',
      price: '$ 15.00',
    },
    {
      name: 'Cream Milkshake',
      image: 'assets/images/menu/Cream.png',
      star: 'assets/images/menu/star.png',
      des: 'with Cookies',
      rating: '5.0',
      price: '$ 14.00',
    },
    {
      name: 'Latte',
      image: 'assets/images/menu/Latte.png',
      star: 'assets/images/menu/star.png',
      des: 'Original Taste',
      rating: '3.0',
      price: '$ 7.00',
    },
    {
      name: 'Espresso',
      image: 'assets/images/menu/Espresso.png',
      star: 'assets/images/menu/star.png',
      des: 'Ristretto',
      rating: '3.0',
      price: '$ 8.00',
    },
    {
      name: 'Cold Brew',
      image: 'assets/images/menu/Cold.png',
      star: 'assets/images/menu/star.png',
      des: 'with Condensed Milk',
      rating: '5.0',
      price: '$ 10.00',
    },
    {
      name: 'Turkish Coffee',
      image: 'assets/images/menu/Turkish.png',
      star: 'assets/images/menu/star.png',
      des: 'Original Style',
      rating: '5.0',
      price: '$ 15.00',
    },
    {
      name: 'Cortado',
      image: 'assets/images/menu/Cortado.png',
      star: 'assets/images/menu/star.png',
      des: 'Milk Cream',
      rating: '5.0',
      price: '$ 8.00',
    },
  ];
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  detailProduct(item: any) {
    console.log(item, 'clicked detail');
  }
}
