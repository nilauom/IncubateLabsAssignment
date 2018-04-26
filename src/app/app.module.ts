import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';


import { routing } from './app.routing';
import { AuthService } from './auth/auth.service';
import { ImageServiceService } from './image-view/image-service.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import {CookieService} from 'ng2-cookies';
import { ImageViewComponent } from './image-view/image-view.component';
import {AuthGuard} from "./Auth/guard/auth.guard";
import { FavImageComponent } from './fav-image/fav-image.component';
import { DescriptionComponent } from './description/description.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    SignupFormComponent,
    LoginFormComponent,
    ImageViewComponent,
    FavImageComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing,
  ],
  providers: [AuthService,CookieService,ImageServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
