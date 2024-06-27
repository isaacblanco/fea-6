import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListVirtualScrollComponent } from './todo-list-virtual-scroll.component';

describe('TodoListVirtualScrollComponent', () => {
  let component: TodoListVirtualScrollComponent;
  let fixture: ComponentFixture<TodoListVirtualScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoListVirtualScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoListVirtualScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
