import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Custom validator function
export function passwordMatchValidator(controlName1: string, controlName2: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get(controlName1)?.value;
    const repeatPassword = control.get(controlName2)?.value;

    if (password !== repeatPassword) {
      return { passwordMismatch: true };
    }

    return null;
  };
}
