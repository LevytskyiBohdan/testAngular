import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListOfHobbyService {
  url: string;

  constructor() {
    this.url = 'http://localhost:3000/listOfHobby';
  }

  getListOfHobby(): any {
    return from(fetch(this.url));
  }

}
