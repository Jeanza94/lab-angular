import { TestBed } from '@angular/core/testing';
import { ChallengeTwoService } from '../../../src/app/challenge-two/services/challenge-two.service';
import { ChallengeTwoModule } from '../../../src/app/challenge-two/challenge-two.module';

describe('Challenge-one service', () => {

  let service: ChallengeTwoService


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChallengeTwoModule]
    })
    service = TestBed.inject(ChallengeTwoService)
  })

  test('merge - should concat the two arrays and order them, the arrays must be in asc order', () => {
    const leftArr = [1,4,6]
    const rightArr = [2,5,8]

    const concatAndSortedArr = service.merge(leftArr, rightArr)
    expect(concatAndSortedArr).toStrictEqual([1,2,4,5,6,8])

  })

  test('mergeSort - should order the array in ascending', () => {
    const arr = [4,1,5,29,21,34,7]
    const sortedArr = service.mergeSort(arr)

    expect(sortedArr).toStrictEqual([1,4,5,7,21,29,34])
  })

  test('getSquareAndSortedArr - should get the squareArr and sort the squareArr ascending', () => {
    const s = 6
    const arr = [2,4,5,1,5,8,5,10]
    const squareAndSortedArr = service.getSquareAndSortedArr(s, arr)

    expect(squareAndSortedArr).toStrictEqual([1,4,16,25,25,25,64])
  })
})
