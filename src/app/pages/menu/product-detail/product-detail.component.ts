import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  itemDetail: any;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.detailItemList.subscribe((productDetail) => {
      this.itemDetail = productDetail;
      console.log(this.itemDetail, 'Testing Detail');
    });

    // Load the persisted product detail if it exists
    // const persistedProductDetail = this.menuService.getStoredProductDetail();
    // if (persistedProductDetail) {
    //   this.itemDetail = persistedProductDetail;
    // }
  }
}
