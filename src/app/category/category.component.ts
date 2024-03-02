import { Component, OnInit, inject } from '@angular/core';
import { CategorycardComponent } from '../components/categorycard/categorycard.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { ProductcardComponent } from '../components/productcard/productcard.component';
import { Product } from '../services/productsdataarr';
import { FilterComponent } from '../components/filter/filter.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategorycardComponent,CommonModule,ProductcardComponent,FilterComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit{
  private categoryservice = inject(ProductdataService) 
  productdata : Product[] = []
  constructor(private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.productdata = this.categoryservice.getCategoryData(data["category"])
    });
  }
  filterdata(data:any){
    this.productdata = data;
  }
}
