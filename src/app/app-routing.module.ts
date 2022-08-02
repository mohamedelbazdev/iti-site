import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { ProviderDetailsComponent } from './pages/provider-details/provider-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProviderOrderComponent } from './pages/provider-order/provider-order.component';
import { EditUserProfileComponent } from './pages/edit-user-profile/edit-user-profile.component';
import { EditProviderProfileComponent } from './pages/edit-provider-profile/edit-provider-profile.component';
import { ProviderProfileComponent } from './pages/provider-profile/provider-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order', component: OrderComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'catgories', component: CategoriesComponent },
  { path: 'Favorites', component: FavoriteComponent },
  { path: 'provider-details', component: ProviderDetailsComponent },
  { path: 'provider-order', component: ProviderOrderComponent },
  { path: 'edit-user-profile', component: EditUserProfileComponent },
  { path: 'edit-provider-profile', component: EditProviderProfileComponent },
  { path: 'provider-profile', component: ProviderProfileComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'chat', component: ChatComponent },
  { path: '**', component: PageNotFoundComponent, },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
