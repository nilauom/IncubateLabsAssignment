import { Component, OnInit,NgModule,ViewChild,Input,EventEmitter,Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { ModalComponent } from '../../modal/modal.component';
import {CookieService} from 'ng2-cookies';

class Signup {
  constructor(public id : number= 0,
              public name: string = '',
              public lastName: string = '',
              public email: string = '',
              public password: string = '',
              public password_confirmation: string= '') {
  }
}
@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent{

  constructor(private authService:AuthService) {
    this.x="hello";
   }
  user : Signup;
  model: Signup = new Signup();
  @ViewChild('signUpForm') form: any;
  @Input() modal :ModalComponent;
  @Output() signUpCloseEvent = new EventEmitter();
  x:String;

  onSubmit() {
    if (this.form.valid) {
      this.authService.postSignUp(this.model)
                           .subscribe(
                               user => {this.user = user;
                                 console.log(this.user);
                                }, //Bind to view
                                err => {
                                    // Log errors if any
                                    console.log(err);
                                });
      this.form.reset();
      this.signUpCloseEvent.emit(null);
    }
    
  }
  test(){
    this.model.name="sdada";
    this.x="bye";
    console.log(this.model);
  }

}
