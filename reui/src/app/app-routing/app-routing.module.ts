import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

const appRoutes: Routes = [
    {
      path: '', redirectTo: 'main', pathMatch: 'full'
    },
    {
      path: 'main', component: AppComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
