import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class ValidationsService {

  validationS(control: AbstractControl) {
    const value: string = control.value
    if (+value < 1 || +value > 9) return {
      notInRange: true
    }
    return null
  }

  isError(control: AbstractControl) {
    return control.errors && control.touched
  }

  getMessageError(error: {[key: string]: any}) {
    const keys = Object.keys(error)
    if (keys.length === 0) return null
    switch (keys[0]) {
      case 'required':
        return 'The field is required'

      case 'minlength':
        return `The field requires minimum characters`

      case 'notInRange':
        return "The number is not in range [1,9]"

      case 'notNumber':
        return "There are text and we need only numbers"

      case 'notPositive':
        return "There are some negative numbers"

      default:
        return "Error no controlado"
    }
  }
}
