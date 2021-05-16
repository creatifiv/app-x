import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterRoutingModule } from './router/router-routing.module';



import { AppComponent } from './app.component';
import { ExpressionComponent } from './expression/expression.component';
import { SettingsComponent } from './settings/settings.component';
import { IntroComponent } from './intro/intro.component';
import { AddSubtractComponent } from './add-subtract/add-subtract.component';
import { OopsComponent } from './oops/oops.component';



@NgModule({
  declarations: [
    AppComponent,
    ExpressionComponent,
    SettingsComponent,
    IntroComponent,
    AddSubtractComponent,
    OopsComponent,

  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    RouterRoutingModule
    
  ],
  providers: [

    Title,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
