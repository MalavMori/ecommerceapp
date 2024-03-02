import { Component, OnInit, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { CartproductComponent } from '../components/cartproduct/cartproduct.component';
import { CartdataService } from '../services/cartdata.service';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatIconModule, MatButtonModule,CartproductComponent,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  private cartservice = inject(CartdataService)
  cartproductdata : any = []
  totalprice : number = 0;
  iscartempty : boolean = true 
  ngOnInit(): void {
      this.cartproductdata = this.cartservice.getCartData()
      console.log(this.cartproductdata);
      this.totalprice = this.cartservice.calculateCart()
      if (this.cartproductdata.length) {
           this.iscartempty = false
      }
  }
  updateCart(data : any){
    this.cartproductdata = data
    this.totalprice = this.cartservice.calculateCart()
  }
  updateCartPrice(){
    this.totalprice = this.cartservice.calculateCart()

  }
  buyProduct(){
    Swal.fire('Sorry', 'We Are Working On It', 'question');

  }
}
