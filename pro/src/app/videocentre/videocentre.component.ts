import { Component, OnInit } from '@angular/core';
import { Video1cls } from '../video1';

import { SvideoService } from '../svideo.service';

@Component({
  selector: 'app-videocentre',
  templateUrl: './videocentre.component.html',
  styleUrls: ['./videocentre.component.css'],
  providers:[SvideoService]
})

export class VideocentreComponent implements OnInit {

  videos:Array<Video1cls>;
  //we subscribed to video service which gives the videos
  // []=[
  //   {"_id":"ved1","title":"title1","url":"url1","description":"des1"},
  //   {"_id":"ved2","title":"title2","url":"url2","description":"des2"},
  //   {"_id":"ved3","title":"title3","url":"url3","description":"des3"},
  //   {"_id":"ved4","title":"title4","url":"url4","description":"des4"}
  // ];

  selectedvideo:Video1cls;
  private hidenewvideo:boolean=true;

  constructor(private _SvideoService:SvideoService) { }

  ngOnInit() {
    this._SvideoService.getvideos()
    .subscribe(resvideodata => this.videos=resvideodata);
  }
  onselectvideo(video:any){
  this.selectedvideo=video;
  this.hidenewvideo=true;
  console.log(this.selectedvideo);  
  }

  onsubmitaddvideo(video:any)
  {
    this._SvideoService.addvideo(video)
    .subscribe(resnewvideo => {
      this.videos.push(resnewvideo);
      this.hidenewvideo=true;
      this.selectedvideo=resnewvideo;
    });
  }

  newvideo(){
    this.hidenewvideo=false;
  }

}
