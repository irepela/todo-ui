import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {TodoComponent} from './todo.component';
import {TodoDataService} from './todo-data.service';
import {Todo} from './todo';

describe('TodoComponent', () => {
  let fixture;
  let todo;
  let todoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [TodoComponent],
      providers: [TodoDataService],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TodoComponent);
    todo = fixture.debugElement.componentInstance;
    todoDataService = fixture.debugElement.injector.get(TodoDataService);
  }));

  xit('should create the app', async(() => {
    expect(todo).toBeTruthy();
  }));

  xit(`should have a newTodo todo`, async(() => {
    expect(todo.newTodo instanceof Todo).toBeTruthy();
  }));

  xit('should display "Todos" in h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));

  xit('should add a todo', async(() => {
    spyOn(todoDataService, 'addTodo');
    todo.addTodo();
    expect(todoDataService.addTodo).toHaveBeenCalled();
  }));

  xit('should complete a todo', async(() => {
    spyOn(todoDataService, 'toggleTodoComplete');
    todo.toggleTodoComplete();
    expect(todoDataService.toggleTodoComplete).toHaveBeenCalled();
  }));

  xit('should remove a todo', async(() => {
    spyOn(todoDataService, 'deleteTodoById');
    todo.removeTodo(1);
    expect(todoDataService.deleteTodoById).toHaveBeenCalled();
  }));
});
