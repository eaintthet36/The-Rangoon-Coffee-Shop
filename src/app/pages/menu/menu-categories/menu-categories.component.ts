import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  constructor(private menuService: MenuService){};
  listOfProducts: any[] = [];

  selectedButton: string = '';
  ngOnInit(): void {
    // this.menuService.currentProducts.subscribe(allProducts => {
    //   this.listOfProducts = allProducts;
    // });// throw new Error('Method not implemented.');
  }
  selectButton(button: string) {
    this.selectedButton = button;
  }
}
