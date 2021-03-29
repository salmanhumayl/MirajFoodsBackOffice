import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditspecificationComponent } from './editspecification.component';

describe('EditspecificationComponent', () => {
  let component: EditspecificationComponent;
  let fixture: ComponentFixture<EditspecificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditspecificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditspecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
