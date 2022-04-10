import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenshopComponent } from './openshop.component';

describe('OpenshopComponent', () => {
  let component: OpenshopComponent;
  let fixture: ComponentFixture<OpenshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
