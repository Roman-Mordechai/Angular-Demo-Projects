import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormF02Component } from './my-form-f02.component';

describe('MyFormF02Component', () => {
  let component: MyFormF02Component;
  let fixture: ComponentFixture<MyFormF02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormF02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormF02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
