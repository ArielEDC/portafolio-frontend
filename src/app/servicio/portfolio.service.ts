import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.prod'; // Importa el entorno de producción

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  direccion:string = environment.url;
  
  constructor(private http:HttpClient) { }


  // metodo que me permite recibir los datos del servidor
  // metodos Persona
  verPersona():Observable<any>{
    return this.http.get(this.direccion + "persona/ver/1");
  }
  editarPersona(persona:any){
    this.http.put(this.direccion + "persona/editar",persona).subscribe()
    
    ;
  }

  // metodos Educacion
  verEducacion():Observable<any>{
    return this.http.get(this.direccion + "educacion/ver");
  }
  nuevaEducacion(educacion:any){
    this.http.post(this.direccion + "educacion/nuevo",educacion)
    .subscribe();
    location.reload();
  }
  editarEducacion(educacion:any){
    this.http.put(this.direccion + "educacion/editar",educacion)
    .subscribe();
    location.reload();
  }
  eliminarEducacion(id:number){
    this.http.delete(this.direccion + "educacion/borrar/"+id).subscribe();
    location.reload();
    ;
  }

  // metodos Experiencia
  verExp():Observable<any>{
    return this.http.get(this.direccion + "experiencia/ver")
  }
  nuevaExp(exp:any){
    this.http.post(this.direccion + "experiencia/nuevo",exp).subscribe();
    location.reload();
  }
  editarExp(exp:any){
    this.http.put(this.direccion + "experiencia/editar",exp).subscribe();
    location.reload();
  }
  eliminarExp(id:number){
    this.http.delete(this.direccion + "experiencia/borrar/"+id).subscribe();
    location.reload();
  }
  
  // metodos Habilidades
  verHab():Observable<any>{
    return this.http.get(this.direccion + "habilidad/ver")
  }
  nuevoHab(hab:any){
    this.http.post(this.direccion + "habilidad/nueva",hab).subscribe();
    location.reload();
  }
  editarHab(hab:any){
    this.http.put(this.direccion + "habilidad/editar",hab).subscribe();
    location.reload();
  }
  eliminarHab(id:number){
    this.http.delete(this.direccion + "habilidad/borrar/"+id).subscribe();
    location.reload();
  }
  verSubHab():Observable<any>{
    return this.http.get(this.direccion + "subhabilidad/ver")
  }
  nuevoSubHab(subhab:any){
    this.http.post(this.direccion + "subhabilidad/nueva",subhab).subscribe();
    location.reload();
  }
  editarSubHab(subhab:any){
    this.http.put(this.direccion + "subhabilidad/editar",subhab).subscribe();
    location.reload();
  }
  eliminarSubHab(id:number){
    this.http.delete(this.direccion + "subhabilidad/borrar/"+id).subscribe();
    location.reload();
  }

  // metodos Proyectos
  verProy():Observable<any>{
    return this.http.get(this.direccion + "proyecto/ver")
  }
  nuevoProy(proy:any){
    this.http.post(this.direccion + "proyecto/nuevo",proy).subscribe();
    location.reload();
  }
  editarProy(proy:any){
    this.http.put(this.direccion + "proyecto/editar",proy).subscribe();
    location.reload();
  }
  eliminarProy(id:number){
    this.http.delete(this.direccion + "proyecto/borrar/"+id).subscribe();
    location.reload();
  }
  editarListaProy(lista:any){
    this.http.put(this.direccion + "proyecto/editarLista",lista).subscribe();
  }

  // metodos Contacto
  nuevoMensaje(mensaje:any){
    this.http.post(this.direccion + "contacto/nuevo",mensaje).subscribe();
    location.reload();
  }
}
