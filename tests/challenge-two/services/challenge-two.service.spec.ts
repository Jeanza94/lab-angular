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

  test('getSquareAndSortedArr - should get the squareArr and sort the squareArr ascending', () => {
    //66
    const s = 6
    const arr = [2,4,5,1,5,8,5,10]
    // 4, 16, 25, 1, 25, 64, 25, 100
    const squareAndSortedArr = service.getSquareAndSortedArr(s, arr)

    expect(squareAndSortedArr).toStrictEqual([1,4,16,25,25,25,64])
  })
})
