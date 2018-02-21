import {Injectable} from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {appConfig} from '../app.config';

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

  addTodo(todo: Todo) {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    const currUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.http.post<any>(appConfig.apiUrl + '/addTodo', { username: currUser.username, todo: todo })
      .subscribe(response => {
        this.todos = [...response.todos];
      });
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    const currUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.http.post<any>(appConfig.apiUrl + '/deleteTodo', { username: currUser.username, todoId: id })
      .subscribe(response => {
        this.todos = [...response.todos];
      });
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    } if (false) {

    }
    Object.assign(todo, values);
    return todo;
  }

  initializeTodos(todos: Array<Todo>) {
    this.todos = [...todos];
  }

  getInitialTodos(currUser): Observable<Array<Todo>> {
    currUser = currUser;
    return this.http.get<any>(appConfig.apiUrl + '/getTodos/' + currUser.username);
  }

  getAllTodos(): Array<Todo> {
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
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    const currUser = JSON.parse(sessionStorage.getItem('currentUser'));
    this.http.post<any>(appConfig.apiUrl + '/toggleTodo', { username: currUser.username, todo: todo })
      .subscribe(response => {});
    return updatedTodo;
  }

}
