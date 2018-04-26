import { Component,NgModule,Input,ViewChild,Output,EventEmitter,OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { FavImageComponent } from '../fav-image/fav-image.component';

import {CookieService} from 'ng2-cookies';
import { ImageServiceService } from '../image-view/image-service.service';

class Description {
  constructor(public description: string = '') {
  }
}

class Photo {
  constructor(public id: number ,
              public url: string = '',
              public description: string ='') {
  }
}
@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private imageService:ImageServiceService) { }
  model: Description = new Description();
  @ViewChild('descriptionForm') form: any;
  @Input() modal :ModalComponent;
  @Input() photoData: Photo;

  @Output() descriptionCloseEvent = new EventEmitter();
  
  

  ngOnInit() {
  	this.descriptionCloseEvent.emit(null);
  }

  descriptionSubmit(){
  	this.imageService.addComment(this.photoData.description,this.photoData.id)
  	.subscribe(
                         res=>{
                          
                         },
                         err=> {console.log(err);}
                         );
 	this.descriptionCloseEvent.emit(null);
  }



}
