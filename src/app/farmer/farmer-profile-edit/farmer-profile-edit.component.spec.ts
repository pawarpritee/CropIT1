import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerProfileEditComponent } from './farmer-profile-edit.component';

describe('FarmerProfileEditComponent', () => {
  let component: FarmerProfileEditComponent;
  let fixture: ComponentFixture<FarmerProfileEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerProfileEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
