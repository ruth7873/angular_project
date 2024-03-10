import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";
import { AddCourseComponent } from "./add-course/add-course.component";

const APP_ROUTES: Route[] = [
    { path: "courses", component:AllCoursesComponent },
    { path: "detailes/:id", component:CourseDetailesComponent },
    { path: "add", component:AddCourseComponent },
    { path: "edit", component:AddCourseComponent },
]
@NgModule({
    imports:[RouterModule.forChild(APP_ROUTES)],
    exports:[RouterModule]
})
export class CourseRoutingModule{}