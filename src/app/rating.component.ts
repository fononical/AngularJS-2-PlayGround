import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: 'app/favorite.template.html'        
})
export class RatingComponent {
    @Input('is-favorite') isFavorite: boolean = false;

    @Output() change = new EventEmitter();

    constructor() {
    };

    onClick($event) {
      //$event.stopPropagation(); class="glyphicon glyphicon-star-empty"
      this.isFavorite = !this.isFavorite;
      console.log("Clicked Rating Control:", $event);
      this.change.emit({ newValue: this.isFavorite });
    };

} 