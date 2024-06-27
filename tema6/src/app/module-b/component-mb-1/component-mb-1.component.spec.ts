import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMb1Component } from './component-mb-1.component';

describe('ComponentMb1Component', () => {
  let component: ComponentMb1Component;
  let fixture: ComponentFixture<ComponentMb1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentMb1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComponentMb1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
