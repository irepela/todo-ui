import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {TodoComponent} from './todo/todo.component';
import {AuthenticationService} from './shared/authentication.service';
import {AuthenticatedGuard} from './shared/authenticated.guard';
import {Routing} from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Routing
  ],
  providers: [AuthenticationService, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
