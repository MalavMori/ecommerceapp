import { Injectable } from '@angular/core';
import { Category ,categorydataarr} from './categorydata';

@Injectable({
  providedIn: 'root'
})
export class CategoryserviceService {
  private categorydata : Category[] = categorydataarr;
  getAllCategory(){
    return this.categorydata
  }
  constructor() { }
}
