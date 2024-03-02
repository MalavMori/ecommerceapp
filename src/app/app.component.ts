import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductdataService } from './services/productdata.service';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  productdataservice = inject(ProductdataService); 
  productsdata :any= []
  constructor(){}
  ngOnInit(): void {
      this.productsdata = this.productdataservice.getAllData()
  }
  title = 'ecommerceapp';
}
