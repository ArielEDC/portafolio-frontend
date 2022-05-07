import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expList:any;
  modificable:boolean = false;
  exp:any={
        "id": 0,
        "trabajo": "Robotica Industrial",
        "empresa": "Proto Automatismos Industriales",
        "descripcion": "Robotica Fanuc, Kuka, Kawasaki",
        "fechaInicio": "2017-06-05",
        "fechaFin": "2021-06-05",
        "personaid": {
            "id": 1
        }
      }


  constructor(private datos:PortfolioService) { }

  ngOnInit(): void {
    this.datos.verExp().subscribe(data=>{
      this.expList = data;
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
    let exp=this.exp;
    this.expList.push(this.datos.nuevaExp(exp));
    alert("elemento agregardo");
  }
  eliminarElemento(id:number){
    this.datos.eliminarExp(id);
    alert("elemento eliminado");
  }
  modificarElemento(id:number){
    for(let exp of this.expList){
      if(exp.id === id){
        this.datos.editarExp(exp);
      }
    }
    alert("elemento modificado");
    this.modificable = false;
  }


}
