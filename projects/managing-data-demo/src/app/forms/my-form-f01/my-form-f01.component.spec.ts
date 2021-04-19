import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFormF01Component } from './my-form-f01.component';

describe('MyFormF01Component', () => {
  let component: MyFormF01Component;
  let fixture: ComponentFixture<MyFormF01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFormF01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFormF01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
