import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRentedComponent } from './my-rented.component';

describe('MyRentedComponent', () => {
  let component: MyRentedComponent;
  let fixture: ComponentFixture<MyRentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
