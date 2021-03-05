import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  constructor() { }

  ngOnInit() { this.init(); }


  zero:any = []; ones:any = [];two:any = []; three:any = []; four:any = []; five:any = []; six:any = []; seven:any = []; eight:any = []; nine:any = []; ten:any = []; eleven:any = []; twelve:any = [];



  x = 0; //Logs multiples correct

  f1 = 0;
  f2 = 0;

  display = "none";
  displayKeypad = "none";
  keyPadRequest = 0;
  clicks = 0;

  plusSign = "+";
  hideForm = "block";
  moveExpression = "col";
  showKeypadEntry = "none";
  keypadEntry = 0;
  bs_icon = "bi bi-plus";

  showResults = false;

  interval: any;

  seconds = 60; //Set timer
  timerComplete = false;

  getSec = 0; //Get seconds via date object
  answer = 0; //multiply answer
  input:number = 1; // unser input

 placeHolder:any = " "; // plcace holder attribute variable
 showAnswer:any = null; // stores answer from revealed from comleted timer 
 value:any = " "; //shows after 2 faied attempts 
  

  correct = 0; // correct tally
  incorrect = 0; // incorrect tally


  incorrectCount = 0;
  attempt = 0; // logs up to two attempts at answer


  init(){ this.multiply(); this.createTimer(); }

/*
  setTimer(event:any, time:number){

    this.seconds = time;

  }
  */


  stopTimer(event:any):any{

    clearTimeout(this.interval);
  }


  createTimer(){ this.interval = setInterval(() => { this.getSec = new Date().getSeconds(); if(this.getSec){this.seconds--;} if(this.seconds <= 0){this.timesUp(); }}, 1000); }



  timesUp(){

    this.seconds = 0;
    this.timerComplete = true;

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

  showSettings(event:any){

      this.display = "block";
      this.clicks++;

      if(this.clicks >= 2){

        this.display = "none"
        this.clicks = 0;
      }

  }

  showKeypad(event:any){


    this.displayKeypad = "block";
    this.moveExpression = "col-sm-5 offset-sm-1";
    this.keyPadRequest++;
    this.bs_icon = "bi bi-dash";
    this.hideForm = "none";
    this.showKeypadEntry = "block";

    if(this.keyPadRequest >= 2){

      this.displayKeypad = "none";
      this.moveExpression = "col";
      this.keyPadRequest = 0;
      this.bs_icon = "bi bi-plus";
      this.hideForm = "block";
      this.showKeypadEntry  = "none";
}
  }

  changeSettings(event:any, sec:number){

      this.seconds = sec;
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


    switch(this.f1){


      case 0:
      this.zero[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 1:
      this.ones[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 2:
      this.two[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 3:
      this.three[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 4:
      this.four[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 5:
      this.two[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 6:
      this.six[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 7:
      this.seven[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 8:
      this.eight[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 9:
      this.nine[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 10:
      this.ten[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 11:
      this.eleven[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

      case 12:
      this.twelve[this.x] = this.f1 + " x " + this.f2 + " ";
      break;

    

    }

    console.log("Tallied:" + " " + this.f1 + "X" + this.f2);
}


  k = 0;
  keyLog:any = [];
  log = 0;
  keyPressed = 0;


  keyPress(event:any){

   this.keyLog.push(Number(event.target.value));
   this.log = Number(this.keyLog.join(""));
   this.keypadEntry = this.log;
   console.log(this.log + " " + this.keyLog);

   if(this.answer <= 9){

     if(this.answer === this.keyLog[0]){

       console.log("KeyPad Answer Correct!");
     }
   }
   else if(this.answer <= 99){

     if(this.answer == this.log){

         console.log("Correct" + " "+ this.log);
     }

    }
      else if(this.answer >= 100){

        if(this.answer == this.log){

            console.log("Correct");
          }
   }

  }

  chkArray(event:any){

      this.log = 0;
      this.keyLog = [];
      console.log(this.log);
  }


  submit(event:any){

    // if answer entered was correct but not necessarily right
    if(this.input === this.answer){

        this.placeHolder = " ";
        this.value = " ";

        console.log("1.Answer Submitted After Revealed" + " " + "1." + this.incorrectCount);

    }
    //if input was correctfirst try
    if(this.input === this.answer && this.showAnswer !== this.answer && this.incorrectCount < 1){

      this.correct++;
      this.incorrectCount = 0;
      

      console.log("2.Answer was Correct" + " " + "2." + this.incorrectCount + " " + "2. Input Type:" + " " + typeof this.input);
    }
    //incorrect input/answer
    if(this.input !== this.answer){

      this.attempt++;
      event.target.reset();
      console.log("Attempt " + this.attempt);
    }
    //revelas answer after two attempts
    if(this.input !== this.answer && this.attempt == 2){

      this.placeHolder = this.answer;
    }
    // incorrect log
    if(this.input !== this.answer && this.incorrectCount < 1){

      this.incorrect++;
      this.incorrectCount++;
      this.tally();
      this.x++;
      

      console.log("3.Submitted Answer was Incorrect");
    }

    //reset epression & form
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

 


