import { Component, ViewChild} from '@angular/core';
import { Gps3Component } from './gps3/gps3.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild('gps3') gps3: Gps3Component;

  constructor(){

  }

  public stopListenningKeys(){
    this.gps3.stopListenningKeys();
  }

  public onClickGetGamepads(){
    this.gps3.detectControllers();
  }

  public onClickMostrarControles(){
    this.gps3.doGamepadLoop();
  }
}
