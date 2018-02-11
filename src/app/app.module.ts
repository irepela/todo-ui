import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TodoComponent} from './todo/todo.component';
import {AuthenticationService} from './shared/authentication.service';
import {AuthenticatedGuard} from './shared/authenticated.guard';
import {Routing} from './app.routing';
import {AlertComponent} from './alert/alert.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {JwtInterceptorProvider} from './shared/jwt.interceptor';
import {AlertService} from './alert/alert.service';
import {UserService} from './user/user.service';
import {TodoDataService} from './todo/todo-data.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    AuthenticatedGuard,
    AlertService,
    AuthenticationService,
    UserService,
    TodoDataService,
    JwtInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
