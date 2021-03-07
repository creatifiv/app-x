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
  keypadEntry:any = null;
  bs_icon = "bi bi-plus";


  k = 0;
  keylogConverted = 0;
  keyPressCount = 0;
  keyLog:any = [];
  answerLog:any[] = [];


  turnRed = false;

  showResults = false;

  interval: any;

  seconds = 60; //Set timer
  timerComplete = false;

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

  random = true;
  multiples = false;
  factor = 8;


changeFactors(event:any, random:boolean, multiples:boolean, factor:number){

    this.random = random;
    this.multiples = multiples;
    this.factor = factor;
    this.multiply();

    console.log("Rundo");

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


  }

  convertAnswer(){

  this.clearLogs();

  this.answerToString = this.answer.toString();

  let i = 0;

    for(i; this.answerLog.length < this.answerToString.length; i++){

         this.answerLog.push(this.answerToString.charAt(i));

         console.log('\n', "Answe Log Conversion Called" + " " + '\n', "Answer Log Check:" + " " + this.answerLog);
    }

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

  clearKeypadEntry(event:any){

    this.keypadEntry = null;
    this.keyLog = [];
  }


  clearLogs(){

       this.keypadEntry = null;
       this.keyLog = [];
       this.keylogConverted = 0;
       this.answerLog = [];
       this.keyPressCount = 0;
  }


  keyPress(event:any){

   this.keyLog.push(Number(event.target.value));
   this.keylogConverted = Number(this.keyLog.join(""));
   this.keypadEntry = this.keylogConverted;
   this.keyPressCount++;

   console.log("Key Press Data", '\n' + " " + "KeyLog Converted:" + " " + this.keylogConverted + " " +  " KeyLog: "  

     +  " " + this.keyLog + " " + " Answer Log: "  + this.answerLog + " " + " KeyLog Length: " + " " + this.keyLog.length + " " + "Key Press Count:" + " " + this.keyPressCount);


    if(this.keyPressCount == 1 && this.answerLog.length == 1){

      if(this.keyLog[0] == this.answerLog[0]){ 

        console.log("Right"); 
        this.multiply();

      }
      else if(this.keyLog[0] != this.answerLog[0]){

                this.turnRed = true;
        }
    }


    if(this.answerLog.length == 2){ 

        if(this.keyPressCount == 1){

           if(this.keyLog[0] == this.answerLog[0]){ 

            console.log("Right"); 
          }  
        else if(this.keyLog[0] != this.answerLog[0]){

              this.turnRed = true;
              console.log(" 2 is Red");
        }  
      }

      if(this.keyPressCount == 2){

        if(this.keyLog[1] == this.answerLog[1]){

            console.log("Right");
            this.multiply();
          }
          else if(this.keyLog[1] != this.answerLog[1]){

              this.turnRed = true;
              console.log(" 2 is Red");
          }
        }

    }


    if(this.answerLog.length == 3){ 


        if(this.keyPressCount == 1){

           if(this.keyLog[0] == this.answerLog[0]){ 

            console.log("Right"); 
          }  
        else if(this.keyLog[0] != this.answerLog[0]){

              this.turnRed = true;
              console.log(" 3 is Red");
        }  
      }

      if(this.keyPressCount == 2){

           if(this.keyLog[1] == this.answerLog[1]){ 

            console.log("Right"); 
          }  
        else if(this.keyLog[1] != this.answerLog[1]){

              this.turnRed = true;
              console.log(" 3 is Red");
        }  
      }

      if(this.keyPressCount == 3){

           if(this.keyLog[2] == this.answerLog[2]){ 

            console.log("Right"); 
            this.multiply();
          }  
        else if(this.keyLog[2] != this.answerLog[2]){

              this.turnRed = true;
              console.log(" 3 is Red");


        }  
      }






    }



    

/*
    if(this.answerLog.length == 1 && this.keyLog[0] == this.answerLog[1]){

          console.log("Correct!")
      }


*/


/*
   if(this.answerLog.length == 1){

     if(this.keyLog[0] == this.answerLog[0]){

       console.log("KeyPad Answer Correct!");
       this.multiply();

     }

     else if(this.keyLog[0] != this.answerLog[0]){

           this.turnRed = true;
           console.log("Not Equal to 1" + " " + " KeyLog: " + this.keyLog.length + " " + "AnswerLog Length:" + this.answerLog.length);
     }

   } else if(this.keyPressCount == 2){ 

       if(this.answerLog.length == 2){

         if(this.keyLog[0] == this.answerLog[0]){

       if(this.keyLog[1] == this.answerLog[1]){

         console.log("Correct" + " "+ this.keylogConverted);
         this.multiply();
       }
     }
   }
        else if(this.keyLog[0] != this.answerLog[0] && this.keyLog[1] != this.keyLog[1]){

           this.turnRed = true;
           console.log("Less than 99" + " " + " Answer Log:" + this.answerLog[0]);
       }

    }
      else if(this.keyPressCount == 3){

        if(this.answerLog.length == 3){

          if(this.answer == this.keylogConverted){

              this.multiply();
              console.log("Correct");
            }
        }
           else if(this.keyLog[0][1][2] != this.answer){

           this.turnRed = true;
         }
     }

     */
  }

  chkArray(event:any){

      this.keylogConverted = 0;
      this.keyLog = [];
      console.log(this.keylogConverted);
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

 


