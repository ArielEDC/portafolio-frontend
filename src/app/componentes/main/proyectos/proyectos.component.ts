import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyList:any;
  modificable:boolean[] = [];
  proy:any={
        "nombre": "nombre",
        "descripcion": "descripcion",
        "link": "link",
        "personaid": {
            "id": 1
        }
  }
  logeado:boolean = this.auth.logIn;
  loading:boolean = true;

  constructor(private datos:PortfolioService, private auth: AuthService) { }

  ngOnInit(): void {
    this.datos.verProy().subscribe(data=>{
      this.proyList = data;
      this.loading = false;
    });
  }
  
  habilitarEdicion(id:number){

    if(this.modificable[id]){
      this.modificable[id] = false;
    }else{
      this.modificable[id] = true;
    }
  }

  agregarElemento(){
    let proy=this.proy;
    this.proyList.push(this.datos.nuevoProy(proy));
    alert("elemento agregardo");
  }
  eliminarElemento(id:number){
    this.datos.eliminarProy(id);
    alert("elemento eliminado");
  }
  modificarElemento(id:number){
    for(let proy of this.proyList){
      if(proy.id === id){
        this.datos.editarProy(proy);
      }
    }
    alert("elemento modificado");
    this.modificable[id] = false;
  }

  onDropped(evento:CdkDragDrop<any>){
    console.log(evento);
    const anterior = evento.previousIndex;
    const actual = evento.currentIndex;
    moveItemInArray(this.proyList, anterior, actual);
    if(this.logeado){
      this.datos.editarListaProy(this.proyList);
      console.log("lista editada");
    }
  }
}
