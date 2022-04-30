import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SobreMiComponent } from './componentes/main/sobreMi/sobreMi.component';
import { ExperienciaComponent } from './componentes/main/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/main/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/main/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/main/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './componentes/contacto/contacto.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MainComponent,
    FooterComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
