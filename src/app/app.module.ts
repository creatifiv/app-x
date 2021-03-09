import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; 
import { RouterRoutingModule } from './router/router-routing.module';



import { AppComponent } from './app.component';
import { ExpressionComponent } from './expression/expression.component';
import { SettingsComponent } from './settings/settings.component';
import { IntroComponent } from './intro/intro.component';



@NgModule({
  declarations: [
    AppComponent,
    ExpressionComponent,
    SettingsComponent,
    IntroComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
