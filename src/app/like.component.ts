import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LikeService } from './like.service';

@Component({
    selector: 'like',
    templateUrl: 'app/like.component.html'        
})
export class LikeComponent {
    @Input('is-liked') isLiked: boolean = false;

    @Output() change = new EventEmitter();
    @Output() likes;

    constructor(likeService: LikeService) {
        this.likes = likeService.getLikes();
    };

    onClick($event) {
      this.isLiked = !this.isLiked;
      console.log("Clicked Like Control:", $event);
      //this.change.emit({ newValue: this.isLiked });
      if(this.isLiked){
          this.likes++;
      } else {
          this.likes--;
      }
    };

} 