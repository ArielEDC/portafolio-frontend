
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  expList:any;
  modificable:boolean[] = [];
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

    logeado: boolean = this.auth.logIn;


  constructor(private datos:PortfolioService, private auth: AuthService) { }

  ngOnInit(): void {
    this.datos.verExp().subscribe(data=>{
      this.expList = data;
    })
    for(let exp of this.expList){
      this.modificable.push(false);
    }
  }

  habilitarEdicion(id:number){

    if(this.modificable[id]===true){
      this.modificable[id] = false;
    }else{
      this.modificable[id] = true;
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
    this.modificable[id] = false;
  }

  img(id:number):any{
    for(let exp of this.expList){
      if(exp.id === id){
        if(exp.imagen !== null && exp.imagen !== ""){
          return exp.imagen;
        }
        else{
          return "https://enlinea.santotomas.cl/wp-content/uploads/sites/2/2016/08/trabajo-social-739x465.jpg";
        }
      }
    }
  }


}
