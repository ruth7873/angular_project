import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';

@Injectable()
export class UserService {
    USERS: User[] = [];

    getUsersFromServer(): Observable<User[]> {
        return this._http.get<User[]>("/api/User");
    }
    addUserToServer(user: User | null): Observable<boolean> {
        if (user) {
            return this._http.post<boolean>("/api/User",user );
        } else {
            // אם המשתנה user הוא null, נחזיר Observable שמכיל ערך false
            return of(false);
        }
    }
    
    constructor(private _http: HttpClient) { }
}