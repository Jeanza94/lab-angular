
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChallengeOneService } from '../../services/challenge-one.service';

@Component({
  selector: 'challenge-one-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {

  private answer = signal<number[] | null>(null)

  private challOneService = inject(ChallengeOneService)
  private formBuilder = inject(FormBuilder)

  public answerGetter = computed(() => this.answer())

  public myForm: FormGroup = this.formBuilder.group({
    test: ['1,2,3,4,5,6', [Validators.required, Validators.minLength(1)]],
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
    const invertedArrAndNumberRemoved = this.challOneService.getArrInvertedAndNumberRemoved(s, testArr)
    this.answer.set(invertedArrAndNumberRemoved)

  }
}
