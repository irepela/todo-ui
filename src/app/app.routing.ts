import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {TodoComponent} from './todo/todo.component';
import {AuthenticatedGuard} from './shared/authenticated.guard';
import {RouterModule} from '@angular/router';

const APP_ROUTES = [
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'todo-list', component: TodoComponent/*, canActivate: [AuthenticatedGuard]*/ },
  { path: '**', redirectTo: '' }
];

export const Routing = RouterModule.forRoot(APP_ROUTES);
