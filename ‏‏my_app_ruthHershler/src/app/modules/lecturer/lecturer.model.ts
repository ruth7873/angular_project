export class Lecturer{
    id:number;
    userName:string;
    address:string;
    email:string;
    password:string;

constructor(id:number,password:string,fullname:string="",address:string="",email:string=""){
   this.id=id;
   this.password=password;
   this.address=address;
   this.email=email;
   this.userName=fullname;
}

}