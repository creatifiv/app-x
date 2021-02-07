import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{

 ngOnInit() { this.init(); }

  



  zero = []; ones:any = [];two:any = []; three:any = []; four:any = []; five:any = []; six:any = []; seven:any = []; eight:any = []; nine:any = []; ten:any = []; eleven:any = []; twelve:any = [];


  x = 0;

  f1 = 0;

  f2 = 0;


  interval: any;

  seconds = 200;
  getSec = 0;
  answer = 0; 
  input:number = 1;

 placeHolder:any = " ";
 showAnswer:any = null;

 value:any = " ";
  

  correct = 0;
  incorrect = 0;

  putInPlace:any= " ";

  incorrectCount = 0;
  attempt = 0;


  init(){

    this.multiply();

   this.createTimer();

  }

  stopTimer(event:any):any{

    clearTimeout(this.interval);
  }


  createTimer(){ this.interval = setInterval(() => { this.getSec = new Date().getSeconds(); if(this.getSec){this.seconds--;} if(this.seconds <= 0){this.timesUp(); }}, 1000); }


  timesUp(){

    this.seconds = 0;


    //[showAnswer is the input form value]
    this.showAnswer = this.answer;
    this.value = null;
    this.placeHolder = this.showAnswer;

    if(this.showAnswer === this.answer && this.incorrectCount < 1){

        this.incorrect++;
        this.incorrectCount++;
        console.log("Times UP:" + " " + this.answer + " " + "Loop: Incorrect:" + " " + this.incorrect);
    }

    

  }
       

  multiply():void {

    this.f1 = Math.floor(Math.random() * 12);
    this.f2 = Math.floor(Math.random() * 12);

    this.answer = this.f1 * this.f2;

    console.log("Next Answer:" + " " + this.answer);

  }



  getInput(event:any){

     this.input = Number(event.target.value);
     console.log("Get Input" + " " + this.input);
  }

  tally(){


    switch(this.f1 || this.f2){

      case 1:
      this.ones[this.x] = this.f1 + " x " + this.f2;
      break;

      case 2:
      this.two[this.x] = this.f1 + " x " + this.f2;
      break;

      case 3:
      this.three[this.x] = this.f1 + " x " + this.f2;
      break;

      case 4:
      this.four[this.x] = this.f1 + " x " + this.f2;
      break;

      case 5:
      this.two[this.x] = this.f1 + " x " + this.f2;
      break;

      case 6:
      this.six[this.x] = this.f1 + " x " + this.f2;
      break;

      case 7:
      this.seven[this.x] = this.f1 + " x " + this.f2;
      break;

      case 8:
      this.eight[this.x] = this.f1 + " x " + this.f2;
      break;

      case 9:
      this.nine[this.x] = this.f1 + " x " + this.f2;
      break;

      case 10:
      this.ten[this.x] = this.f1 + " x " + this.f2;
      break;

      case 11:
      this.eleven[this.x] = this.f1 + " x " + this.f2;
      break;

      case 12:
      this.twelve[this.x] = this.f1 + " x " + this.f2;
      break;
    

    }


    console.log(this.ones);
}

    
  



  submit(event:any){

    if(this.input === this.answer){

        this.placeHolder = " ";
        this.value = " ";

        console.log("1.Answer Submitted After Revealed" + " " + "1." + this.incorrectCount);

    }

    if(this.input === this.answer && this.showAnswer !== this.answer && this.incorrectCount < 1){

      this.correct++;
      this.incorrectCount = 0;
      this.tally();

      console.log("2.Answer was Correct" + " " + "2." + this.incorrectCount + " " + "2. Input Type:" + " " + typeof this.input);
    }

    if(this.input !== this.answer){

      this.attempt++;
      event.target.reset();
      console.log("Attempt " + this.attempt);
    }

    if(this.input !== this.answer && this.attempt == 2){

      this.placeHolder = this.answer;
    }

    if(this.input !== this.answer && this.incorrectCount < 1){

      this.incorrect++;
      this.incorrectCount++;
      

      console.log("3.Submitted Answer was Incorrect");
    }


    if(this.input === this.answer){

      event.target.reset();
      //this.seconds = 7;
      this.attempt = 0;
      this.multiply();
      this.incorrectCount = 0;
      this.input = 1;

      console.log("4. Reset");

    }

  }
 


}