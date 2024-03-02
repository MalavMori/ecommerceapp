import { Component, OnInit, inject } from '@angular/core';
import { CategorycardComponent } from '../components/categorycard/categorycard.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductdataService } from '../services/productdata.service';
import { ProductcardComponent } from '../components/productcard/productcard.component';
import { Product } from '../services/productsdataarr';
import { FilterComponent } from '../components/filter/filter.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CategorycardComponent,CommonModule,ProductcardComponent,FilterComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  private searchservice = inject(ProductdataService) 
  productdata : Product[] = []
  constructor(private route: ActivatedRoute){}
  iscartempty : boolean = true
  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.productdata = this.searchservice.searchProducts(data["search"])
    });
    if (this.productdata.length) {
      this.iscartempty = false
 }
  }
  filterdata(data:any){
    this.productdata = data;
  }
  
}
