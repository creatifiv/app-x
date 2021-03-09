import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from '../intro/intro.component';
import { ExpressionComponent } from '../expression/expression.component';

const routes: Routes = [

	{ path:'intro-component', component: IntroComponent},
	{ path:'expression-component', component: ExpressionComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }
