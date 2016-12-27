import { Component, Input } from '@angular/core';

@Component({
    selector: 'rating',
    template: `
              <div>
                <i class="glyphicon" 
                   [class.glyphicon-star-empty]="!isChecked"
                   [class.glyphicon-star]="isChecked"
                   (click)="onClick($event)"></i>
              </div>
              `         
})
export class RatingComponent {
    @Input('is-favorite') isChecked: boolean = false;

    constructor() {
    };

    onClick($event) {
      //$event.stopPropagation(); class="glyphicon glyphicon-star-empty"
      this.isChecked = !this.isChecked;
      console.log("Clicked Rating Control:", $event);
    };

} 