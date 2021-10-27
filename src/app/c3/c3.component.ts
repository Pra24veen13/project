import { Component, OnInit } from '@angular/core';
import { NsService } from '../ns.service';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  
  constructor(private ccc : NsService) { }

  ngOnInit(): void {
  }
  thirdname=""
xyz(){
  this.thirdname=this.ccc.name;
}
}