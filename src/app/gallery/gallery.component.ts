import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  rate=14;
  value1:any="";
  

  press(event:any){
    this.rate=event.target.value;
  }



  calc(principle:any,time:any){
    var simpleinterest=principle*time*this.rate;
    this.value1=simpleinterest/100;
  
  }

  mydata="";
  ngOnInit(): void {
  }

}
