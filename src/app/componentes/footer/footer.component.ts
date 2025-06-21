import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public apiUrl = environment.url +"swagger-ui.html";
  public anio = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
