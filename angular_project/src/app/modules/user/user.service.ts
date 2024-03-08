import { Injectable } from "@angular/core";
import { User } from "./user.model";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs';

@Injectable()
export class UserService {
    USERS: User[] = [];
    // getUsersFromServerByName(name: string | undefined): Observable<User> {
    //     this.getUsersFromServer().subscribe(data => {
    //         console.log(data);
    //         let u = data.find(x => x.userName == name)
    //         console.log(u);
    //         return u;
    //     })
    // }
    getUsersFromServer(): Observable<User[]> {
        return this._http.get<User[]>("/api/User");
    }
    addUserToServer(user: User | null): Observable<boolean> {
        if (user) {
            // const u=this.getUsersFromServer().subscribe()
            // user.id=0;
            return this._http.post<boolean>("/api/User",user );
        } else {
            // אם המשתנה user הוא null, נחזיר Observable שמכיל ערך false
            return of(false);
        }
    }
    
    constructor(private _http: HttpClient) { }
}