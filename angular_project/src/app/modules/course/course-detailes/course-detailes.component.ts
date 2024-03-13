import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, LearningType } from '../course.model';
import { CourseService } from '../course.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-course-detailes',
  // standalone: true,
  // imports: [],
  templateUrl: './course-detailes.component.html',
  styleUrl: './course-detailes.component.scss'
})
export class CourseDetailesComponent implements OnInit {
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private _router: Router, private _acr: ActivatedRoute) {

  }
  course: Course;
  category: Category;
  learnType = LearningType
  ngOnInit(): void {
    let c: Course;
    {
      const course =sessionStorage.getItem("course")
      c = JSON.parse(course)
      this.course = c;
      this._categoryService.getCategories().subscribe(d => {
        if (d)
          this.category = d.find(x => x.id == this.course.categoryId)
      }
      )}
  }
  print(){
    window.print();
  }
  return(){
    this._router.navigate(['course/allCourses'])
  }
}
