import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;
  modificable:boolean =false;
  edu:any={"id": 0,
    "institucion": "institucion",
    "titulo": "titulo",
    "fechaInicio": "2021-04-24",
    "fechaFin": "2022-05-30",
    "personaid": 1};
  
  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.verEducacion().subscribe(data=>{
      this.educacionList = data;
    })
  }


  habilitarEdicion(id:number){

    if(this.modificable){
      this.modificable = false;
    }else{
      this.modificable = true;
    }
  }
  agregarElemento(){
    let edu=this.edu;
    this.educacionList.push(this.datos.nuevaEducacion(edu));
    alert("elemento agregardo");
  }

  eliminarElemento(id:number){
    this.datos.eliminarEducacion(id);
    alert("elemento eliminado");
  }

  modificarElemento(id:number){
    for(let educacion of this.educacionList){
      if(educacion.id === id){
        this.datos.editarEducacion(educacion);
      }
    }
    alert("elemento modificado");
    this.modificable = false;
  }

}
