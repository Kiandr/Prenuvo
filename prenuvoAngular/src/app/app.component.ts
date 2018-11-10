import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Prenuvo Interview';
  public TodayTime;

  public constructor() {
    this.TodayTime  = Date.now();
  }

  public getTodayTime () {
    return this.TodayTime;
  }
}
