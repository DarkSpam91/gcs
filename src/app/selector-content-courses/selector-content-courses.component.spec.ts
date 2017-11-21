import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorContentCoursesComponent } from './selector-content-courses.component';

describe('SelectorContentCoursesComponent', () => {
  let component: SelectorContentCoursesComponent;
  let fixture: ComponentFixture<SelectorContentCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorContentCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorContentCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
