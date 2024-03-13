import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  // standalone: true,
  // imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
  }
  ngOnInit(): void { this.userExist = false }

  hide: boolean = true;
  registerForm: FormGroup;
  private _user: User = new User();
  userExist: boolean;
  public get user(): User {
    return this._user;
  }
  userName :string= ""
  public set user(value: User) {
    const u = sessionStorage.getItem("user");
    if (u) {
      const us = JSON.parse(u);
      this.userName = us.userName;
    }
    this._user = value;

    if (this.user != undefined) {
      this.registerForm = new FormGroup({
        userName: new FormControl(this.userName, [Validators.required, Validators.minLength(3)]),
        address: new FormControl(this.user.address, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
        course: new FormControl(this.user.course, [])
      })
    }
  }
  registerUser() {
    this.user = this.registerForm.value;
    console.log(this.user);
    this._userService.addUserToServer(this.user).subscribe({
      next: (res => {
        if (res == undefined) {
          Swal.fire({
            title: `Oops`,
            text: "Username in use, please enter another name!",
            icon: "error"
          });
          this.userName = ' ';
          this.user.userName=" ";
          console.log(this.userName);
          
        }
        else {
          Swal.fire({
            title: `Hi ${this.user?.userName}`,
            text: "You have successfully registered!!!",
            icon: "success"
          });
          sessionStorage.setItem("user", JSON.stringify(this.user))
          this.router.navigate(['course/allCourses'])
        }
      })
    })
  }
  isLecturer: boolean
  lecturer() {
    this.isLecturer = true
    // this.router.navigate(['/register',true])
  }
}
