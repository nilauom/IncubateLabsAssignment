import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from './image-service.service';
import {CookieService} from 'ng2-cookies';
import { Router} from '@angular/router';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.css']
})
export class ImageViewComponent implements OnInit {

  photos: Object;
  word : string;
  constructor(private imageService:ImageServiceService, private cookieService:CookieService,private router:Router) { }

  ngOnInit() {
          this.imageService.getWord()
                        .subscribe(
                         res=>{
                          this.word=res[0].word;
                                    this.imageService.getResult(this.word)
                       .subscribe(
                         res=>{
                           if(res.length<10){
                             location.reload();
                           }
                          this.photos=res;
                         },
                         err=> {console.log(err);}
                         );
                         },
                         err=> {console.log(err);}
                         );

  }
    addFavorite(link) { 
          this.imageService.addFav(link,this.cookieService.get('token'))
                       .subscribe(
                         res=>{
                          
                         },
                         err=> {console.log(err);}
                         );
   }



}
