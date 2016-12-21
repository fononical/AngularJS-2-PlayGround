import { Component } from '@angular/core';

@Component({
    selector: 'rating',
    template: `
              <div>
                <i class="glyphicon" 
                   [class.glyphicon-star-empty]="!_isChecked"
                   [class.glyphicon-star]="_isChecked"
                   (click)="onClick($event)">{{_isChecked}}</i>
              </div>
              `         
})
export class RatingComponent {
    _isChecked: boolean = false;

    constructor() {
    };

    onClick($event) {
      //$event.stopPropagation(); class="glyphicon glyphicon-star-empty"
      this._isChecked = !this._isChecked;
      console.log("Clicked Rating Control:", $event);
    };

} 