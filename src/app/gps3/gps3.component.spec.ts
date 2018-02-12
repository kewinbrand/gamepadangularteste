import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gps3Component } from './gps3.component';

describe('Gps3Component', () => {
  let component: Gps3Component;
  let fixture: ComponentFixture<Gps3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gps3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gps3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
