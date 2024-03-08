import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";
import { CourseRoutingModule } from "./course-routing.module";
import { AddCourseComponent } from "./add-course/add-course.component";

@NgModule({
    declarations:[AllCoursesComponent,CourseDetailesComponent,AddCourseComponent],
    imports:[CourseRoutingModule],
    providers:[],
    exports:[]
})
export class CourseModule{

}