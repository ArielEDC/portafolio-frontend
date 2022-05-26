import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// componentes importados
import { LoginComponent } from '../componentes/login/login.component';
import { MainComponent } from '../componentes/main/main.component';


const routes:Routes = [
{path: '', component: MainComponent},
{path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
