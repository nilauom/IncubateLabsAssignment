import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {CookieService} from 'ng2-cookies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	  constructor(private cookieService:CookieService,private router:Router) {
this.cookie=cookieService.get('token');
   }
   getUrl()
{
  return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
}
   cookie:String;
  public model = 1;
}
