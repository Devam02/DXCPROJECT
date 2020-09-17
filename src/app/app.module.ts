import { AuthService } from './auth.service';

import { PlaceorderComponent } from './placeorder/placeorder.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    
    RegisterComponent,
    AboutComponent,
    ContactUsComponent,
    ViewOrdersComponent,
    ThankYouComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([


     
      {path:'about',component:AboutComponent},
      {path:'register' ,component:RegisterComponent},
      {path:'login',component:LoginComponent},
      
      
    
      {path:'Logout',component:AboutComponent},
      {path:'Placeorder',component:PlaceorderComponent},
      {path:'Vieworders',component:ViewOrdersComponent}
      
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
