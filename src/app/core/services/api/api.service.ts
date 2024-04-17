import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IAdmin } from 'src/app/interfaces/IUser';
import { IAdminRegistration } from 'src/app/interfaces/IUserRegistration';
import { AuthService } from '../auth/auth.service';
import { BASE_URL } from '../../constants/api-urls';
import { EApiCommands } from '../../enums/EApiCommands';
import { Observable } from 'rxjs';
import { IUpdatePost } from 'src/app/features/home/interfaces/IUpdatePost';
import { IPostDataToSend } from 'src/app/features/home/interfaces/IPosts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  addAmin(userData: IAdminRegistration) {
    //this is where you would make real api call
    localStorage.setItem('username', userData.username);
    localStorage.setItem('password', userData.password);
    localStorage.setItem('email', userData.email);

    const fakeToken = 'fake_token12121';

    localStorage.setItem('token', fakeToken);


    this.router.navigate(['/home']);
  }

  async loginAsAdmin(userData: IAdmin) {
    if(this.authService.checkIfCredintialsMatch(userData)) {

      const fakeToken = 'fake_token12121';
      localStorage.setItem('token', fakeToken);

      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login'], { queryParams: { error: 'incorrect-credentials' } });
    }
  }

  getUsers(): Observable<any> {
    const userUrl = `${BASE_URL}/${EApiCommands.GET_USER}`;
    return this.http.get(userUrl);
  }

  getPosts(): Observable<any> {
    const postsUrl = `${BASE_URL}/${EApiCommands.POSTS}`;
    return this.http.get(postsUrl);
  }

  deletePost(postId: number): Observable<any> {
    const deleteUrl = `${BASE_URL}/${EApiCommands.POSTS}/${postId}`;
    return this.http.delete(deleteUrl);
  }

  updatePost(postId: number, updateData: IUpdatePost) {
    const updateUrl = `${BASE_URL}/${EApiCommands.POSTS}/${postId}`;
    return this.http.put(updateUrl, updateData);
  }

  addPost(postData: IPostDataToSend) {
    const addPostUrl = `${BASE_URL}/${EApiCommands.POSTS}`;
    return this.http.post(addPostUrl, postData);
  }


  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}
