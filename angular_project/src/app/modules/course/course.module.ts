import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";
import { CourseRoutingModule } from "./course-routing.module";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseService } from "./course.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations: [AllCoursesComponent, CourseDetailesComponent, AddCourseComponent],
    imports: [CourseRoutingModule, HttpClientModule, FormsModule, CommonModule, MatCardModule, MatButtonModule],
    providers: [CourseService],
    exports: [MatCardModule,MatButtonModule]
})
export class CourseModule {

}