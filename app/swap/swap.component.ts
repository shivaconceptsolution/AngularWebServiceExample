import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { HttpClient,HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.css']
})
export class SwapComponent implements OnInit {
  data:string='';
  tid:string='';
  tdesc:string='';
  //httpdata;
 // searchparam = 2;
    constructor(private http: HttpClient) { }

  ngOnInit() {
  
   
  }
  addTruck () {

   let t = {'tno':this.tid,'tdet':this.tdesc};
  this.http.post("https://shivaconceptsolution.com/webservices/truck.php",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data inserted');
}
updatetruck () {

   let t = {'tid':4,'tno':this.tid,'tdet':this.tdesc};
  this.http.post("https://shivaconceptsolution.com/webservices/uptruck.php",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
        alert('data updated');
}
deletetruck() {

   let t = {'tid':this.tid};
  this.http.post("https://shivaconceptsolution.com/webservices/deltruck.php",t,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });
   /*this.http.delete("https://shivaconceptsolution.com/webservices/deltruck.php?tid"+this.tid,httpOptions).subscribe((res)=>{
            console.log(res);
           
        });*/     
        alert('data deleted');
}
login()
{
    let t = {'emailid':this.tid,'pwd':this.tdesc};
	this.http.put("https://shivaconceptsolution.com/webservices/userlogin.php",t,httpOptions).subscribe((res)=>{

            console.log(res);
           //this.data=res.status;
            if(this.data=="1")
        {
       alert('login successfully');
       }
       else
       {
       alert('invalid user id and password');
       }
           
        });
       
       
}

}
