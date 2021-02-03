import { Component, VERSION, Output, Input, EventEmitter } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {

  ngOnInit() { this.init(); }



  zero = []; one: number[] = [];two = []; three = []; four = []; five = []; six = []; seven = []; eight = []; nine = []; ten = []; eleven = []; twelve = [];

  x = 0;

  f1 = 0;

  f2 = 0;


  interval: any;

  seconds = 3;
  getSec = 0;
  answer = 0; 
  input = 0;

  showAnswer:any = null;
  placeHolder:any = " ";
  

  correct = 0;
  incorrect = 0;

  incorrectCount = 0;



  init(){

    this.multiply();

   this.createTimer();

  }

  stopTimer(event:any):any{

    clearTimeout(this.interval);
  }


  createTimer(){ this.interval = setInterval(() => { this.getSec = new Date().getSeconds(); if(this.getSec){this.seconds--;} if(this.seconds <= 0){this.timesUp();}}, 1000); }


  timesUp(){

    this.seconds = 0;


    //[showAnswer is the input form value]
    this.showAnswer = this.answer;
    this.placeHolder = this.showAnswer;

    if(this.showAnswer == this.answer && this.incorrectCount < 1){

        this.incorrect++;
        this.incorrectCount++;
        console.log("Times UP:" + " " + this.answer + " " + "Incorrect:" + " " + this.incorrect);
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
  }


  submit(event:any){



    if(this.input == this.answer){

        this.incorrectCount = 0;
        this.placeHolder = " ";


        console.log("Answer Submitted After Revealed");
    }

    if(this.input == this.answer && this.showAnswer != this.answer){

      this.correct++;

      console.log("Answer was Correct");
    }

    if(this.input != this.answer && this.incorrectCount < 1){

      this.incorrect++;
      this.incorrectCount++;


      console.log("Submitted Answer was Incorrect");
    }


    if(this.input === this.answer){

      event.target.reset();

      this.seconds = 7;
      this.multiply();
      

      if(this.f1 == 1){

        this.one[this.x] = this.f1;
        this.x++;

        console.log(this.one);
      }

    } else{

      console.log("Wrong answer");
    }

  }
 


}