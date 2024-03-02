import { Component, Inject, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { Product } from '../services/productsdataarr';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import Swal from 'sweetalert2';
import { CartdataService } from '../services/cartdata.service';
@Component({
  selector: 'app-productpage',
  standalone: true,
  imports: [CommonModule,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './productpage.component.html',
  styleUrl: './productpage.component.scss'
})
export class ProductpageComponent implements OnInit {
  private productservice = inject(ProductdataService)
  private cartservice = inject(CartdataService)
  discountPercentage : number = 0;
  productdata : Product  | undefined = {
    id: 0,
    title: "",
    currentmrp : 0,
    mrp: 0,
    description: "",
    category: "",
    image: "",
    qualit:0,
    rate: 0,
    count: 0,
    sale:0
  }
  constructor(private route : ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      console.log(typeof data["productid"]);
      this.productdata = this.productservice.getProductData(Number.parseInt(data["productid"]))
      this.discountPercentage = this.productdata?.currentmrp 
      ?
       Math.floor((this.productdata.currentmrp * 100) / this.productdata.mrp) 
       :
        0;
    })
      
  }
  addToCart(){
    this.productdata?.id ? this.cartservice.addToCart(this.productdata?.id) : "";
    Swal.fire('Hello', 'Added In Cart', 'success');
  }
  buyProduct(){
    Swal.fire('Sorry', 'We Are Working On It', 'question');

  }
}
