import { TestBed } from '@angular/core/testing';
import { ChallengeThreeService } from '../../../src/app/challenge-three/services/challenge-three.service';
import { ChallengeThreeModule } from '../../../src/app/challenge-three/challenge-three.module';


describe('Challenge-one service', () => {

  let service: ChallengeThreeService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChallengeThreeModule]
    })
    service = TestBed.inject(ChallengeThreeService)
  })

  test('GetMinimumChange - should get the minimum amount that you CANNOT give change, based on the coins array', () => {

    const coins = [5, 7, 1, 1, 2, 3, 22]

    const minimumChange = service.GetMinimumChange(coins)

    expect(minimumChange).toBe(20)
  })
})
