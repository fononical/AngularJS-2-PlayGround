import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Angular App";
  isActive = true;

    onDivClick() {
      console.log("Handled by Div");
    };

    onClick($event) {
      $event.stopPropagation();
      console.log("Clicked", $event);
    }
}
