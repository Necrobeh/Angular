import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular08';

  onomatopoeiaList : string[] = []

  onReceiveNewOnomatopia(event : string) : void {
    this.onomatopoeiaList.push(event);
    console.log(this.onomatopoeiaList)
  }
}
