import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/iuser';
import { from, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/users';
  }

  public getUsers(): Observable<Array<IUser>> {
    return this.http.get<Array<IUser>>(this.url);
  }

  public addUser(user: IUser): Observable<Array<IUser>> {
    return this.http.post<Array<IUser>>(this.url, user);
  }

  public editUser(user: IUser): Observable<Array<IUser>> {
    console.log(user)
    return this.http.put<Array<IUser>>(`${this.url}/${user.id}`, user)
  }

  public deleteUser(id: number): Observable<Array<IUser>> {
    return this.http.delete<Array<IUser>>(`${this.url}/${id}`)
  }



  // public getUsers():any{
  //   return from(fetch(this.users));
  // }

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
