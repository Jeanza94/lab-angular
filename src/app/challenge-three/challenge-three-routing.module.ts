
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'problem',
        component: MainPageComponent
      },
      {
        path: '**',
        redirectTo: 'problem'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChalengeThreeRoutingModule { }
