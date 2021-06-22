import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vediodetail',
  templateUrl: './vediodetail.component.html',
  styleUrls: ['./vediodetail.component.css'],
  inputs:['video']
})
export class VediodetailComponent implements OnInit {


  private edittitle:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.edittitle=false;
  }

  ontitleclick(){
    this.edittitle=true;
  }

}
