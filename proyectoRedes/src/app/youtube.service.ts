import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url : string = "https://www.googleapis.com/youtube/v3/videos"
  private api_key: string = "AIzaSyCB2bLZMC5ivwFcJJJQa7PjMcpoJkusg0g"
 
  
  constructor(private _http:HttpClient) { }

  obtenerVideo(id:string){
    let parametros=new HttpParams().set('part','snippet').set('key',this.api_key).set('id',id).set('maxResult','1')
    return this._http.get(this.url,{params:parametros}).pipe(map(resp=>resp));
  }
}
