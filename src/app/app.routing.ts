import {TodoComponent} from './todo/todo.component';
import {AuthenticatedGuard} from './shared/authenticated.guard';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const APP_ROUTES = [
  { path: '', component: TodoComponent, canActivate: [AuthenticatedGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
