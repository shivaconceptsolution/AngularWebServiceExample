import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.component.html',
  styleUrls: ['./ram.component.css']
})
export class RamComponent implements OnInit {
num=5
title="Welcome in uday app"
s=""
todaydate = new Date();
jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
 months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
  constructor() { }

  ngOnInit() {
  }
  fun()
  {
     alert("hello world")
  }
   fun1(event)
  {
    this.s+=event.target.value
  }
   fun2(event)
  {
     alert(event.target.value)
  }
}
