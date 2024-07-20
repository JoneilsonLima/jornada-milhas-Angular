import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class FormValidators {

  static equalTo(otherField: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const filedValue = control.value;
      const otherFieldValue = control.root.get(otherField)?.value;

      if (filedValue !== otherFieldValue) {
        return { equalTo: true }
      }

      return null;
    }
  }
}
