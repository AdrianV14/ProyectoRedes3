import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cuenta } from 'src/modelos/cuenta.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MetodosService } from '../metodos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  cuenta=new FormGroup({
    nombre: new FormControl(""),
    contra: new FormControl(""),
    
  });

  usuarios:any[]=[]

  constructor(private metodos:MetodosService, private router:Router) { }

  ngOnInit(): void {
    
  }

  entrar(cuenta:Cuenta){
    this.metodos.getClientes().subscribe((data:any) => {
      console.log(data)
      this.usuarios = data.array;
      console.log(this.usuarios)
      this.usuarios.forEach(element => {
        console.log(element)
        if(element.usuario == cuenta.nombre && element.pass == cuenta.contra)
          this.router.navigate(['home']); 

      });
      console.log("Usuario o contraseña incorrectas")
    })
    
  }

  registrar(){
    this.router.navigate(['registrar']); 
  }

}
