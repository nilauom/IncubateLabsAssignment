import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

  constructor(private http:Http) { }
    private signUpUrl="http://localhost:8000/api/auth/signup"
    private loginUrl="http://localhost:8000/api/auth/login"
     postSignUp(param:any) : Observable<any> {
       var body=new URLSearchParams();
       //body.append('name','name');
       //body.append('email','m@m.com');
       //body.append('password','111111');
       //body.append('password_confirmation','111111');
        //body.append('phone_number','947123456789');
        var headers = new Headers();
           headers.append('withCredentials','true');
           headers.append('Content-Type','application/x-www-form-urlencoded');
           //headers.append('Authorization',"Basic " + auth);
           headers.append('Accept','application/json');
           headers.append('Access-Control-Allow-Origin','*');
         return this.http.post(this.signUpUrl,param,{})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     postLogin(param:any) : Observable<any>{
        var body= new URLSearchParams();
        body.append('password',param.password);
        body.append('email',param.email);
         var headers = new Headers();
           headers.append('withCredentials','true');
           headers.append('Content-Type','application/x-www-form-urlencoded');
           // headers.append('Authorization',"bea " + auth);
           headers.append('Accept','application/json');
           

     	return this.http.post(this.loginUrl,body,{headers:headers})
     					.map((res:Response) => {
                 console.log(res.json());
                 return res.json()
               })
    					.catch((error:any)=>Observable.throw(error.json().error_description || 'Server error'));
    }
}
