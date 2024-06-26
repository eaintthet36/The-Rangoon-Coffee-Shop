import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent {
  selectedButton: string = '';

  selectButton(button: string) {
    this.selectedButton = button;
  }
}
