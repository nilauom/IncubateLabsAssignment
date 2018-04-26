import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ImageServiceService } from '../image-view/image-service.service';

class Photo {
  constructor(public id: number ,
              public url: string = '',
              public description: string ='') {
  }
}
@Component({
  selector: 'app-fav-image',
  templateUrl: './fav-image.component.html',
  styleUrls: ['./fav-image.component.css']
})
export class FavImageComponent implements OnInit {
	photos : Object;
	img : Photo; 
  constructor(private imageService:ImageServiceService) { }

  @Output() 
  parse: EventEmitter<Object> = new EventEmitter<Object>();

  ngOnInit() {
  				
  	  	      this.imageService.getFavImages()
                       .subscribe(
                         res=>{
                          this.photos=res.images;
                          console.log(this.photos)
                         },
                         err=> {console.log(err);}
                         );
  }

	dataBind(img){
  		this.img=img;
  }  
      deleteFavorite(id) { 

          this.imageService.deleteFavorite(id)
                       .subscribe(
                         res=>{
                          this.photos=res.images;
                         },
                         err=> {console.log(err);}
                         );
   }


}
