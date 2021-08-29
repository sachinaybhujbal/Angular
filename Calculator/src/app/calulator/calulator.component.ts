import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calulator',
  templateUrl: './calulator.component.html',
  styleUrls: ['./calulator.component.css']
})
export class CalulatorComponent implements OnInit {
  public ans : number = 0;
  public expression : string = "0";
  public historyFlag: boolean = false;
  public finalAns : boolean = false;
  public new_cal : boolean = false;
  public history_table : string[] = [];


  constructor() { }


  get_num(num:string){
    if (this.new_cal){
      this.expression = "0";
      this.new_cal = false;
      this.finalAns = false;
      this.ans = 0;
    }
    var len = this.expression.length; 
    switch(num){
      case "0":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "1":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "2":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "3":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "4":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "5":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "6":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "7":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "8":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case "9":
        if (len === 1 && this.expression[0] === "0"){
          this.expression = "";
        }
        this.expression = this.expression + num;
        break;
      case ".":
        this.expression = this.expression + num;
        break;
    }
    this.get_ans();
    console.log(num);
  }

  get_oper(opr:string){
    if (this.new_cal){
      this.expression = "0";
      this.new_cal = false;
      this.finalAns = false;
      this.ans = 0;
    }
    if (this.expression[0] === "0" && this.expression[1] !== "0"){
      if (opr === "-"){
        this.expression = "- ";
      }
      else{
        this.expression = this.expression + " " + opr + " ";
      }
    }
    else{
      this.expression = this.expression + " " + opr + " ";
    }
    this.get_ans();
    console.log(opr);
  }

  get_ans(){ 
    var arr = this.expression.split(" ");
    var i : number = 0;
    var first_opr : string = "";
    var opr : string = "";
    if (arr[i] === "-"){
      first_opr = "-";
      i = 1;
    };
    for (i; i < arr.length; i++){
      if ("+-x/%".indexOf(arr[i]) < 0){
        if(first_opr.length){
          this.ans = parseFloat(arr[i]) * -1;
          first_opr = "";
        }
        else{
          if (opr.length){
            switch(opr){
              case "+":
                this.ans = this.ans + parseFloat(arr[i]);
                break;
              case "-":
                this.ans = this.ans - parseFloat(arr[i]);
                break;
              case "x":
                this.ans = Math.round((this.ans * parseFloat(arr[i]))*10000)/10000;
                break;
              case "/":
                this.ans = Math.round((this.ans / parseFloat(arr[i]))*10000)/10000;
                break;
              case "%":
                this.ans = this.ans % parseFloat(arr[i]);
                break;
              }
            }
            else{
              this.ans = parseFloat(arr[i]);
            }
          }  
        }
      else{
        opr = arr[i];
      }
    }
  }

  get_final_ans(){
    this.get_ans();
    this.finalAns = true;
    this.new_cal = true;
    this.history_table.push(this.expression + " = " + this.ans);
  }

  history(){
    this.historyFlag = true;
  }

  screen_clear(){
    this.historyFlag = false;
    this.expression = "0";
    this.ans = 0;
    this.finalAns = false;
  }

  backspace(){
    var back_exp : string = this.expression;
    console.log(back_exp.slice(0, back_exp.length-1));
    if (back_exp.length){
      if(back_exp[back_exp.length-1] === " "){
        this.expression = back_exp.slice(0, back_exp.length-3);
      }
      else{
        this.expression = back_exp.slice(0, back_exp.length-1);
      }
    }
    this.get_ans();
  }

  ngOnInit(): void {
  }

}
