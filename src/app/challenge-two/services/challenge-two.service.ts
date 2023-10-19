import { Injectable, computed, signal } from "@angular/core";

@Injectable()
export class ChallengeTwoService {

  mergeSort(numbers: number[]): number[] {

    if (numbers.length < 2) return numbers

    const midIndex = Math.floor(numbers.length / 2)
    const leftSide = numbers.slice(0, midIndex)
    const rightSide = numbers.slice(midIndex, numbers.length)

    return this.merge(this.mergeSort(leftSide), this.mergeSort(rightSide))

  }

  merge(leftSide: number[], rightSide: number[]) {

    const sortedArr: number[] = []
    let leftSideIndex = 0
    let rightSideIndex = 0

    while ((leftSideIndex < leftSide.length) && (rightSideIndex < rightSide.length)) {

      if (leftSide[leftSideIndex] < rightSide[rightSideIndex]) {
        sortedArr.push(leftSide[leftSideIndex])
        leftSideIndex++
      } else {
        sortedArr.push(rightSide[rightSideIndex])
        rightSideIndex++
      }
    }

    return sortedArr.concat(leftSide.slice(leftSideIndex), rightSide.slice(rightSideIndex))
  }

  private getSquareArr(s: number, num: number[]): number[] {
    const arrSquareLowerThanSS: number[] = []

    num.forEach(n => {
      if (n ** 2 <= +`${s}${s}`) {
        arrSquareLowerThanSS.push(n ** 2)
      }
    })

    return arrSquareLowerThanSS
  }

  getSquareAndSortedArr(s: number, numArr:number[]): number[] {
    const squareArr = this.getSquareArr(s, numArr)
    return this.mergeSort(squareArr)
  }


}
