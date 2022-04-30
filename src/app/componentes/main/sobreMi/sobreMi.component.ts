import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {
  
  
  mensaje:string = "Nacido en La Rioja, actualmente viviendo en Córdoba Capital";
  modificable:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

  habilitarEdicion(){
    if(this.modificable){
      this.modificable = false;
    }else{
      this.modificable = true;
    }
  }
  modificar(){
  }

}
