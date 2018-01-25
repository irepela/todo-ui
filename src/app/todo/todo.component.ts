import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {User} from '../user/user';
import {UserService} from '../user/user.service';

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

  constructor(private todoDataService: TodoDataService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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

}
