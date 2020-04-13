import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/iuser';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  providers: [UserService],

})
export class EditUserComponent implements OnInit {
  @Input() user: IUser;

  fname: string;
  lname: string;
  age: number;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.fname = this.user.fname;
    this.lname = this.user.lname;
    this.age = this.user.age;
  }

  isEdit(): void {
    console.log(this.user)
    this.UserService.editUser( {
      ...this.user,
      fname: this.fname,
      lname: this.lname,
      age: Number(this.age),
    }).subscribe(()=>{
      this.UserService.getUsers();
    })
  }

}
