import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-all-courses',
  // standalone: true,
  // imports: [],
  templateUrl: './all-courses.component.html',
  // styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  courses: Course[];
  categories:Category[]=[];
  constructor(private _courseService: CourseService,private _categoryService:CategoryService, private _router: Router) {

  }
  ngOnInit(): void {
    this._courseService.getCourses().subscribe(data =>
      this.courses = data)
    this._categoryService.getCategories().subscribe(d=>
      {
      this.categories=d
  })
  }
  showDetailes(c: Course) {
    this._router.navigate(["/detailes", c?.id])
  }
}
