import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'challenge-one',
    loadChildren: () => import('./challenge-one/challenge-one.module').then(m => m.ChallengeOneModule)
  },
  {
    path: '**',
    redirectTo: 'challenge-one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
