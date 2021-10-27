import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NsService {

  constructor() { }
name=""
  dblogic(myname:any){
console.log("hi :" +myname)
this.name=myname;
  }
}
