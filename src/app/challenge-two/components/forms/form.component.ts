
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ChallengeTwoService } from '../../services/challenge-two.service';
import { ValidationsService } from '../../../shared/services/validations.service';

ValidationsService
@Component({
  selector: 'challenge-two-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {


  private challTwoService = inject(ChallengeTwoService)
  private formBuilder = inject(FormBuilder)
  private validationService = inject(ValidationsService)

  private answer = signal<number[] | null>(null)

  public answerGetter = computed(() => this.answer())

  public myForm: FormGroup = this.formBuilder.group({
    test: ['1, 2, 3, 5, 6, 8, 9', [Validators.required, this.validationService.validationTestNumber]],
    sNumber: ['7', [Validators.required, this.validationService.validationS]],
  })

  isError(control: AbstractControl) {
    return this.validationService.isError(control)
  }

  getMessageError(error: {[key: string]: any} | null) {
    if (!error) return null
    return this.validationService.getMessageError(error)
  }

  getArrayFromTest(value: string): number[] {
    const testArr = value.trim().split(',').map(el => +el)
    return testArr
  }

  onSubmit() {
    if (this.myForm.invalid) {
      //todo errores
      this.myForm.markAsTouched()
      return
    }
    const test: string = this.myForm.get('test')!.value
    const s: number = +this.myForm.get('sNumber')!.value

    const testArr = this.getArrayFromTest(test)
    const getSquareAndSortedArr = this.challTwoService.getSquareAndSortedArr(s, testArr)
    this.answer.set(getSquareAndSortedArr)
  }
}
