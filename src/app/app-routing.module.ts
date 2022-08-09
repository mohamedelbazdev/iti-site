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
import { ProviderOrderComponent } from './pages/provider-order/provider-order.component';
import { EditUserProfileComponent } from './pages/edit-user-profile/edit-user-profile.component';
import { EditProviderProfileComponent } from './pages/edit-provider-profile/edit-provider-profile.component';
import { ProviderProfileComponent } from './pages/provider-profile/provider-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { GuestGuard } from "./guards/guest.guard";
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: 'order', component: OrderComponent, canActivate: [AuthGuard] }, // canActivate:[AuthGuard]
  { path: 'login', component: LoginComponent, canActivate: [GuestGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [GuestGuard] },
  { path: 'contact', component: ContactUsComponent,canActivate: [AuthGuard]  },
  { path: 'change-password', component: ChangePasswordComponent },



  { path: 'providers', component: ProvidersComponent, canActivate: [AuthGuard] },
  { path: 'categories', component: CategoriesComponent,canActivate: [AuthGuard] },
  { path: 'Favorites', component: FavoriteComponent, canActivate: [AuthGuard] },
  { path: 'provider-details/:id', component: ProviderDetailsComponent, canActivate: [AuthGuard] },
  { path: 'provider-order', component: ProviderOrderComponent, canActivate: [AuthGuard] },
  { path: 'edit-user-profile', component: EditUserProfileComponent, canActivate: [AuthGuard] },
  { path: 'edit-provider-profile', component: EditProviderProfileComponent, canActivate: [AuthGuard] },
  { path: 'provider-profile', component: ProviderProfileComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
