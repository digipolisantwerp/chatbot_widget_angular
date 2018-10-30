import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'aui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  // start new random sessions every time
  public session1: string = Math.random().toString(36).substring(7);
  public session2: string = Math.random().toString(36).substring(7);

}
