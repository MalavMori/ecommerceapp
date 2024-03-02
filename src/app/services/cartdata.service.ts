import { Injectable, inject } from '@angular/core';
import { ProductdataService } from './productdata.service';
interface Cart {
  productid: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root',
})
export class CartdataService {
  private cartdata: Cart[] = [];
  cartProductData : any[] = [];
  private productsservice = inject(ProductdataService);
  constructor(){
    if (!localStorage.getItem("cartdata")) {
      localStorage.setItem("cartdata",JSON.stringify(this.cartdata))
    }else{
      this.cartdata = JSON.parse(localStorage.getItem("cartdata") || "[]")
        
      
    }
  }
  addToCart(productid: number) {
    if (!this.cartdata.find((data) => data.productid === productid)) {
      this.cartdata.push({ productid, quantity: 1 });
      console.log(localStorage);
      localStorage.setItem("cartdata",JSON.stringify(this.cartdata))
      
    }
  }
  getCartData() {
    let cartProductData : any[] = [];
    this.cartdata.forEach((cart) => {
      cartProductData.push({
        ...this.productsservice
          .getAllData()
          .find((product) => product.id === cart.productid),
        quantity: cart.quantity,
      });
    });
    return cartProductData;
  }
  productQuantity(productid: number, type: string) {
    for (let i = 0; i < this.cartdata.length; i++) {
      const element = this.cartdata[i];
      if (productid === element.productid) {
        if (type === '+') {
          element.quantity++;
        } else {
          if (element.quantity > 1) {
            element.quantity--;
          }
        }
      }
    }
    localStorage.setItem("cartdata",JSON.stringify(this.cartdata))
    
  }
  getOneCart(productid:number){
    this.cartProductData= this.getCartData();
    return this.cartProductData.find((product) => product.id === productid)
  }
  removeProduct(productid:number){
    console.log(productid);
    this.cartdata.forEach((product,index)=>{
      if(productid === product.productid){
        this.cartdata.splice( index ,1)
        console.log(index);
      }
    })
    localStorage.setItem("cartdata",JSON.stringify(this.cartdata))
    
  }
  calculateCart(){
    let sum = 0
    this.getCartData().forEach(product=>{
      sum += product.currentmrp * product.quantity
    })
    return sum
    
  }
}
