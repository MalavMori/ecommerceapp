import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"category/:category",
        component:CategoryComponent,
        
    },
    {
        path:"product/:productid",
        component:ProductpageComponent,
    },
    {
        path:"search/:search",
        component:SearchComponent,
    },
    {
        path:"cart",
        component:CartComponent,
    },
    {
        path:"**",
        component:NotfoundComponent,
    }
];
