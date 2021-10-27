import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class New1Service {

  constructor() { }
name="";
  xyz(value1:any){
   console.log("my name is:" + value1)
   this.name=value1;
  }
 
}
