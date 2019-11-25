import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'product/:id', component: ProductPageComponent },
  { path: 'news/:id', component: NewsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
