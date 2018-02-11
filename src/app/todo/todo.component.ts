import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {User} from '../user/user';
import {UserService} from '../user/user.service';
import {AuthenticationService} from '../shared/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit, OnDestroy {

  private todosSubscription: Subscription;
  newTodo: Todo = new Todo();
  currentUser: User;

  constructor(private todoDataService: TodoDataService,
              private authService: AuthenticationService,
              private router: Router) {
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.todosSubscription = this.todoDataService.getInitialTodos().subscribe(data => {
      this.todoDataService.initializeTodos(data.todos);
    });
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  ngOnDestroy() {
    if (this.todosSubscription) {
      this.todosSubscription.unsubscribe();
    }
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
