import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-second-session',
  templateUrl: './menu-second-session.component.html',
  styleUrls: ['./menu-second-session.component.css'],
})
export class MenuSecondSessionComponent implements OnInit {
  coffee: any;
  tea: any;
  food: any;
  dessert: any;
  menuItems = [
    {
      name: 'Coffee',
      activeImage: 'assets/images/menu/coffeehover.png',
      inactiveImage: 'assets/images/menu/coffeenothover.png',
      isActive: false,
      isHovered: false,
    },
    {
      name: 'Tea',
      activeImage: 'assets/images/menu/teahover.png',
      inactiveImage: 'assets/images/menu/teanothover.png',
      isActive: false,
      isHovered: false,
    },
    {
      name: 'Food',
      activeImage: 'assets/images/menu/foodhover.png',
      inactiveImage: 'assets/images/menu/foodnothover.png',
      isActive: false,
      isHovered: false,
    },
    {
      name: 'Dessert',
      activeImage: 'assets/images/menu/deserthover.png',
      inactiveImage: 'assets/images/menu/desertnothover.png',
      isActive: false,
      isHovered: false,
    },
  ];
  ngOnInit(): void {
    const coffee = this.menuItems.find((item) => item.name === 'Coffee');
    if (coffee) {
      this.onClick(coffee);
    }
  }
  onHover(item: any, isHovering: boolean) {
    item.isHovered = isHovering;
  }

  onClick(item: any) {
    this.menuItems.forEach((i) => (i.isActive = false));
    if (item.name === 'Coffee') {
      item.isActive = true;
      this.coffee = this.coffee === item.name ? null : item.name;
      this.tea = null;
      this.dessert = null;
      this.food = null;
    } else if (item.name === 'Tea') {
      item.isActive = true;
      this.tea = this.tea === item.name ? null : item.name;
      this.coffee = null;
      this.dessert = null;
      this.food = null;
    } else if (item.name === 'Dessert') {
      item.isActive = true;
      this.dessert = this.dessert === item.name ? null : item.name;
      this.coffee = null;
      this.tea = null;
      this.food = null;
    } else if (item.name === 'Food') {
      item.isActive = true;
      this.food = this.food === item.name ? null : item.name;
      this.coffee = null;
      this.tea = null;
      this.dessert = null;
    }
  }
}
