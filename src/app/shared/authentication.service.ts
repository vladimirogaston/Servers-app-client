import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {}

  isActive$(user: User): Observable<boolean> {
    let ret = false;
    if(user.email == "vla@mail.com" && user.password=="123") {
      ret = true;
    }
    return of(ret);
  }
}
