
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ValidationsService } from 'src/app/shared/services/validations.service';
import { ChallengeThreeService } from '../../services/challenge-three.service';

@Component({
  selector: 'challenge-three-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {

  private challThreeService = inject(ChallengeThreeService)
  private formBuilder = inject(FormBuilder)
  private validationsService = inject(ValidationsService)

  private answer = signal<number | null>(null)
  public answerGetter = computed(() => this.answer())

  public myForm: FormGroup = this.formBuilder.group({
    test: [
      '5, 7, 1, 1, 2, 3, 22',
      [Validators.required, this.validationsService.validationTestNumber, this.validationsService.validationTestPositive]
    ],
  })

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

    const testArr = this.getArrayFromTest(test)
    const change = this.challThreeService.GetMinimumChange(testArr)
    this.answer.set(change)
  }
}
