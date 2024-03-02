import { Component, inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProductdataService } from '../../services/productdata.service';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule, MatTooltipModule, MatIconModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  private productsservice = inject(ProductdataService);
  searcharr: any = [];
  currentarr = this.searcharr;
  constructor(private router: Router) {}
  filter(value: string) {
    if (this.searcharr.length) {
      this.currentarr = this.searcharr.filter((data: any) =>
        data.toLowerCase().includes(value.toLowerCase())
      );
      console.log(this.currentarr);
    }
  }
  ngOnInit(): void {
    this.searcharr = [...this.productsservice.searchTag()];
  }
  search(value: string | any) {
    if (typeof value === 'object') {
      if (value.key === 'Enter') {
        this.router.navigate([`/search/${value.srcElement.value}`]);
      }
    } else {
      this.router.navigate([`/search/${value}`]);
    }
  }
}
