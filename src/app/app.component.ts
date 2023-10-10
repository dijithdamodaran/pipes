import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes-demo';
  

  userInfo: string = "";
  userName : string = "dijith"; //using type annotation
  userId = "dij@dj"; //type inference
  userEmail :any ="dij@itvedant.com" //type assertion

  display():void{
    this.userInfo=this.userName + ":" + this.userId + ":" + this.userEmail + ":";
    //document.write(); //help to display the content over a web page
    console.log(); //help to display  function data over browser console
  }

  show() : string{
    this.userInfo=this.userName + ":" + this.userId + ":" + this.userEmail + ":";
    return this.userInfo;
  }
  //create an object for the employee class
  emp1= new Employee(101,"dijith",34444)
  emp2= new Employee(102,"ajith",34442)

  // get method for filtration 

  products: Product[]=[
    {pName:"keyboard",pCost:1000},
    {pName:"mouse",pCost:700},
    {pName:"keyboard",pCost:65000},
    {pName: "Speaker",pCost:20000}
  ]

  get filteredProducts(): Product[]{
    return this.products.filter((Product)=>Product.pCost > 15000); 
  }

  //exaple data for understanding pipes

   today = new Date("september,23,2023")
   salary = 300000
   message="hello and welcome all ...!"
   pi=3.14
   jsondata={
    name:"dijith",
    email:"dijith@gmail.com"
   }

   greeting = "welcome all , good afternoon.let's begin with angular pips";

   //understanding custom pipe - capitalize
   message2="hello";
   
}

interface Product{
 pName : string;
 pCost:number;

}
 
class Employee{
  empno:number;
  ename:string;
  salary:number;

  constructor(public eno:number,public name: string,public sal : number)
  {
    this.empno=eno;
    this.ename=name;
    this.salary=sal;
  }
}
