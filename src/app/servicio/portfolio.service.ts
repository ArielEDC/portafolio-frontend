import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  // metodo que me permite recibir los datos del servidor
  // metodos Persona
  verPersona():Observable<any>{
    return this.http.get("http://localhost:8080/persona/ver/1");
  }
  editarPersona(persona:any){
    this.http.put("http://localhost:8080/persona/editar",persona).subscribe();
  }

  // metodos Educacion
  verEducacion():Observable<any>{
    return this.http.get("http://localhost:8080/educacion/ver");
  }
  nuevaEducacion(educacion:any){
    this.http.post("http://localhost:8080/educacion/nuevo",educacion).subscribe();
  }
  editarEducacion(educacion:any){
    this.http.put("http://localhost:8080/educacion/editar",educacion).subscribe();
  }
  eliminarEducacion(id:number){
    this.http.delete("http://localhost:8080/educacion/borrar/"+id).subscribe();
  }

  // metodos Experiencia
  verExp():Observable<any>{
    return this.http.get("http://localhost:8080/experiencia/ver")
  }
  nuevaExp(exp:any){
    this.http.post("http://localhost:8080/experiencia/nuevo",exp).subscribe();
  }
  editarExp(exp:any){
    this.http.put("http://localhost:8080/experiencia/editar",exp).subscribe();
  }
  eliminarExp(id:number){
    this.http.delete("http://localhost:8080/experiencia/borrar/"+id).subscribe();
  }
  
  // metodos Habilidades

  // metodos Proyectos
  verProy():Observable<any>{
    return this.http.get("http://localhost:8080/proyecto/ver")
  }
  nuevoProy(proy:any){
    this.http.post("http://localhost:8080/proyecto/nuevo",proy).subscribe();
  }
  editarProy(proy:any){
    this.http.put("http://localhost:8080/proyecto/editar",proy).subscribe();
  }
  eliminarProy(id:number){
    this.http.delete("http://localhost:8080/proyecto/borrar/"+id).subscribe();
  }

  // metodos Contacto
}
