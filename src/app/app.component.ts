import { Component, VERSION } from "@angular/core";
import { RouterOutlet } from '@angular/router';

import { Title } from '@angular/platform-browser';


@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{



	public constructor(private titleService: Title) { }

  	public setTitle(newTitle: string) {

    	this.titleService.setTitle(newTitle);
  	}

  

 }