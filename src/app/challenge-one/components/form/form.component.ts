
import { Component, inject, signal, computed } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'challenge-one-form',
  templateUrl: 'form.component.html'
})

export class FormComponent {

  public answer = signal<number[] | null>(null)
  public isAnswer = computed(() => !!this.answer())

  private formBuilder = inject(FormBuilder)

  public myForm: FormGroup = this.formBuilder.group({
    test: ['1,2,3,4,5,6', [Validators.required, Validators.minLength(1)]],
    sNumber: ['6', [Validators.required]],
  })

  getArrayFromTest(value: string): number[] {
    const testArr = value.trim().split(',').map(el => +el)
    return testArr
  }

  invertArr(arrNumber: number[]) {
    const invertedArr: number[] = []
    for (let i = arrNumber.length - 1; i >= 0; i--) {
      invertedArr.push(arrNumber[i])
    }
    return invertedArr
  }

  removeNumberFromArray(s: number, arrNumber: number[]){
    const removeNumberArr = arrNumber.map(num => {
      const numStr = num.toString()
      if (numStr.length > 1) {
        const arrStrNum = numStr.split("").map(n => {
          if (+n >= s) return ""
          return n
        })
        const newStrNumber = arrStrNum.toString().replace(/,/g, "")
        return newStrNumber === "" ? null : +newStrNumber
      }

      if (num >= s) return null

      return num
    })

    return removeNumberArr.filter(num => num !== null)

  }

  onSubmit() {
    if (this.myForm.invalid) {
      //todo errores
      return
    }
    const test: string = this.myForm.get('test')!.value
    const s: number = +this.myForm.get('sNumber')!.value

    const testArr = this.getArrayFromTest(test)
    const invertedArr = this.invertArr(testArr)
    const result = this.removeNumberFromArray(s, invertedArr) as number[]
    this.answer.set(result)
  }
}
