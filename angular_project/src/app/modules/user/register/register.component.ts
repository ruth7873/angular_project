import { Component, Input } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private _userService: UserService, private router: ActivatedRoute) {
    this.user = new User();
  }
  ngOnInit(): void {
    if (localStorage.getItem("user") != null) {
      let x = localStorage.getItem("user")
      if (x != null)
        console.log(x);


    }
    // this.router.paramMap.subscribe(params => {
    //   if (params)
    //     if (params.has('user'))
    //       this.user = (params.get('user')!)
    // })
  }
  hide: boolean = true;
  registerForm!: FormGroup;
  private _user: User | null = new User();
  public get user(): User | null {
    return this._user;
  }
  @Input()
  public set user(value: User) {
    var userName=""
    const u = localStorage.getItem("user");
    if (u) {
      const us = JSON.parse(u);
      userName = us.userName;
    }
    this._user = value;
    if (this.user != undefined) {
      this.registerForm = new FormGroup({
        userName: new FormControl(userName, [Validators.required, Validators.minLength(3)]),
        address: new FormControl(this.user.address, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required,Validators.email]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
      })
    }
  }
  registerUser() {
    
    this.user = this.registerForm.value;
    console.log(this.user);
    this._userService.addUserToServer(this.user).subscribe(() => 
      Swal.fire({
        title: `Hi ${this.user?.userName}`,
        text: "You have successfully registered!!!",
        icon: "success"
      })
    )
  }
}
