import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  // standalone: true,
  // imports: [],
  templateUrl: './all-courses.component.html',
  // styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent implements OnInit {
  courses:Course[];
  constructor(private _courseService:CourseService,private _router:Router){

  }
ngOnInit(): void {
  this._courseService.getCourses().subscribe(data=>
    this.courses=data)
}
showDetailes(c:Course){
this._router.navigate(["/detailes",c.id])
}
}
