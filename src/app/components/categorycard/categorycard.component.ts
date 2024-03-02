import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-categorycard',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,CommonModule,RouterLink,MatProgressSpinnerModule],
  templateUrl: './categorycard.component.html',
  styleUrl: './categorycard.component.scss'
})
export class CategorycardComponent {
  isimgloded : boolean = false;
  @Input() categoryname : string = "";
  @Input() categoryimg : string = "";
  dataLoded(){
    console.log("Loded");
    this.isimgloded = true
  }
}
