import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicio/portfolio.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  form:FormGroup;
  loading:boolean = true;

  constructor(private formBuilder:FormBuilder, private datos:PortfolioService, private ruta:Router) { 

    this.form = this.formBuilder.group({
      nombre:["",[Validators.required]],
      email:["",[Validators.required, Validators.email]],
      mensaje:["",[Validators.required]]
    })

  }

  ngOnInit(): void {
    this.datos.verPersona().subscribe(data=>{
      this.loading = false;
    })
  }

  get Nombre(){
    return this.form.get("nombre");
  }
  get Email(){
    return this.form.get("email");
  }
  get Mensaje(){
    return this.form.get("mensaje");
  }

  onEnviar(event: Event){
    event.preventDefault;

    if(this.form.valid){

      this.datos.nuevoMensaje(this.form.value);

      alert("gracias por escribir, me contactaré contigo proximamente!");
      this.ruta.navigate(['']);
    }else{
      this.form.markAllAsTouched();
    }
  }
}
