import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {
  private url : string="https://emailverification.whoisxmlapi.com/api/v2?apiKey=at_OnLdmsLQpIEThyhttuOqkPSeQVaIW&emailAddress="
  constructor(private _http:HttpClient) { }

  validarCorreo(correo:string){
    var req=this.url+correo
    return this._http.get(req);
  }
}
