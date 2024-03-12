import { NgModule } from "@angular/core";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";
import { CourseRoutingModule } from "./course-routing.module";
import { AddCourseComponent } from "./add-course/add-course.component";
import { CourseService } from "./course.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { CategoryService } from "./category.service";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule, MatOptionModule } from "@angular/material/core";
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
    declarations: [AllCoursesComponent, CourseDetailesComponent, AddCourseComponent],
    imports: [CourseRoutingModule, HttpClientModule, FormsModule,ReactiveFormsModule, CommonModule, MatCardModule, MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatLabel,MatRadioModule,MatDatepickerModule,MatNativeDateModule],
    providers: [CourseService,CategoryService],
    exports: [MatCardModule,MatButtonModule]
})
export class CourseModule {

}