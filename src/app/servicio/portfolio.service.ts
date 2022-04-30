import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

  // metodo que me permite recibir los datos del servidor
  obtenerDatos():Observable<any>{
    return this.http.get("./../assets/data/get.json");
  }
}
