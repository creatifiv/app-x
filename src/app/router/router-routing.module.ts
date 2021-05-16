import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from '../intro/intro.component';
import { ExpressionComponent } from '../expression/expression.component';
import { OopsComponent } from '../oops/oops.component';

const routes: Routes = [

	{ path: '', redirectTo:'/home', pathMatch: 'full' },
	{ path:'home', component: IntroComponent},
	{ path:'challenge-1', component: ExpressionComponent},
	{ path:'**', pathMatch:'full', component: OopsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
