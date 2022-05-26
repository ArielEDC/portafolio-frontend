import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobreMi.component.html',
  styleUrls: ['./sobreMi.component.css']
})
export class SobreMiComponent implements OnInit {
  
  miPortfolio:any;
  modificable:boolean =false;

  logeado: boolean = this.auth.logIn;

  constructor(private datos:PortfolioService, private auth:AuthService) { }
  
  ngOnInit(): void {
    this.datos.verPersona().subscribe(data=>{
      this.miPortfolio = data;
    })
  }

  habilitarEdicion(){
    if(this.modificable){
      this.modificable = false;
    }else{
      this.modificable = true;
    }
  }
  modificar(){
    let port = this.miPortfolio;
    this.datos.editarPersona(port);
    alert("dato modificado");
    this.modificable = false;
  }

}


