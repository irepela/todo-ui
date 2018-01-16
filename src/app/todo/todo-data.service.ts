import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoDataService {

  private mockHost = '../../assets/mockData/';

  // Placeholder for last id so we can simulate
  // automatic incrementing of id's
  lastId = 0;

  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(private http: HttpClient) {
  }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos
      .filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  private updateTodoById(id: number, isCompleted: boolean): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    todo.complete = isCompleted;
    return todo;
  }

  initializeTodos(savedTodos: Array<Todo>) {
    this.todos = [...savedTodos];
  }

  getInitialTodos(): Observable<{todos: Array<Todo>}> {
    return this.http.get<{todos: Array<Todo>}>(this.mockHost + 'todos.json');
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, !todo.complete);
    return updatedTodo;
  }

}
