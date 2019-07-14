import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-si',
  templateUrl: './si.component.html',
  styleUrls: ['./si.component.css']
})
export class SiComponent implements OnInit {
   httpdata;
   constructor(private http: Http) { }

  ngOnInit() {
  this.http.get("http://jsonplaceholder.typicode.com/users").
      map((response) => response.json()).
      subscribe((data)=> this.httpdata = data)
  }


}
