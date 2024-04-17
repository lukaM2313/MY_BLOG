import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { UserService } from './services/UserService/user.service';
import { ErrorService } from './services/Error-service/error.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  private userSubscription!: Subscription;
  private errorModalVisibleSubscription!: Subscription;
  private errorTiTleSubscription!: Subscription;
  private errorMessageSubscription!: Subscription;

  isErrorModalVisible: boolean = false;
  errorTitle: string = '';
  errorMessage: string = '';


  constructor(
    private apiService: ApiService, 
    private userService: UserService, 
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.errorOnInit();
    this.userSubscription = this.apiService.getUsers().subscribe({
      next: (userData) => {
        this.userService.setData(userData);
        this.userService.addSelected();
      },
      error: (error) => {
        this.errorService.handleError(error);
        this.isErrorModalVisible = true;
      }
    });
  }

  errorOnInit() {
    this.errorModalVisibleSubscription = this.errorService.errorModalVisible$.subscribe({
      next: (isVisible: boolean) => {
        this.isErrorModalVisible = isVisible;
      },
      error: (error) => {
        console.log(error);
      }
    });
    this.errorTiTleSubscription = this.errorService.errorTitle$.subscribe({
      next: (title: string) => {
        this.errorTitle = title;
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.errorMessageSubscription = this.errorService.errorMessage$.subscribe({
      next: (title: string) => {
        this.errorTitle = title;
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.closeModal();
  }


  closeModal() {
    this.isErrorModalVisible = false;
  }

  ngOnDestroy(): void {
    if(this.userSubscription) this.userSubscription.unsubscribe();
    if(this.errorModalVisibleSubscription) this.errorModalVisibleSubscription.unsubscribe();
    if(this.errorTiTleSubscription) this.errorTiTleSubscription.unsubscribe();
    if(this.errorMessageSubscription) this.errorMessageSubscription.unsubscribe();
    this.errorService.cleanUpService();
  }

}
