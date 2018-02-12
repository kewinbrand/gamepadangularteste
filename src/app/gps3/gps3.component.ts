import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-gps3',
  templateUrl: './gps3.component.html',
  styleUrls: ['./gps3.component.css']
})
export class Gps3Component implements OnInit, OnDestroy {

  private cancelationToken: number;
  private gamepads: Gamepad[];
  public keyPressed: String;
  public controllerName: String;

  private lastPressedButton: Number;

  constructor(private zone: NgZone) { 
    this.lastPressedButton = -1;
  }

  public detectControllers(){
    this.gamepads = window.navigator.getGamepads();
    if(this.gamepads){
      if(this.gamepads[2]){
        this.controllerName = this.gamepads[2].id;
      }
    }
    console.log(this.gamepads);
  }

  public stopListenningKeys(){
    window.cancelAnimationFrame(this.cancelationToken);
  }

  public doGamepadLoop(){
    let gamepad = this.gamepads[2];
    if(gamepad && gamepad.connected){
      
      for (let index = 0; index < gamepad.buttons.length; index++) {
        const button = gamepad.buttons[index];
        if(((button.value > 0) || (button.pressed)) && (this.lastPressedButton != index)) {
          this.keyPressed = button.pressed + " " + button.value;
        };
      }
    }

    this.cancelationToken = this.zone.runOutsideAngular(() => {
      return window.requestAnimationFrame(this.doGamepadLoop.bind(this))
    });

    
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    
    cancelAnimationFrame(this.cancelationToken);
  }

}
