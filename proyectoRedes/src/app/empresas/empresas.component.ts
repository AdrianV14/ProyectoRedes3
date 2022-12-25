import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetodosService } from '../metodos.service';
import { YoutubeService } from '../youtube.service';
declare var $:any;
@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  video:any

  usuarios:any[]=[]
  constructor(private metodos:MetodosService, private router:Router, private _youtube:YoutubeService) {
   }

  ngOnInit(): void {
    var j:number=0
    window.location.reload
    this.metodos.getEmpresas().subscribe((data:any) => {
      console.log(data)
      this.usuarios = data.array;
      console.log(this.usuarios)
    })
    
  }

  verVideo(id_video:any){
    this.video=id_video
    
  }

  cerrar(){
    this.video=null
    $('#exampleModal').modal("hide");
  }

}
