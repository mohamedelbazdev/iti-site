import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProvidersComponent } from './pages/providers/providers.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { SliderComponent } from './pages/home/slider/slider.component';
import { CategoryComponent } from './pages/home/category/category.component';
import { ProviderComponent } from './pages/home/provider/provider.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { OrderComponent } from './pages/order/order.component';
import { ProviderDetailsComponent } from './pages/provider-details/provider-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CheckoutComponent,
    ProvidersComponent,
    CategoriesComponent,
    FavoriteComponent,
    SliderComponent,
    CategoryComponent,
    ProviderComponent,
    PageNotFoundComponent,
    OrderComponent,
    ProviderDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
