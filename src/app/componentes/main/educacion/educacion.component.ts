import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionList:any;
  modificable:boolean[] = [];
  edu:any={
    "institucion": "institucion",
    "titulo": "titulo",
    "fechaInicio": "2020-01-31",
    "fechaFin": "2020-01-31",
    "personaid": 1};
  
    logeado:boolean = this.auth.logIn;
    loading:boolean = true;
  
  constructor(private datos:PortfolioService, private auth:AuthService) { }

  ngOnInit(): void {
    this.datos.verEducacion().subscribe(data=>{
      this.educacionList = data;
      this.loading = false;
    });
  }


  habilitarEdicion(id:number){

    if(this.modificable[id]===true){
      this.modificable[id] = false;
    }else{
      this.modificable[id] = true;
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
    this.modificable[id] = false;
  }


  img(id:number):any{
    for(let educacion of this.educacionList){
      if(educacion.id === id){
        if(educacion.imagen !== null && educacion.imagen !== ""){
          return educacion.imagen;
        }
        else{
          return "https://concepto.de/wp-content/uploads/2014/08/Institucion.jpg";
        }
      }
    }
  }
}
