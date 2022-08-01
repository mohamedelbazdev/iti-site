import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
      },
      // {
      //   path: '**',
      //   component: PageNotFoundComponent,
      // },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
