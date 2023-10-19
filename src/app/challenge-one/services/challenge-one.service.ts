import { Injectable, computed, signal } from "@angular/core";

@Injectable()
export class ChallengeOneService{

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

  getArrInvertedAndNumberRemoved(s: number, numArr: number[]){
    const invertedArr = this.invertArr(numArr)
    return this.removeNumberFromArray(s, invertedArr) as number[]
  }


}
