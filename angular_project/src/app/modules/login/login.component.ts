import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user.model';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  constructor(){}
  ngOnInit(): void {
    
  }
  loginForm!:FormGroup;
  private _user: User = new User();
public get user():User
{
  return this._user;
}
  @Input()
  public set user(value:User)
  {
    this._user=value;
    if(this._user!=undefined)
    {
      this.loginForm=new FormGroup({
        userName:new FormControl(this._user.userName,Validators.required),
        password:new FormControl(this._user.password,Validators.required)
      })
    }
  }


}
