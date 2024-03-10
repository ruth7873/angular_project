import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const APP_ROUTES: Route[] = [
    { path: "user", loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule) },
    { path: "course", loadChildren: () => import("./modules/course/course.module").then(m => m.CourseModule) }
    // { path: "user/register", loadChildren:()=>import("./modules/user/user.module").then(m=>m.UserModule) },
    // { path: "user/logout", loadChildren:()=>import("./modules/user/user.module").then(m=>m.UserModule) },
]
@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
