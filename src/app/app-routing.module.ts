import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderComponent } from './pages/order/order.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ProviderDetailsComponent } from './pages/provider-details/provider-details.component';
import { ChatComponent } from './pages/chat/chat.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent }, // canActivate:[AuthGuard]
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },



  { path: 'order', component: OrderComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'catgories', component: CategoriesComponent },
  { path: 'Favorites', component: FavoriteComponent },
  { path: 'provider-details', component: ProviderDetailsComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', component: PageNotFoundComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
