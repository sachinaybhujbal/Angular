import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bank';
  accounts : Customers[] = [];
  acc : any;
  flag : string = "";
  constructor(){
    var shubham = new Customers("Shubham Deshmukh",24,7890,1000,1);
    this.accounts.push(shubham);
    var sagar = new Customers("Sagar Ghule",24,7890,1100,2);
    this.accounts.push(sagar);
  }

  newCustomer(){
    var acc_no = parseInt((<HTMLInputElement>document.getElementById("acc_no")).value);
    for (var i = 0; i < this.accounts.length; i++){
      if (this.accounts[i].Account_No == acc_no){
        this.acc = i;
      }
    }
  }

  checkBalance(){this.flag = "b";}
  Withdraw(){this.flag = "w"}
  Deposit(){this.flag = "d"}
  updateBalance(){
    if (this.flag === "w"){
      var amt = parseInt((<HTMLInputElement>document.getElementById("w_amount")).value);
      var success = this.accounts[this.acc].withdrawBalance(amt);
      if (success){
        this.flag = "";
        window.alert(amt + " withdraw successfully...!!!");
      }
      else {
        this.flag = "";
        window.alert("Account Balance is low. \n Minimum account balance should be 2000. \n Cannot withdraw "+ amt);
      }
      
    }
    if (this.flag === "d"){
      var amt = parseInt((<HTMLInputElement>document.getElementById("d_amount")).value);
      this.accounts[this.acc].depositBalance(amt);
      this.flag = "";
      window.alert(amt + " deposit successfully...!!!");
    }
  }


}

class Customers
{
    Name : string;
    Age : number;
    AadharID : number;
    Balance : number;
    Account_No : number;

    constructor(pr_name : string, pr_age : number, pr_Aadhar_ID: number,pr_balance : number, pr_acc_no: number)
    {
        this.Account_No = pr_acc_no;
        this.Name = pr_name;
        this.AadharID = pr_Aadhar_ID;
        this.Age = pr_age;
        this.Balance = pr_balance;
        
    }

    withdrawBalance(amount : number) : boolean 
    {
      if (this.Balance > amount + 2000){
        this.Balance = this.Balance - amount;
        return true;
      }    
      return false;
    }

    depositBalance(amount : number)
    {
      this.Balance = this.Balance + amount;
    }
}

