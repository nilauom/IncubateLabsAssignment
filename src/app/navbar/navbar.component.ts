import { NgModule, Component, Pipe, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {CookieService} from 'ng2-cookies';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	cookieObj:Object;
  constructor(private cookieService:CookieService) {
  	this.cookieObj=cookieService.getAll();
}

  ngOnInit() {
     	
  }

  logSuccess(){
  	this.cookieObj=this.cookieService.getAll();
  }
  logout(){
  	this.cookieService.deleteAll();
  	this.cookieObj=this.cookieService.getAll();
  }
}
