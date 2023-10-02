import { Injectable } from "@angular/core";


@Injectable()
export class ChallengeThreeService {
  GetMinimumChange(coins: number[]): number {
    coins.sort((a, b) => a - b)

    let change = 0
    for (const coin of coins) {
      if (change < coin && change + 1 !== coin) break
      change += coin
    }

    return change + 1
  }
}
