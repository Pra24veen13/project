import { Component, OnInit } from '@angular/core';
import { NsService } from '../ns.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {


  constructor(private bbb : NsService) { }

  ngOnInit(): void {
  }
surname=""
xyz(){
  this.surname=this.bbb.name;
}
}