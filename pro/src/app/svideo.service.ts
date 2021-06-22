import { Injectable } from '@angular/core';

import { Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Video1cls } from './video1';

@Injectable({
  providedIn: 'root'
})
export class SvideoService {

  private _getUrl="/api/showvideos";//to get data frm db
  private _postUrl="/api/showvideo";//to add data to db


  constructor(private _http:Http) { }

  getvideos()
  {
    return this._http.get(this._getUrl)
      .map((response:Response) => response.json());
  }

  addvideo(video:Video1cls)
  {
    let headers=new Headers({'Content-Type':'application/json'});
    let options=new RequestOptions({headers:headers});
    return this._http.post(this._postUrl, JSON.stringify(video),options)
      .map((response:Response) => response.json());
  }

}
