import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {
  
  miPortfolio:any;
  modificable:boolean =false;

  constructor(private datos:PortfolioService) { }
  
  ngOnInit(): void {
    this.datos.verPersona().subscribe(data=>{
      this.miPortfolio = data;
    });
  }

  habilitarEdicion(){
    if(this.modificable){
      this.modificable = false;
    }else{
      this.modificable = true;
    }
  }
  modificar(){

    this.datos.editarPersona(this.miPortfolio);
    this.modificable = false;
  }

}


