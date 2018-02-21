import {TestBed, async, inject} from '@angular/core/testing';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';
import {HttpClientModule} from '@angular/common/http';

describe('TodoDataService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

 describe('#getAllTodos()', () => {

    it('should return an empty array by default', inject([TodoDataService], (service: TodoDataService) => {
      expect(service.getAllTodos()).toEqual([]);
    }));

    xit('should return all todos', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  xdescribe('#save(todo)', () => {

    it('should automatically assign an incrementing id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getTodoById(1)).toEqual(todo1);
      expect(service.getTodoById(2)).toEqual(todo2);
    }));

  });

  xdescribe('#deleteTodoById(id)', () => {

    it('should remove todo with the corresponding id', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(1);
      expect(service.getAllTodos()).toEqual([todo2]);
      service.deleteTodoById(2);
      expect(service.getAllTodos()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo1 = new Todo({title: 'Hello 1', complete: false});
      const todo2 = new Todo({title: 'Hello 2', complete: true});
      service.addTodo(todo1);
      service.addTodo(todo2);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
      service.deleteTodoById(3);
      expect(service.getAllTodos()).toEqual([todo1, todo2]);
    }));

  });

  xdescribe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({title: 'Hello 1', complete: false});
      service.addTodo(todo);
      const updatedTodo = service.updateTodoById(1, {
        title: 'new title'
      });
      expect(updatedTodo.title).toEqual('new title');
    }));

    it('should return null if todo is not found', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({title: 'Hello 1', complete: false});
      service.addTodo(todo);
      const updatedTodo = service.updateTodoById(2, {
        title: 'new title'
      });
      expect(updatedTodo).toEqual(null);
    }));

  });

  xdescribe('#toggleTodoComplete(todo)', () => {

    it('should return the updated todo with inverse complete status', inject([TodoDataService], (service: TodoDataService) => {
      const todo = new Todo({title: 'Hello 1', complete: false});
      service.addTodo(todo);
      const updatedTodo = service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(true);
      service.toggleTodoComplete(todo);
      expect(updatedTodo.complete).toEqual(false);
    }));

  });

});
