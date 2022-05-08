import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidadList:any;
  subHabilidadList:any;
  nuevaLista:any;
  corresponde:boolean = false;
  modificable:boolean =false;
  hab:any={
    "id": 0,
    "habilidad": "Frontend",
    "personaid": {
        "id": 1}
    }
  subHab:any={
    "id": 0,
    "subHabilidad": "html",
    "habilidadId": {
        "id": 11}
    }

  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.verHab().subscribe(data=>{
      this.habilidadList = data;
    })
    this.datos.verSubHab().subscribe(data=>{
      this.subHabilidadList = data;
    })
  }
  habilitarEdicion(){

    if(this.modificable){
      this.modificable = false;
    }else{
      this.modificable = true;
    }
  }
  agregarElemento(){
    let hab=this.hab;
    this.habilidadList.push(this.datos.nuevoHab(hab));
    alert("elemento agregardo");
  }
  agregarSubHabilidad(id:number){
    this.subHabilidadList.push(
      {
        "id": 0,
        "subHabilidad": "html",
        "habilidadId": {
            "id": id}
        }
    )
  }

  eliminarElemento(id:number){
    this.datos.eliminarHab(id);
    alert("elemento eliminado");
    this.modificable = false;
  }
  eliminarSubHabilidad(id:number){
    this.datos.eliminarSubHab(id);
    alert("elemento eliminado");
    this.modificable = false;
  }
  modificarElemento(id:number){
    for(let hab of this.habilidadList){
      if(hab.id === id){
        this.datos.editarHab(hab);
      }
    }
    alert("elemento modificado");
    this.modificable = false;
  }
  modificarSubHabilidad(id:number){
    for(let hab of this.subHabilidadList){
      if(hab.id === id){
        this.datos.editarSubHab(hab);
        console.log(hab);
      }
    }
    alert("elemento modificado");
    this.modificable = false;
  }


}
