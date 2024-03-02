import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CartdataService } from '../../services/cartdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartproduct',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './cartproduct.component.html',
  styleUrl: './cartproduct.component.scss',
})
export class CartproductComponent {
  private cartservice = inject(CartdataService);
  @Input() producttitle: string = '';
  @Input() productimg: string = '';
  @Input() productid: number = 0;
  @Input() productcmrp: number = 0;
  @Input() productmrp: number = 0;
  @Input() productquantity: number = 0;

  @Output() removeitem = new EventEmitter();
  @Output() updatecartprice = new EventEmitter();

  constructor(private router: Router) {}

  quantity(productid: number, type: string) {
    this.cartservice.productQuantity(productid, type);
    let productdata = this.cartservice.getOneCart(productid);
    this.productquantity = productdata.quantity;
    this.updatecartprice.emit()
  }
  removeproduct(productid: number) {
    this.cartservice.removeProduct(productid);
    this.removeitem.emit(this.cartservice.getCartData());
  }
}
