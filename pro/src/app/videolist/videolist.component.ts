import { Component, OnInit,EventEmitter } from '@angular/core';
import { Video1cls } from '../video1';

@Component({
  selector: 'app-videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  inputs:['videos'],
  outputs:['selectvideo']
})
export class VideolistComponent implements OnInit {

  public selectvideo=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onselect(vid:Video1cls){
    this.selectvideo.emit(vid);
  }
}
