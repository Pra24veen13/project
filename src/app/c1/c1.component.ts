import { Component, OnInit } from '@angular/core';
import { NsService } from '../ns.service';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  constructor(private aaa : NsService) { }

  ngOnInit(): void {
  }
xyz(myname:any){
  this.aaa.dblogic(myname);
}
}
