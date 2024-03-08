import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailesComponent } from './course-detailes.component';

describe('CourseDetailesComponent', () => {
  let component: CourseDetailesComponent;
  let fixture: ComponentFixture<CourseDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
