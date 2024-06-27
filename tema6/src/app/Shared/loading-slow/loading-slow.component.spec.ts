import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSlowComponent } from './loading-slow.component';

describe('LoadingSlowComponent', () => {
  let component: LoadingSlowComponent;
  let fixture: ComponentFixture<LoadingSlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadingSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
