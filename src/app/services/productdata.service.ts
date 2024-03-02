import { Injectable } from '@angular/core';
import { Product, productsdataarr } from './productsdataarr';

@Injectable({
  providedIn: 'root',
})
export class ProductdataService {
  private productsdata = productsdataarr;
  constructor() {}
  getAllData() {
    return this.productsdata;
  }
  getCategoryData(category: string) {
    return this.productsdata.filter(
      (data) =>
        data.category.toLowerCase() === category.toLowerCase()
    );
  }
  getProductData(id: number): Product | undefined {
    return this.productsdata.find((product) => product.id === id);
  }
  searchTag() {
    let searcharr = new Set();
    this.productsdata.forEach((data) => {
      searcharr.add(data.title);
      searcharr.add(data.category);
    });
    return searcharr;
  }
  searchProducts(value: string) {
    return this.productsdata.filter((data) => {
      return (
        data.title.toLowerCase().includes(value.toLowerCase()) ||
        data.category.toLowerCase().includes(value.toLowerCase())
      );
    });
  }
  filterType( productdata: Product[] ,value: string) {
    if (value === 'price') {
      return productdata.sort(function (a, b) {
        return a.currentmrp - b.currentmrp;
      })
    } else if (value === 'rating') {
      return productdata.sort(function (a, b) {
        return a.rate - b.rate;
      })
    } else if (value === 'qualit') {
      return productdata.sort(function (a, b) {
        return a.qualit - b.qualit;
      })
    } else if (value === 'stock') {
      return productdata.sort(function (a, b) {
        return a.count - b.count;
      })
    } else if (value === 'sale') {
      return productdata.sort(function (a, b) {
        return a.sale - b.sale;
      })
    }else{
      return []
    }
  }
  filterData(sorttype: string, order: string, page: string, search: string) {
    let filtereddata: any = [];
    console.log(page);
    
    if (page === 'search') {
      if (order === "lth") {
        filtereddata = this.filterType(this.searchProducts(search),sorttype)
      }else{
        filtereddata = this.filterType(this.searchProducts(search),sorttype).reverse()
      }
      
    }else{
      if (order === "lth") {
        filtereddata = this.filterType(this.getCategoryData(search),sorttype)
      }else{
        filtereddata = this.filterType(this.getCategoryData(search),sorttype).reverse()
      }
      
    }
    return filtereddata
  }
}
