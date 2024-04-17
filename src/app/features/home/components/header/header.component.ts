import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  username = localStorage.getItem('username');

  constructor (private apiService: ApiService) {}

  logout() {
    this.apiService.logout();
  }

}
