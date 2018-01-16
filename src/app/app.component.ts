import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoDataService} from './todo/todo-data.service';
import {Todo} from './todo/todo';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit, OnDestroy {

  private todosSubscription: Subscription;
  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
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
