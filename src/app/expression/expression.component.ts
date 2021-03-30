import { Component, OnInit, ViewChild } from '@angular/core';

import * as bootstrap from 'bootstrap';



@Component({
  selector: 'app-expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  constructor() { }

  @ViewChild('bs') div:any;

  ngOnInit() { this.init(); }
  ngAfterViewInit() { console.log(this.div); let bs = new bootstrap.Modal(this.div, {keyboard: true}); bs.toggle();}




  zero:any = []; ones:any = [];two:any = []; three:any = []; four:any = []; five:any = []; six:any = []; seven:any = []; eight:any = []; nine:any = []; ten:any = []; eleven:any = []; twelve:any = [];


  x = 0; //Logs multiples correct
  ii = 0


  f1 = 0;
  f2 = 0;




  displaySettings = "none";
  displayKeypad = "none";
  keyPadRequest = 0;
  clicks = 0;
  btnDisabled = false;

  plusSign = "+";
  hideForm = "block";
  moveExpression = "col";
  showKeypadEntry = "none";
  keypadEntry:any = null;
  bs_icon = "bi bi-plus";

  countDown = 3;

  keyPressed = 0;

  random = true;
  multiples = false;
  factor = 8;

  selectedSeconds = 0;
  selectedFactors = 0;
  selectedMultiiples = false;
  selectedRandom = true;


  k = 0;
  keylogConverted = 0;
  keysPressCount = 0;
  keyPadCount = 0;
  keyLog:any = [];
  answerLog:any[] = [];

  ansC = 0;
  keyC = 1;


  turnRed:any = null;
  redTimer = 0; // if answer is wrong
  blackTimer = 0; //if answer i sright

  eKey:number = NaN;
  keyPressAnsLog:any = [];
  answerLogTwo:any = [];



  showResults = false;

  interval: any;

  seconds = 0; //Set timer
  timerComplete = true;
  timeToAnswer = 7;

  getSec = 0; //Get seconds via date object
  answer = 0; //multiply answer
  answerToString:any = null;
  input:number = 1; // unser input

  placeHolder:any = " "; // plcace holder attribute variable
  showAnswer:any = null; // stores answer from revealed from comleted timer 
  value:any = " "; //shows after 2 faied attempts 
  

  correct = 0; // correct tally
  incorrect = 0; // incorrect tally


  incorrectCount = 0;
  attempt = 0; // logs up to two attempts at answer


  init(){ this.multiply(); }

/*
  setTimer(event:any, time:number){

    this.seconds = time;

  }
  */


  stopTimer(){

    clearTimeout(this.interval);
    console.log("Timer Stopped");
  }


  createTimer(){ 

      this.interval = setInterval(() => { 
      this.getSec = new Date().getSeconds(); 
      console.log("Interval" + " " + this.interval);  
      if(this.getSec){this.seconds--;} 
      if(this.seconds <= 0){this.timesUp(); } 
      if(this.redTimer > 0){this.redTimer++;  console.log("RedTImer" + " " + this.redTimer); 
      if(this.redTimer == 3){this.turnRed = null; this.keypadEntry = this.answer;} 
      if(this.redTimer == 5){this.clearRedTimer();} /*inside end of red timer*/} 
      if(this.blackTimer > 0){this.blackTimer++; console.log("Black TImer" + " " + this.blackTimer); 
      if(this.blackTimer == 2){this.clearBlackTimer();}/*End of black timer*/}    }, 1000); 

    };




  timesUp(){

    //this.stopTimer();
    this.seconds = 0;
    this.timerComplete = true;

    //[showAnswer is the input form value]
    this.showAnswer = this.answer;
    this.turnRed = null;
    this.keypadEntry = this.answer;
    this.value = null;
    this.placeHolder = this.showAnswer;

    if(this.showAnswer === this.answer && this.incorrectCount < 1){

        this.incorrect++;
        this.incorrectCount++;
        console.log("Times UP:" + " " + this.answer + " " + "Loop: Incorrect:" + " " + this.incorrect);
    }


  }

  showSettings(event:any){

      this.displaySettings = "block";
  }

  closeSettings(event:any){

    this.displaySettings = "none";
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

      this.selectedSeconds = sec;
  }


changeFactors(event:any, random:boolean, multiples:boolean, factor:number){

    this.selectedRandom = random;
    this.selectedMultiiples = multiples;
    this.selectedFactors = factor;

    console.log("Rundo");
}

  start(event:any){

    
     this.displaySettings = "none";
     this.stopTimer();
     this.startAfterTimer();

  }

startAfterTimer(){

     this.seconds = this.selectedSeconds;
     this.random = this.selectedRandom;
     this.multiples = this.selectedMultiiples;
     this.factor = this.selectedFactors

     this.multiply();
     this.createTimer();

     console.log("Startbutton clicked");

}
       

  multiply():void {

    
   if(this.random == true){

      this.f1 = Math.floor(Math.random() * 12);
      this.f2 = Math.floor(Math.random() * 12);

      this.answer = this.f1 * this.f2;

      console.log("Random-Answer" + " " + this.answer);

      this.convertAnswer();
    }

    if(this.multiples == true){

       this.f1 = Math.floor(Math.random() * 12);
       this.f2 = this.factor;

       this.answer = this.f1 * this.f2;

      console.log("Multiples-Answer" + " " + this.answer);

      this.convertAnswer();

    }

      console.log("Multiply() Fired");
  }

  convertAnswer(){

  this.clearLogs();

  this.answerToString = this.answer.toString();

  let i = 0;

    for(i; this.answerLog.length < this.answerToString.length; i++){

         this.answerLog.push(Number(this.answerToString.charAt(i)));

         console.log('\n', "Answe Log Conversion Called" + " " + '\n', "Answer Log Check:" + " " + this.answerLog);
    }

 }



  getInput(event:any){

     this.input = Number(event.target.value);
     console.log("Get Input" + " " + this.input);
  }

  tally(){


    switch(this.f2){


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

    }

    console.log("Tallied:" + " " + this.f1 + "X" + this.f2);
}




  clearLogs(){

       this.keypadEntry = null;
       this.keyLog = [];
       this.keylogConverted = 0;
       this.answerLog = [];
       this.keyPadCount = 0;
       this.turnRed = "black";
       this.keysPressCount = 0;
       this.ii = 0;
       this.ansC = 0;
       this.keyC = 1; 
  }

  clearRedTimer(){

    this.redTimer = 0;
    this.btnDisabled = false;
    this.multiply();
  }


  clearBlackTimer(){

    this.blackTimer = 0;
    this.multiply();
  }


  keyPadPress(event:any){

   this.keyLog.push(Number(event.target.value));
   this.keylogConverted = Number(this.keyLog.join(""));
   this.keypadEntry = this.keylogConverted;
   this.keyPadCount++;

   console.log("Key Press Data", '\n' + " " + "KeyLog Converted:" + " " + this.keylogConverted + " " +  " KeyLog: " +  " " + this.keyLog + " " + " Answer Log: "  + this.answerLog + " " + " KeyLog Length: " + " " + this.keyLog.length + " " + "Key Pad Count:" + " " + this.keyPadCount);


    if(this.keyPadCount == 1 && this.answerLog.length == 1){

      if(this.keyLog[0] == this.answerLog[0]){ 

        this.turnRed = "green";
        console.log("Right");
        this.correct++; 
        this.blackTimer = 1;

      }
      else if(this.keyLog[0] != this.answerLog[0]){

                this.turnRed = "red";
                this.btnDisabled = true;
                this.incorrect++;
                this.redTimer = 1;
        }
    }


    if(this.answerLog.length == 2){ 

        if(this.keyPadCount == 1){

           if(this.keyLog[0] == this.answerLog[0]){ 

             this.turnRed = "green";
            console.log("Right"); 
          }  
        else if(this.keyLog[0] != this.answerLog[0]){

              this.turnRed = "red";
              this.btnDisabled = true;
              this.incorrect++;
              this.redTimer = 1;
              console.log(" 2 is Red");
        }  
      }

      if(this.keyPadCount == 2){

        if(this.keyLog[1] == this.answerLog[1]){

            this.turnRed = "green";
            console.log("Right");
            this.correct++;
            this.blackTimer = 1;
          }
          else if(this.keyLog[1] != this.answerLog[1]){

              this.turnRed = "red";
              this.btnDisabled = true;
              this.incorrect++;
              this.redTimer = 1;
              console.log(" 2 is Red");
          }
        }

    }


    if(this.answerLog.length == 3){ 

        if(this.keyPadCount == 1){

           if(this.keyLog[0] == this.answerLog[0]){ 

             this.turnRed = "green";
            console.log("Right"); 
          }  
        else if(this.keyLog[0] != this.answerLog[0]){

              this.turnRed = "red";
              this.btnDisabled = true;
              this.incorrect++;
              this.redTimer = 1;

              console.log(" 3 is Red");
        }  
      }

      if(this.keyPadCount == 2){

           if(this.keyLog[1] == this.answerLog[1]){ 

             this.turnRed = "green";
            console.log("Right"); 
          }  
        else if(this.keyLog[1] != this.answerLog[1]){

              this.turnRed = "red";
              this.btnDisabled = true;
              this.incorrect++;
              this.redTimer = 1;
              console.log(" 3 is Red");
        }  
      }

      if(this.keyPadCount == 3){

           if(this.keyLog[2] == this.answerLog[2]){ 

             this.turnRed = "green";

            console.log("Right"); 
            this.incorrect++;
            this.blackTimer = 1;
          }  
        else if(this.keyLog[2] != this.answerLog[2]){

              this.turnRed = "red";
              this.btnDisabled = true;
              this.incorrect++;
              this.redTimer = 1;
              console.log(" 3 is Red");

        }  
      }

    }

  }


  chkArray(event:any){

      this.keylogConverted = 0;
      this.keyLog = [];
      console.log(this.keylogConverted);
  }

  reset(event:any){

      this.timerComplete = false;
      this.displaySettings = "block";

  }


  getKeyPress(event:any){ 



    this.eKey = Number(event.key);
    

    if(this.eKey >= 0){

        this.keysPressCount++; 
        console.log(this.keysPressCount);

      }else{

        console.log("Key Typed" + " " + this.eKey);
      }

    if(this.keysPressCount == this.keyC && this.eKey === this.answerLog[this.ansC]){

        this.turnRed = "green";
        console.log("Answer C" + " " + this.ansC + " " + "KeyCr" + " " + this.keyC);

    }else if(this.keysPressCount == this.keyC && this.eKey !== this.answerLog[this.ansC]){

      this.turnRed = "red";
      console.log(this.keysPressCount + "." + "Incorrect Answer" + " " + " TurnRed:" + " " + this.turnRed + " " + "Anslog Type " + typeof this.input);
    }

    this.ansC++;
    this.keyC++;
    this.ii++;

     console.log("Keypress event fired!" + " " + " KeyPress Count:" + " " + this.ii);
  
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

      this.turnRed = "green";
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
    if(this.input !== this.answer && this.attempt == 1){

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

 


