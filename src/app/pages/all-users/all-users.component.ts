import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/iuser';
import { UserService } from 'src/app/shared/services/user.service';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: Array<IUser> = [];
  cols: any[];
  fnames: SelectItem[];
  lnames: SelectItem[];

  constructor(private UserService: UserService) {
    this.getUsers();

    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'fname', header: 'Name' },
      { field: 'lname', header: 'Lname' },
      { field: 'age', header: 'Age' }
  ];

    this.fnames = [
      { label: 'All users', value: null },
    ]

    this.lnames = [
      { label: 'All users', value: null },
    ]
  }

  ngOnInit(): void {
  }

  getUsers(): void {
    this.UserService.getUsers().subscribe(data => {
      data.json().then(res => {
        
        res.forEach(item => {
          this.fnames.push({
            label: item.fname,
            value: item.fname,
          });

          this.lnames.push({
            label: item.fname,
            value: item.fname,
          })
          
        })

        this.users = res
      })
    })
  }

}
