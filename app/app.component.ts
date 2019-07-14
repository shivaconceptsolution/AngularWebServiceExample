import { Component } from '@angular/core';
import { NoticeServiceService } from './notice-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  c
  flag=true
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  s='';          
  constructor() {
     
  
   }          
  fun(data)
  {
   this.c =parseInt(data.a) + parseInt(data.b);
  }
}
