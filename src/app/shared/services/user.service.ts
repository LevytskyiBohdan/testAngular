import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: string;

  constructor(private http: HttpClient) {
    this.users = 'http://localhost:3000/users';
  }

  // public getUsers(): Observable<Array<IUser>>{
  //   return this.http.get<Array<IUser>>(this.url);
  // }

  public getUsers():any{
    return from(fetch(this.users));
  }

  // public getUsers():any{
  //   return from(new Promise<object>((resolve, reject) => {
  //     setTimeout(() => {
  //       return resolve({
  //         key: "value>>>>"
  //       })
  //     }, 4000)
  //   }));
  // }

}
