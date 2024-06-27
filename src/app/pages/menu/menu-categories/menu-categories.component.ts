import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css'],
})
export class MenuCategoriesComponent implements OnInit {
  constructor(private menuService: MenuService) {}
  listOfProducts: any[] = [];

  selectedButton: string = '';
  ngOnInit(): void {
    this.menuService.productList.subscribe((allProducts) => {
      this.listOfProducts = allProducts;
      console.log(this.listOfProducts, 'shi lr');
    });
  }
  selectButton(button: string) {
    this.selectedButton = button;
  }
}
