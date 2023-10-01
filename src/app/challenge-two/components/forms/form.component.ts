
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChallengeTwoService } from '../../services/challenge-two.service';

@Component({
  selector: 'challenge-two-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {

  private challTwoService = inject(ChallengeTwoService)
  private formBuilder = inject(FormBuilder)

  public myForm: FormGroup = this.formBuilder.group({
    test: ['1, 2, 3, 5, 6, 8, 9', [Validators.required, Validators.minLength(1)]],
    sNumber: ['6', [Validators.required]],
  })

  getArrayFromTest(value: string): number[] {
    const testArr = value.trim().split(',').map(el => +el)
    return testArr
  }

  onSubmit() {
    if (this.myForm.invalid) {
      //todo errores
      return
    }
    const test: string = this.myForm.get('test')!.value
    const s: number = +this.myForm.get('sNumber')!.value

    const testArr = this.getArrayFromTest(test)
    const getSquareAndSortedArr = this.challTwoService.getSquareAndSortedArr(s, testArr)
    this.challTwoService.setAnswer(getSquareAndSortedArr)
  }
}
