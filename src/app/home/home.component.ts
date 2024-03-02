import { Component, OnInit, inject } from '@angular/core';
import { CategorycardComponent } from '../components/categorycard/categorycard.component';
import { CategoryserviceService } from '../services/categoryservice.service';
import { Category } from '../services/categorydata';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CategorycardComponent,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  categorydata : Category [] = [];
  categoryservice = inject(CategoryserviceService)
  
  ngOnInit(): void {
      this.categorydata = this.categoryservice.getAllCategory()
  }
}
