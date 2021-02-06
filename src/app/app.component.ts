import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent{

 ngOnInit() { this.init(); }

  



  zero = []; one: number[] = [];two = []; three = []; four = []; five = []; six = []; seven = []; eight = []; nine = []; ten = []; eleven = []; twelve = [];

  x = 0;

  f1 = 0;

  f2 = 0;


  interval: any;

  seconds = 20;
  getSec = 0;
  answer = 0; 
  input:number = 1;

 placeHolder = " ";
 showAnswer:any = null;

 value:any = " ";
  

  correct = 0;
  incorrect = 0;

  putInPlace:any= " ";

  incorrectCount = 0;


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

    this.f1 = Math.floor(Math.random() * 0);
    this.f2 = Math.floor(Math.random() * 12);

    this.answer = this.f1 * this.f2;

    console.log("Next Answer:" + " " + this.answer);

  }



  getInput(event:any){

     this.input = Number(event.target.value);
     console.log("Get Input" + " " + this.input);

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

      console.log("2.Answer was Correct" + " " + "2." + this.incorrectCount + " " + "2. Input Type:" + " " + typeof this.input);
    }

    if(this.input !== this.answer && this.incorrectCount < 1){

      this.incorrect++;
      this.incorrectCount++;

      console.log("3.Submitted Answer was Incorrect");
    }


    if(this.input === this.answer){

      event.target.reset();
      this.seconds = 7;
      this.multiply();
      this.incorrectCount = 0;
      this.input = 1;

      console.log("4. Reset");

      if(this.f1 == 1){

        this.one[this.x] = this.f1 && this.f2;
        this.x++;

        console.log(this.one[this.x]);
      }

    } else{

      console.log("5.Wrong answer");
    }

  }
 


}