import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Category } from "./category.model";

@Injectable()
export class CategoryService{
    constructor(private _http:HttpClient)
    {

    }
    getCategories():Observable<Category[]>
    {
        return this._http.get<Category[]>("/api/Category");
    }
}