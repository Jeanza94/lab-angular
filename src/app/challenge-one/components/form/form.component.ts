
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ChallengeOneService } from '../../services/challenge-one.service';
import { ValidationsService } from 'src/app/shared/services/validations.service';

@Component({
  selector: 'challenge-one-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {

  private challOneService = inject(ChallengeOneService)
  private formBuilder = inject(FormBuilder)
  private validationsService = inject(ValidationsService)

  private answer = signal<number[] | null>(null)
  public answerGetter = computed(() => this.answer())

  public myForm: FormGroup = this.formBuilder.group({
    test: ['1,2,3,4,5,6', [Validators.required, Validators.minLength(1), this.validationTest]],
    sNumber: ['6', [Validators.required, this.validationsService.validationS]],
  })

  validationTest(control: AbstractControl) {
    const value:string = control.value

    const isNotNumber= value.trim().split(',').some(elem => isNaN(+elem))
    if (isNotNumber) return {notNumber: true}

    const isNotPositive= value.trim().split(',').some(elem => +elem < 0)
    if (isNotPositive) return {notPositive: true}

    return null
  }

  isError(control: AbstractControl) {
    return this.validationsService.isError(control)
  }

  getMessageError(error: {[key: string]: any} | null) {
    if (!error) return null
    return this.validationsService.getMessageError(error)
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
    const invertedArrAndNumberRemoved = this.challOneService.getArrInvertedAndNumberRemoved(s, testArr)
    this.answer.set(invertedArrAndNumberRemoved)
    console.log(this.myForm)
  }
}
