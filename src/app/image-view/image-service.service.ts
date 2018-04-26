import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams,Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {CookieService} from 'ng2-cookies';

@Injectable()
export class ImageServiceService {
  key = 'cd57d378c7d4cabfc2de5ef854d54b72';
  private favUrl="http://localhost:8000/api/me/addFav";
  private myFavUrl="http://localhost:8000/api/me/getFav";
  private delFav="http://localhost:8000/api/me/deleteImage/";
  private commentAddUrl="http://localhost:8000/api/me/addComment/";
  private result;
  constructor(private http:Http,private _jsonp: Jsonp,private cookieService:CookieService) { }



  getImages(): Observable <any>{
  	var body=new URLSearchParams();
       body.append('tags','mountains');
       body.append('tagmode','any');
       body.append('format','json');
  	return this.http.get("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK?",{search:body})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json()).map((val) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map((photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
                            title: photo.title
                        }
                    })
                    }})
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
      getWord(){
        return this.http
            .get('http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
            .map(res =>res.json())
      }
      getResult(word:string) {
        let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.key}&tags=${word}&per_page=20&format=json&nojsoncallback=1`;
        return this.http
            .get(url)
            .map(res => res.json())
            .map((val) => {
                if (val.stat === 'ok') {
                    return val.photos.photo.map((photo: any) => {
                        return {
                            url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_q.jpg`,
                            title: photo.title
                        }
                    })
                }
                else {
                    return [];
                }
            });
    }

     addFav(param:any,token:string) : Observable<any>{
       console.log(token)
       console.log(param.url)
        var body= new URLSearchParams();
        body.append('url',param.url);
        body.append('title',param.title);       
         var headers = new Headers();
           headers.append('Content-Type','application/x-www-form-urlencoded');
           headers.append('Authorization',"Bearer " + token);
           headers.append('Accept','application/json');
           

       return this.http.post(this.favUrl,body,{headers:headers})
               .map((res:Response) => {
                 console.log(res.json());
                 return res.json()
               })
              .catch((error:any)=>Observable.throw(error.json().error_description || 'Server error'));
    }
    getFavImages(): Observable<any>{
        console.log(this.cookieService.get('token'))
         var headers = new Headers();
           headers.append('Content-Type','application/x-www-form-urlencoded');
           headers.append('Authorization',"Bearer " + this.cookieService.get('token'));
           headers.append('Accept','application/json');

           return this.http
            .get(this.myFavUrl,{headers:headers}) 
            .map((res:Response) => {
                 console.log(res.json());
                 return res.json()
               })
              .catch((error:any)=>Observable.throw(error.json().error_description || 'Server error'));     

    }
     deleteFavorite(id:any) : Observable<any>{
        var body= new URLSearchParams();
        body.append('id',id);       
         var headers = new Headers();
           headers.append('Content-Type','application/x-www-form-urlencoded');
           headers.append('Authorization',"Bearer " + this.cookieService.get('token'));
           headers.append('Accept','application/json');
           

       return this.http.post(this.delFav+id,body,{headers:headers})
               .map((res:Response) => {
                 console.log(res.json());
                 return res.json()
               })
              .catch((error:any)=>Observable.throw(error.json().error_description || 'Server error'));
    }  
    addComment(description:string,id) : Observable <any>{
      var body= new URLSearchParams();
        body.append('description',description); 
      var headers = new Headers();
           headers.append('Content-Type','application/x-www-form-urlencoded');
           headers.append('Authorization',"Bearer " + this.cookieService.get('token'));
           headers.append('Accept','application/json');
      return this.http.post(this.commentAddUrl+id,body,{headers:headers})
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }  
}
