import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntenrGetComponent } from './intenr-get.component';

describe('IntenrGetComponent', () => {
  let component: IntenrGetComponent;
  let fixture: ComponentFixture<IntenrGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntenrGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntenrGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
