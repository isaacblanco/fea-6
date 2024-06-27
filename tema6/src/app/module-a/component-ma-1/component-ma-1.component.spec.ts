import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMa1Component } from './component-ma-1.component';

describe('ComponentMa1Component', () => {
  let component: ComponentMa1Component;
  let fixture: ComponentFixture<ComponentMa1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentMa1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentMa1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
