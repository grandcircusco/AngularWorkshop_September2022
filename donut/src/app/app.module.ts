import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { DetailsComponent } from './Components/details/details.component';
import { RouterModule,Routes } from '@angular/router';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HeaderComponent } from './Components/header/header.component';
import { CartComponent } from './Components/cart/cart.component';

const appRoutes:Routes =[
  { path:"Home", component: HomeComponent},
  { path:"Details/:id", component:DetailsComponent},
  { path:"Cart", component: CartComponent},
  { path:"", redirectTo: "/Home", pathMatch:"full"},
  { path:"**", component: PageNotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
