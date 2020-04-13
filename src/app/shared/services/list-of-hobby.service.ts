import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListOfHobbyService {
  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/listOfHobby';
  }

  getListOfHobby(): Observable<Array<any>> {
    return this.http.get<Array<any>>(this.url);

  }

}
