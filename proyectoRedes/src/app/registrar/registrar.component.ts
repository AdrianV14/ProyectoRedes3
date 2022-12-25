import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/modelos/usuario.models';
import { CorreoService } from '../correo.service';
import { MetodosService } from '../metodos.service';
import { ValidarService } from '../validar.service';

declare var $:any;

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
    ban:boolean=false;
    
    

    usu=new FormGroup({
    id_video: new FormControl(""),
    nombre: new FormControl(""),
    prim_ape: new FormControl(""),
    seg_ape: new FormControl(""),
    usuario:new FormControl(""),
    pass: new FormControl(""),
    ciudad: new FormControl(""),
    pais: new FormControl(""),
    correo: new FormControl(""),
    telefono: new FormControl(""),
    edad: new FormControl(""),
    grado: new FormControl(""),
    sexo: new FormControl(""),
    tipo: new FormControl(""),
  });

  constructor(private router:Router, private _validatorService:ValidarService, private _correo:CorreoService, private _metodos:MetodosService) { }

  

  ngOnInit(): void {
  }

  entrar(usuario:Usuario){
    this._metodos.addCliente(usuario).subscribe()
    this.router.navigate(['home']);
  }
  
  verificar(usuario:Usuario){
    
    let aux:any
    if(usuario.correo == null || usuario.correo == undefined || usuario.correo.trim() == ""){
      console.log(usuario.correo + "Invalido")
    }else if(!this._validatorService.esEmailValido(usuario.correo)){
      console.log(usuario.correo + " Invalido")
    }else {
      this._correo.validarCorreo(usuario.correo).subscribe(data=>{
        aux=data
        console.log(aux)
        if(aux.formatCheck && aux.dnsCheck){
          this.entrar(usuario)
        }

      });
      
    }

    
  }

  
  registrar(usuario:Usuario){
    
  }


}
