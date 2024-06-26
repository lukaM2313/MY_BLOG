import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3500, 
    });
  }
}