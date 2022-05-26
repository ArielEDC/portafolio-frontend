import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  nombreUsuario='';
  password='';

  // inyectar en el constructor el formbuilder
  constructor(private formBuilder:FormBuilder, private authService:AuthService, private ruta:Router) { 

    //Creamos el grupo de controles para el formulario login
    this.form = this.formBuilder.group({
      password:["",[Validators.required, Validators.minLength(8)]],
      nombreUsuario:["",[Validators.required ,Validators.minLength(5),Validators.maxLength(12)]]
    })

  }

  ngOnInit(): void {
  }

  get Password(){
    return this.form.get("password");
  }
  get User(){
    return this.form.get("user");
  }
  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }
  get UserValid(){
    return false;
  }

  onEnviar(event: Event){
    event.preventDefault;

    if(this.form.valid){
      // llamamos al servicio para enviar datos al servidor (y alguna logica extra..)


      this.authService.login(this.form.value).subscribe(data=>{
        //console.log("DATA: "+ JSON.stringify(data));
        setTimeout(()=>{location.reload()},1000);      

      });
      
      this.ruta.navigate(['/']);

      
    }else{
      // corremos todas las validaciones para que se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }
    
  }

}
