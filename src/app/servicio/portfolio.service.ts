import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  direccion:string = "http://localhost:8080/";

  constructor(private http:HttpClient) { }

  // metodo que me permite recibir los datos del servidor
  // metodos Persona
  verPersona():Observable<any>{
    return this.http.get(this.direccion + "persona/ver/1");
  }
  editarPersona(persona:any){
    this.http.put(this.direccion + "persona/editar",persona).subscribe();
  }

  // metodos Educacion
  verEducacion():Observable<any>{
    return this.http.get(this.direccion + "educacion/ver");
  }
  nuevaEducacion(educacion:any){
    this.http.post(this.direccion + "educacion/nuevo",educacion).subscribe();
  }
  editarEducacion(educacion:any){
    this.http.put(this.direccion + "educacion/editar",educacion).subscribe();
  }
  eliminarEducacion(id:number){
    this.http.delete(this.direccion + "educacion/borrar/"+id).subscribe();
  }

  // metodos Experiencia
  verExp():Observable<any>{
    return this.http.get(this.direccion + "experiencia/ver")
  }
  nuevaExp(exp:any){
    this.http.post(this.direccion + "experiencia/nuevo",exp).subscribe();
  }
  editarExp(exp:any){
    this.http.put(this.direccion + "experiencia/editar",exp).subscribe();
  }
  eliminarExp(id:number){
    this.http.delete(this.direccion + "experiencia/borrar/"+id).subscribe();
  }
  
  // metodos Habilidades
  verHab():Observable<any>{
    return this.http.get(this.direccion + "habilidad/ver")
  }
  nuevoHab(hab:any){
    this.http.post(this.direccion + "habilidad/nueva",hab).subscribe();
  }
  editarHab(hab:any){
    this.http.put(this.direccion + "habilidad/editar",hab).subscribe();
  }
  eliminarHab(id:number){
    this.http.delete(this.direccion + "habilidad/borrar/"+id).subscribe();
  }
  verSubHab():Observable<any>{
    return this.http.get(this.direccion + "subhabilidad/ver")
  }
  nuevoSubHab(subhab:any){
    this.http.post(this.direccion + "subhabilidad/nueva",subhab).subscribe();
  }
  editarSubHab(subhab:any){
    this.http.put(this.direccion + "subhabilidad/editar",subhab).subscribe();
  }
  eliminarSubHab(id:number){
    this.http.delete(this.direccion + "subhabilidad/borrar/"+id).subscribe();
  }

  // metodos Proyectos
  verProy():Observable<any>{
    return this.http.get(this.direccion + "proyecto/ver")
  }
  nuevoProy(proy:any){
    this.http.post(this.direccion + "proyecto/nuevo",proy).subscribe();
  }
  editarProy(proy:any){
    this.http.put(this.direccion + "proyecto/editar",proy).subscribe();
  }
  eliminarProy(id:number){
    this.http.delete(this.direccion + "proyecto/borrar/"+id).subscribe();
  }

  // metodos Contacto
  nuevoMensaje(mensaje:any){
    this.http.post(this.direccion + "contacto/nuevo",mensaje).subscribe();
  }
}
