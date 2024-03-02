import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductdataService } from '../../services/productdata.service';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent implements OnInit {
  @Output() filterdata = new EventEmitter();
  private productsservice = inject(ProductdataService);
  sortvalues = [
    { value: 'price', viewValue: 'Price' },
    { value: 'rating', viewValue: 'Rating' },
    { value: 'qualit', viewValue: 'Qualit' },
    { value: 'stock', viewValue: 'Stock' },
    { value: 'sale', viewValue: 'Best Sale' },
  ];
  constructor(private route: ActivatedRoute, private router: Router) {}
  filter(sorttype: string, order: string) {
    this.route.url.subscribe((data) => {
      if (sorttype && order) {
        this.router.navigate([
          `${data[0].path}/${data[1].path}`,
          { sorttype, order },
        ]);
      }
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data) => {
      if (data['sorttype'] && data['order']) {
        this.route.url.subscribe((page) => {
          if (data['search']) {
            this.filterdata.emit(
              this.productsservice.filterData(
                data['sorttype'],
                data['order'],
                page[0].path,
                data['search']
              )
            );
          } else {
            this.filterdata.emit(
              this.productsservice.filterData(
                data['sorttype'],
                data['order'],
                page[0].path,
                page[1].path
              )
            );
          }
        });
      }
      else if (data["search"]) {
        this.filterdata.emit(this.productsservice.searchProducts(data["search"]));
      }
    });
  }
}
