import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/modelos/usuario.models';
import { Usuariosaux } from 'src/modelos/usuarioaux.model';

@Injectable({
  providedIn: 'root'
})
export class MetodosService {
  url:string = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  public addCliente(form:Usuario){
    let dir = this.url + "ingresarCliente"
    return this.http.post(dir,form) 
  }

  public getClientes():Observable<Usuariosaux[]>{
    let dir = this.url + "clientes";
    return this.http.get<Usuariosaux[]>(dir);
  }

  public getEmpleados():Observable<Usuariosaux[]>{
    let dir = this.url + "empleados";
    return this.http.get<Usuariosaux[]>(dir);
  }

  public getEmpresas():Observable<Usuariosaux[]>{
    let dir = this.url + "empresas";
    return this.http.get<Usuariosaux[]>(dir);
  }
}
