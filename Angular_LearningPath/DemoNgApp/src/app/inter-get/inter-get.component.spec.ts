import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterGetComponent } from './inter-get.component';

describe('InterGetComponent', () => {
  let component: InterGetComponent;
  let fixture: ComponentFixture<InterGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
