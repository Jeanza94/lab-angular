import { TestBed } from '@angular/core/testing';
import { ChallengeOneService } from '../../../src/app/challenge-one/services/challenge-one.service';
import { ChallengeOneModule } from '../../../src/app/challenge-one/challenge-one.module';

describe('Challenge-one service', () => {

  let service: ChallengeOneService
  const s = 6
  const arr = [2, 4, 5, 1, 5, 8, 5]

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChallengeOneModule]
    })
    service = TestBed.inject(ChallengeOneService)
  })

  test('invertArr - should invert the array from right to left', () => {
    const invertedArr = service.invertArr(arr)

    expect(invertedArr).toStrictEqual([5,8,5,1,5,4,2])
  })

  test('removeNumberFromArray - should delete the digitNumber with the condition number >= s', () => {
    const numberRemovedArr = service.removeNumberFromArray(s,arr)

    expect(numberRemovedArr).toStrictEqual([2,4,5,1,5,5])
  })

  test('getArrInvertedAndNumberRemoved - should invert the array from right to left and delete the number based on the condition', () => {

    const invertedArrAndNumberRemoved = service.getArrInvertedAndNumberRemoved(s, arr)

    expect(service.getArrInvertedAndNumberRemoved(s, arr)).toStrictEqual([5, 5, 1, 5, 4, 2])
  })
})
