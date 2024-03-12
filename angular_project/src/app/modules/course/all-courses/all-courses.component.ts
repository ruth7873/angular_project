import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import Swal from 'sweetalert2';
import { User } from '../../user/user.model';
import { FormControl } from '@angular/forms';
import { MatRadioChange } from '@angular/material/radio';
import { MatSelectChange } from '@angular/material/select';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  courses: Course[];
  filteredCourses: Course[]
  categories: Category[] = [];
  currentDate = new Date();
  categoryControl = new FormControl();
  nextWeekDateString = new Date(this.currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  nextWeekDate = new Date(this.nextWeekDateString);
  getCssClass(course) {
    const dateString = course.beginDate;
    const parts = dateString.split('-');
    const dateObject = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    return dateObject < this.nextWeekDateString ? 'date' : null;
  }
  selectedValue = null
  onSelectionChange(event: MatRadioChange) {
    this.selectedValue = event.value;
    console.log('Selected value:', this.selectedValue);
    this.filter()
  }
  selectedCategory: any;
  onCategorySelectionChange(event: MatSelectChange) {
    this.selectedCategory = event.value;
    console.log('Selected category:', this.selectedCategory);
    this.filter()
  }
  filter() {
    this.filteredCourses=this.courses.filter(c=>(this.selectedCategory==undefined|| c.categoryId === this.selectedCategory.id)
    &&(this.selectedValue==undefined||c.learningType==this.selectedValue)&&c.name.includes(this.courseName))
  }
  courseName: string = '';
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private _router: Router) {
  }
  ngOnInit(): void {
    this._courseService.getCourses().subscribe(data => {
      this.courses = data;
      this.filteredCourses = data
    })
    this._categoryService.getCategories().subscribe(d => {
      this.categories = d
    })
    this.user = JSON.parse(sessionStorage.getItem("user"))
  }
  user: User;

  showDetailes(c: Course) {
    sessionStorage.setItem("course", JSON.stringify(c))
    if (this.user)
      this._router.navigate(["course/detailes"])
    else {
      Swal.fire({
        title: `Oops... `,
        text: "You are not registered yet, register now",
        icon: "warning"
      }); this._router.navigate(["/user/login"])

    }
  }
  editCourse(c: Course) {
    localStorage.setItem("course", JSON.stringify(c))
    this._router.navigate(['course/edit'])
  }

}
