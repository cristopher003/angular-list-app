import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './products-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListComponent } from './components/list/list.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ListComponent,
    RouterModule
]
})
export class ProductsModule { }
