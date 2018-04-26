import { Component,NgModule,Input,ViewChild,Output,EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ModalComponent } from '../../modal/modal.component';
import {CookieService} from 'ng2-cookies';
import { Router} from '@angular/router';

class Login {
  constructor(public email: string = '',
              public password: string = '') {
  }
}
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  constructor(private authService:AuthService,private cookieService:CookieService,private router: Router) { }
  model: Login = new Login();
  @ViewChild('loginForm') form: any;
  @Input() modal :ModalComponent;
  @Output() loginCloseEvent = new EventEmitter();
  @Output() loginSuccessEvent= new EventEmitter();
  
  loginSubmit() {
    if (this.form.valid) {
      this.authService.postLogin(this.model)
                       .subscribe(
                         res=>{
                           Object.keys(this.cookieService.getAll());
                           this.cookieService.set('token',res.token);
                           this.loginSuccessEvent.emit(null);
                           this.router.navigate(['/home']);
                         },
                         err=> {console.log(err);}
                         );
      this.form.reset();
      this.loginCloseEvent.emit(null);
    }
    
  }

}
