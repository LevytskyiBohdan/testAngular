import { Component, OnInit, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/iuser';
import { UserService } from 'src/app/shared/services/user.service';
import { SelectItem } from 'primeng/api/selectitem';
import { from, Observable, } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';

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
  selectedUser: object;
  items: MenuItem[];
  isShowModal: boolean = false;
  isEditUser: boolean = false;
  isDeleteUser: boolean = false;
  isAddUser: boolean = false;

  constructor(private UserService: UserService) {
    this.getUsers();
    console.log(">>>>>")
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
  // ngOnChanges(selectedUsers: SimpleChanges) {
  //   console.log('>>>>>>>>>')
  //   for (let propName in selectedUsers) {
  //     let chng = selectedUsers[propName];
  //     let cur  = JSON.stringify(chng.currentValue);
  //     let prev = JSON.stringify(chng.previousValue);
  //     console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
  //   }
  // }

  ngOnInit(): void { }

  clickFN(): void {
    console.log(this.selectedUser)
    
  }

  isCreate(evt) {
    console.log(evt);
  }
  
  isEdit(evt) {
    this.isEditUser = true;
    this.isShowModal = true;
  }

  isDelete(evt) {
    console.log(evt);
  }

  getUsers(): void {
    this.UserService.getUsers().subscribe(data => {
        
      data.forEach(item => {
          this.fnames.push({
            label: item.fname,
            value: item.fname,
          });

          this.lnames.push({
            label: item.lname,
            value: item.lname,
          })
          
        })

        this.users = data
     
    })
  }

}
