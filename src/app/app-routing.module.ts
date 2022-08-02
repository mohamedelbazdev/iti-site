import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'catgories', component: CategoriesComponent },
  { path: 'Favorites', component: FavoriteComponent },
  { path: '**', component: PageNotFoundComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
