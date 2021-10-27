import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  rate=10.5;
  value1:any="";
  bg_img="url('../../assets/images/12345.jpg')";

  press(event:any): void{
    this.rate=event.target.value;

    if(this.rate == 10.5)
  {
   this.bg_img = "url('../../assets/images/personal-loan_1627244736887.webp')";
   
  }
  if (this.rate == 8)
  {
    this.bg_img = "url('../../assets/images/123.jpg')";
  }

  if (this.rate == 8.5)
  {
    this.bg_img = "url('../../assets/images/1234.webp')";
  }

  if (this.rate == 9)
  {
    this.bg_img = "url('../../assets/images/10.jpg')";
  }
  }



  calc(principle:any,time:any){
    var simpleinterest=principle*time*this.rate;
    this.value1=simpleinterest/100;
  
  }

  mydata="";
  ngOnInit(): void {
  }

}
