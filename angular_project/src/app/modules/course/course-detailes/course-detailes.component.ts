import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, LearningType } from '../course.model';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user.model';

@Component({
  selector: 'app-course-detailes',
  templateUrl: './course-detailes.component.html',
  styleUrl: './course-detailes.component.scss'
})
export class CourseDetailesComponent implements OnInit {
  constructor(private _userService: UserService, private _categoryService: CategoryService, private _router: Router, private _acr: ActivatedRoute) {

  }
  course: Course;
  category: Category;
  learnType = LearningType
  lecturer: User = new User
  ngOnInit(): void {
    let c: Course;
    {
      const course = sessionStorage.getItem("course")
      c = JSON.parse(course)
      this.course = c;
      this._categoryService.getCategories().subscribe(d => {
        if (d)
          this.category = d.find(x => x.id == this.course.categoryId)
      }
      )
    }
    this._userService.getUsersFromServer().subscribe(d => {
      this.lecturer = d.find(x => x.id == this.course.lecturerId)
    })
  }
  print() {
    window.print();
  }
  return() {
    this._router.navigate(['course/allCourses'])
  }
}
