import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logeado: boolean = this.auth.logIn;

  constructor(private auth:AuthService) { }

  ngOnInit(): void {

  }

  
  logout():void{
    this.auth.logout();
    location.reload();
  }

}
