import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model'; import { UserService } from '../user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  constructor(private _userService: UserService, private router: Router) {
    this.user = new User();
  }
  ngOnInit(): void {
    this.user = new User();
  }
  hide: boolean = true;
  loginForm!: FormGroup;
  private _user: User = new User();
  public get user(): User {
    return this._user;
  }
  @Input()
  public set user(value: User) {
    this._user = value;
    if (this.user != undefined) {
      this.loginForm = new FormGroup({
        userName: new FormControl(this.user.userName, [Validators.required, Validators.minLength(3)]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
      })
    }
  }
  loginUser() {
    this.user = this.loginForm.value;

    this._userService.getUsersFromServer().subscribe((data) => {
      let currentUser = data.find(x => x.userName == this.user.userName)
      console.log(currentUser);
      if (currentUser) {
        if (currentUser?.password != this.user.password)
          alert("wrong password!")
        else {
          Swal.fire({
            title: `Welcome! ${this.user.userName}`,
            text: "You've logged in successfully!",
            icon: "success"
          });
          sessionStorage.setItem("IsLecturer", JSON.stringify(currentUser.IsLecturer))
          sessionStorage.setItem("user", JSON.stringify(currentUser))
          this.router.navigate(['/courses'])
        }
      }
      else {
        sessionStorage.setItem("user", JSON.stringify(this.user))
        this.router.navigate(['/user/register', { user: this.user.userName }])
      }

    }, err => console.log(err))
  }
}