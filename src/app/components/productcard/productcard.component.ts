import { Component, Input, input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,CommonModule,RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss'
})
export class ProductcardComponent {
  @Input() producttitle : string = ""
  @Input() currentprice : number = 0;
  @Input() mrpprice : number = 0;
  @Input() productimg : string = ""
  @Input() productid : number = -1;
}
