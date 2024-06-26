import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}
  // number for array
  private itemNumber = new BehaviorSubject<number>(0);
  itemNumber$ = this.itemNumber.asObservable();

  updateItemNumber(itemNumber: number) {
    this.itemNumber.next(itemNumber);
  }

  // cart array carry
  private cartList = new BehaviorSubject<any[]>([]);
  currentCartList = this.cartList.asObservable();

  updateCartList(product: any) {
    const currentList = this.cartList.value;
    currentList.push(product);
    this.cartList.next(currentList);
  }

  // product Detail
  private productDetail = new BehaviorSubject<any>(
    this.getStoredProductDetail()
  );
  detailItemList = this.productDetail.asObservable();

  detailProduct(product: any) {
    this.productDetail.next(product);
    this.storeProductDetail(product);
  }

  private storeProductDetail(product: any) {
    localStorage.setItem('productDetail', JSON.stringify(product));
  }

  private getStoredProductDetail(): any {
    const storedProduct = localStorage.getItem('productDetail');
    return storedProduct ? JSON.parse(storedProduct) : null;
  }
}
