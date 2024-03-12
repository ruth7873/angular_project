import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../course.model';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import { User } from '../../user/user.model';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private router: Router) {
    const a = localStorage.getItem("course")
    localStorage.clear()
    let c: Course
    if (a) {
      c = JSON.parse(a)
      this.course = c
      this.course.syllabus = c.syllabus
      console.log(this.course);
      this.selectedIndexCategory = c.categoryId
      this.inputArray = c.syllabus
      this.course.id=c.id
      this.isEdit=true
    }
    console.log(this.course);
    if (this.course.id == null)
    {
      this.course = new Course()
      this.course.id=99999;
    }
  }
  isEdit:boolean=false
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe(d => { this.categories = d });
    this.inputArrayControls = this.inputArray.map(input => new FormControl(input));
  }
  categories: Category[] = [];
  courseForm: FormGroup;
  private _course: Course = new Course();
  public get course(): Course {
    return this._course;
  }
  // @Input()
  public set course(value: Course) {
    this._course = value;
    // if (this._course !== undefined) {
    this.courseForm = new FormGroup({
      name: new FormControl(this.course.name, [Validators.required]),
      description: new FormControl(this.course.description, [Validators.required]),
      categoryId: new FormControl(this.course.categoryId),
      amount: new FormControl(this.course.amount, [Validators.required, Validators.min(3)]),
      beginDate: new FormControl(this.course.beginDate, [Validators.required]),
      learningType: new FormControl(this.course?.learningType?.toString(), [Validators.required]),
      image: new FormControl(this.course.image, [Validators.required]),
      lecturerId: new FormControl(this.course.lecturerId)
    });
    // }
  }
  selectedIndexCategory: number
  public onSelectionCatogoryChanged(event: any): void {
    this.selectedIndexCategory = event.target.selectedIndex;
    console.log(`Selected index: ${this.selectedIndexCategory}`);
  }
  inputArray: string[] = [""];
  inputArrayControls: FormControl[] = [];
  changes: boolean[] = [false, false];
  addInput(control: FormControl, i: number) {
    i++;

    if (this.changes[i] && this.inputArray[i] !== control.value) {
      // If the value at index i changed
      this.inputArray[i] = control.value;

      if (this.inputArray[i] === "") {
        control.setValue(this.inputArray[i + 1]);

        for (let j = i; j < this.inputArray.length - 1; j++) {
          this.inputArray[j] = this.inputArray[j + 1];
          this.inputArrayControls[j] = this.inputArrayControls[j + 1];
        }

        this.inputArray.pop();
        this.inputArrayControls[this.inputArrayControls.length - 1] = new FormControl('')
        // this.inputArrayControls.pop();
      }

      console.log("Value changed and updated");
    } else if (this.changes.length > i && !this.changes[i]) {
      // Add new input to the next field
      this.inputArray.push(control.value);
      this.changes.push(false);
      this.inputArrayControls.push(new FormControl(''));

      console.log("New input added");
    }

    console.log("The updated array:", this.inputArray);
    this.changes[i] = true;
  }
  addCourse() {
    this.inputArray.shift()
    console.log(this.inputArray);
    this.course = this.courseForm.value;
    const u = sessionStorage.getItem("user")
    console.log(u);
    if (u != null) {
      let user: User = JSON.parse(u)
      this.course.lecturerId = user.id;
    }
    this.course.learningType = +(this.course.learningType);
    this.course.syllabus = this.inputArray;
    console.log(this.course);
    if(!this.course.id)
    this.course.id=99999
    this._courseService.addCourse(this.course).subscribe(d => {
      Swal.fire({
        title: `Well done!!! `,
        text: "The course was successfully added!",
        icon: "success"
      });
      this.router.navigate(['/courses'])
    }
    )
    console.log(this.course);
    console.log(this.inputArray);

  }
  unSaveCourse(){
    this.router.navigate(['courses'])
  }
} 
