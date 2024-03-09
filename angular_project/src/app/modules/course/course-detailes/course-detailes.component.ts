import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-course-detailes',
  // standalone: true,
  // imports: [],
  templateUrl: './course-detailes.component.html',
  styleUrl: './course-detailes.component.scss'
})
export class CourseDetailesComponent implements OnInit {
  constructor(private _courseService: CourseService, private _router: Router, private _acr: ActivatedRoute) {

  }
  course: Course;
  ngOnInit(): void {
    let id: number;
    this._acr.paramMap.subscribe(p => {
      if (p && p.has("id"))
      id = +(p.get("id")!);
    this._courseService.getCourses().subscribe(d=>
      this.course=d.find(x=>x.id==id))
  })

    // this._courseService.getCourseById(id).subscribe(data=>
    //   this.course=data)
  }
}
