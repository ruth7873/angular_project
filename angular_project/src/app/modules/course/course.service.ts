import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course.model";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CourseService{
    constructor(private _http:HttpClient)
    {

    }
    getCourses():Observable<Course[]>
    {
        return this._http.get<Course[]>("/api/Course");
    }

    getCourseById(id:number):Observable<Course>
    {
        return this._http.get<Course>(`/api/Course/${id}`);
    }
    addCourse(course:Course):Observable<boolean>
    {
        console.log(course);        
        return this._http.post<boolean>("/api/Course",course);
    }
    updateCourse(course: Course): Observable<boolean> {
        return this._http.put<boolean>(`api/Course/${course.id}`, course);
    }
    deleteCourse(id: number): Observable<boolean> {
        return this._http.delete<boolean>("api/Course/" + id);
    }
}