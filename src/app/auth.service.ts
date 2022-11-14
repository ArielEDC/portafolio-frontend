import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://web-production-173b.up.railway.app/auth/';
  userCurrentSubject: BehaviorSubject<any>;
  token:any;

  constructor(private http:HttpClient, private router:Router) {
    this.userCurrentSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser")||"{}"));
   }

  login(credenciales: any):Observable<any>{

    return this.http.post(this.url + "login", credenciales).pipe(map(data=>{
      sessionStorage.setItem("currentUser", JSON.stringify(data));
      this.userCurrentSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado(){
    //console.log(this.userCurrentSubject.value);
    return this.userCurrentSubject.value;
  }
  /*login(user: string, password: string){
    this.http.post(this.url + "/auth/login", {nombreUsuario: user, password: password})
              .subscribe((resp:any)=>{
                //redireccion
                this.router.navigate(["/"]);
                //guardamos el token en localStorage
                localStorage.setItem("auth_token",resp.token);
              })
  }*/
  //para cerrar sesion eliminamos el token del localStorage
  logout():void{
    sessionStorage.removeItem("currentUser");
    this.router.navigate(["/"]);
  }

  //servicio para verificar si existe sesion
  public get logIn():boolean{
    return (sessionStorage.getItem("currentUser") !== null);
  }
}
