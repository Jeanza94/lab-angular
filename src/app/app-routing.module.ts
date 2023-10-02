import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'challenge-one',
    loadChildren: () => import('./challenge-one/challenge-one.module').then(m => m.ChallengeOneModule)
  },
  {
    path: 'challenge-two',
    loadChildren: () => import('./challenge-two/challenge-two.module').then(m => m.ChallengeTwoModule)
  },
  {
    path: 'challenge-three',
    loadChildren: () => import('./challenge-three/challenge-three.module').then(m => m.ChallengeThreeModule)
  },
  {
    path: '**',
    redirectTo: 'challenge-one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
