import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import Swal from 'sweetalert2';
import { User } from '../../user/user.model';

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
  getCssClass(course) {
    const dateString = course.beginDate;
    const parts = dateString.split('-');
    const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    return dateObject < this.nextWeekDateString ? 'date' : null;
  }
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private _router: Router) {
  }
  ngOnInit(): void {
    this._courseService.getCourses().subscribe(data =>
      this.courses = data)
    this._categoryService.getCategories().subscribe(d => {
      this.categories = d
    })
    this.user = JSON.parse(sessionStorage.getItem("user"))
    console.log("===", this.user.isLecturer);

    // if(u) {
    //   const us = JSON.parse(u);
    //   this.user = us;
    // }
  }
  user: User;

  showDetailes(c: Course) {
    sessionStorage.setItem("course", JSON.stringify(c))
    if (this.user)
          this._router.navigate(["/detailes"])
        else{
          Swal.fire({
            title: `Oops... `,
            text: "You are not registered yet, register now",
            icon: "warning"
          });          this._router.navigate(["/user/login"])

        }
  }
  editCourse(c: Course) {
    localStorage.setItem("course", JSON.stringify(c))
    this._router.navigate(['edit'])
  }
  // deleteCourse(id: number) {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, delete!"
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       console.log(id);
  //       this.courses.filter(x => x.id != id)
  //       // this._courseService.deleteCourse(id).subscribe
  //       //   (d => {
  //       //     if (d)
  //       Swal.fire({
  //         title: "deleted!",
  //         text: "The Course Deleted successfully!!!",
  //         icon: "success"
  //       })

  //     }
  //   });
  // }
}
