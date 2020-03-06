import { Component, OnInit } from '@angular/core';
import { User } from './components/login/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'AngularMcqTestSystem';
  user:User = null;
  
  ngOnInit(){
    this.user = JSON.parse(sessionStorage.getItem("user"));

    console.log('user from app component'+this.user);
     
  }
   

}
