import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorModalVisibleSubject = new BehaviorSubject<boolean>(false);
  private errorTitleSubject = new BehaviorSubject<string>('');
  private errorMessageSubject = new BehaviorSubject<string>('');

  errorModalVisible$: Observable<boolean> = this.errorModalVisibleSubject.asObservable();
  errorTitle$: Observable<string> = this.errorTitleSubject.asObservable();
  errorMessage$: Observable<string> = this.errorMessageSubject.asObservable();

  constructor() { }

  handleError(error: Error) {
    console.log(error);
    this.errorModalVisibleSubject.next(true);
    this.errorTitleSubject.next(error.name);
    this.errorMessageSubject.next(error.message);
  }

  cleanUpService() {
    this.errorMessageSubject.next('');
    this.errorModalVisibleSubject.next(false);
    this.errorTitleSubject.next('');
  }

}
