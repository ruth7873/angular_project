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
  public set user(value: User) {
    var userName = ""
    const u = sessionStorage.getItem("user");
    if (u) {
      const us = JSON.parse(u);
      userName = us.userName;
    }
    this._user = value;
    function userExistValidator(userExist: boolean): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
          if (userExist) {
              return { userExistError: true }; // Return an error object when userExists is true
          }
          return null; // Return null when userExists is false
      };
  }
    if (this.user != undefined) {
      this.registerForm = new FormGroup({
        userName: new FormControl(userName, [Validators.required, Validators.minLength(3), userExistValidator(this.userExist)]),
        address: new FormControl(this.user.address, [Validators.required]),
        email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)]),
        course:new FormControl(this.user.course,[])
      })
    }
  }
  // registerUser() {
  //   this.user = this.registerForm.value;
  //   console.log(this.user);
  //   this._userService.addUserToServer(this.user).subscribe(() => {
  //     Swal.fire({
  //       title: `Hi ${this.user?.userName}`,
  //       text: "You have successfully registered!!!",
  //       icon: "success"
  //     })
  //     this.router.navigate(['/user/login'])
  //   }
  //   )
  // }
  registerUser() {
    console.log(this.user.userName);
    
    this._userService.getUsersFromServer().subscribe(d => {
      console.log(d);
      
      let e = d.find(x => x.userName.localeCompare(this.user.userName))
      if (e)
        this.userExist = true;
      //  alert("this user name is exist, change it!")
    })
    if (this.userExist) {
        // הצג הודעה או בצע פעולות רלוונטיות עבור משתמש שכבר קיים
        Swal.fire({
          title: `Stop!`,
          text: "This User Name isn't available, replace it!",
          icon: "warning"
      })
        return;
    }
    this.user = this.registerForm.value;
    console.log(this.user);
    this._userService.addUserToServer(this.user).subscribe(() => {
        Swal.fire({
            title: `Hi ${this.user?.userName}`,
            text: "You have successfully registered!!!",
            icon: "success"
        })
        this.router.navigate(['/user/login'])
    });
}

  isLecturer: boolean
  lecturer() {
    this.isLecturer = true
  }
}
