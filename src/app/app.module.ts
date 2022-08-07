import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps'

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderInterceptor } from "./header.interceptor";

import { ProviderDetailsComponent } from './pages/provider-details/provider-details.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProviderOrderComponent } from './pages/provider-order/provider-order.component';
import { EditUserProfileComponent } from './pages/edit-user-profile/edit-user-profile.component';
import { EditProviderProfileComponent } from './pages/edit-provider-profile/edit-provider-profile.component';
import { ProviderProfileComponent } from './pages/provider-profile/provider-profile.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

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
    ChatComponent,
    ProviderOrderComponent,
    EditUserProfileComponent,
    EditProviderProfileComponent,
    ProviderProfileComponent,
    UserProfileComponent,
    ChangePasswordComponent,
  ],

  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    GoogleMapsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },  // register interceptor for project
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
