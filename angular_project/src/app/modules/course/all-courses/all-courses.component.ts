import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-courses',
  // standalone: true,
  // imports: [],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  courses: Course[];
  categories: Category[] = [];
  currentDate = new Date();
  nextWeekDateString = new Date(this.currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  nextWeekDate = new Date(this.nextWeekDateString);
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private _router: Router) {
  }
  ngOnInit(): void {
    this._courseService.getCourses().subscribe(data =>
      this.courses = data)
    this._categoryService.getCategories().subscribe(d => {
      this.categories = d
    })
  }
  showDetailes(c: Course) {
    this._router.navigate(["/detailes", c?.id])
  }
  editCourse(c: Course) {

  }
  deleteCourse(id: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!"
    }).then((result) => {
      if (result.isConfirmed) {
        this._courseService.deleteCourse(id).subscribe
          (d =>
          // this.router.navigate(['/user/login'])
          {
            if (d)
              Swal.fire({
                title: "deleted!",
                text: "The Course Deleted successfully!!!",
                icon: "success"
              })
          })
      }
    });
  }
}
