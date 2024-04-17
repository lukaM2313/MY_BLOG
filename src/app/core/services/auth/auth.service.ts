import { Injectable } from '@angular/core';
import { IAdmin } from 'src/app/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  checkIfCredintialsMatch(userData: IAdmin): boolean {
    return (userData.username === localStorage.getItem('username')) && (userData.password === localStorage.getItem('password'));
  }
}
