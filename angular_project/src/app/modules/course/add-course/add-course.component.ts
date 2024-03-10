import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from '../course.model';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  constructor(private _courseService: CourseService, private _categoryService: CategoryService) {
    this.course = new Course()
    this.syllabusControl = new FormControl('',[Validators.required]);
  }
  ngOnInit(): void {
    this._categoryService.getCategories().subscribe(d => { this.categories = d });
    this.inputArrayControls = this.inputArray.map(input => new FormControl(input));
  }
  categories: Category[] = [];
  courseForm: FormGroup;
  private _course: Course = new Course();
  public get course():Course{
    return this._course;
  }
  @Input()
  public set course(value: Course) {
    this._course = value;

    if (this._course !== undefined) {
      this.courseForm = new FormGroup({
        name: new FormControl(this.course.name, [Validators.required]),
        description: new FormControl(this.course.description, [Validators.required]),
        categoryId: new FormControl(this.selectedIndexCategory),
        amount: new FormControl(this.course.amount, [Validators.required, Validators.min(3)]),
        beginDate: new FormControl(this.course.beginDate,[Validators.required]),
        learningType: new FormControl(this.course.learningType,[Validators.required]),
        image: new FormControl(this.course.image,[Validators.required]),
        // syllabus:new FormControl(this.inputArrayControls,[Validators.required])
      });
  
    }
  }
  selectedIndexCategory:number
  public onSelectionCatogoryChanged(event: any):void{
    this.selectedIndexCategory = event.target.selectedIndex;
    console.log(`Selected index: ${this.selectedIndexCategory}`);
  }
  syllabusControl: FormControl;
  inputArray: string[] = [];
  inputArrayControls: FormControl[] = [];

  addInput(control: FormControl) {
    this.inputArray.push(control.value);
    this.inputArrayControls.push(new FormControl(''));
  }
  addCourse() {
    this.course=this.courseForm.value;
    this.course.lecturerId=1;
    this.course.id=1;
    this.course.learningType=1;
    this.course.syllabus=this.inputArray;
    this._courseService.addCourse(this.course).subscribe(d=>console.log(d)
    )
    console.log(this.course);
    console.log(this.inputArray);
        
   }
} 
