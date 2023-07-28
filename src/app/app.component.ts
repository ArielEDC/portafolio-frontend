import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  firebaseConfig = {
    apiKey: "AIzaSyDyISVAjeBKx2P2ExBtgQxs5-KRWXQD_nQ",
    authDomain: "portafolio-adc.firebaseapp.com",
    projectId: "portafolio-adc",
    storageBucket: "portafolio-adc.appspot.com",
    messagingSenderId: "36846588583",
    appId: "1:36846588583:web:0081e214b78e8521b90182",
    measurementId: "G-S3X2RZNCM2"
  };

  // Initialize Firebase
  //app = initializeApp(this.firebaseConfig);
  //analitica = getAnalytics(this.app);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //initializeApp(this.firebaseConfig);
    getAnalytics(initializeApp(this.firebaseConfig));
  }
}
