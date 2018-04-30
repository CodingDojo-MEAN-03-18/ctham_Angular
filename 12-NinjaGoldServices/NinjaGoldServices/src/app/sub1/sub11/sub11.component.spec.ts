import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sub11Component } from './sub11.component';

describe('Sub11Component', () => {
  let component: Sub11Component;
  let fixture: ComponentFixture<Sub11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sub11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sub11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
