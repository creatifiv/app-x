import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from '../intro/intro.component';
import { ExpressionComponent } from '../expression/expression.component';

const routes: Routes = [

	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path:'home', component: IntroComponent},
	{ path:'challenge-1', component: ExpressionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
