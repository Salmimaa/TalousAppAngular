import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { API_ENDPOINT } from './app.token';
import { MaterialModule } from './material.module'
import { AlertComponent } from './alert/alert.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { StorageServiceModule } from 'ngx-webstorage-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    StorageServiceModule,
  ],
  providers: [
    { provide: API_ENDPOINT, useValue: 'http://128.199.54.76:8080' },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
